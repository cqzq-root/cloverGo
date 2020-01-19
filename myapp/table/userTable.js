let express = require('express');
let mysql = require('../config/basicMysqlConnection');

let user = {
  index: '',
  value: '',
  list: `SELECT * from user;`, //列表查询
  insert(args) {
    user.index = '';
    user.value = '';
    args = filter(['id', 'name'], args)
    for (let key in args) {
      user.index = `${user.index}${key},`
      let re = /^[0-9]+.?[0-9]*/;
      if (re.test(args[key])) {
        user.value = `${user.value}${args[key]},`
      } else {
        user.value = `${user.value}'${args[key]}',`
      }
    }
    user.index = user.index.substr(0, user.index.length - 1);
    user.value = user.value.substr(0, user.value.length - 1);

    return `INSERT INTO user (${user.index}) VALUES(${user.value})`;
  }, //按需增加
  select(index, value) {
    return `SELECT * from user where ${index}=${value};` //按需查询
  },
  delete(index, value) {
    return `DELETE from user where ${index}=${value};` //按需删除
  },
  update(index, args) { //提交修改
    if (index in args) {
      user.value = '';
      args = filter(['id', 'task', 'name', 'created_at'], args)
      for (let key in args) {
        let re = /^[0-9]+.?[0-9]*/;
        if (re.test(args[key])) {
          user.value = `${user.value}${key}=${args[key]},`
        } else {
          user.value = `${user.value}${key}='${args[key]}',`
        }
      }
      user.value = user.value.substr(0, user.value.length - 1)
      return `UPDATE user SET ${user.value} WHERE ${index}=${args[index]};`
    }
  },
};
/*//参数过滤
function filter(arguments, obj) {
  let newObj = {}
  arguments.forEach(every =&gt; {
    if (every in obj) {
    newObj[every] = obj[every]
  }
});
  return newObj;
};*/
module.exports = user;