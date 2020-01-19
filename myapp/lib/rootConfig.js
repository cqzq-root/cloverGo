var express = require('express');
var router = express.Router();
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var productRouter = require('../routes/product');
//路由组件进行封装
const ROOTMAPPING = {
rootMap:{

  '/':indexRouter, //

  '/product': productRouter,

  '/users': usersRouter//用户
}
}

module.exports = ROOTMAPPING; //用module.exports暴露出这个接口，