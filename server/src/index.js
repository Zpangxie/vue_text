// 引入 express 框架
const express = require("express");
const userController = require("./controller/user");
const shopController = require("./controller/shop");

// 初始化 express 框架，获取应用实例
const app = express();

// 声明端口号
const port = 3000;

/**
 * /user/xxxx 获取用户信息的接口
 */
app.get("/api/user/getName", userController.getName);
app.get("/api/user/getAddress", userController.getAddress);

/**
 * /shop/xxxx 获取商店信息接口
 */
app.get("/api/shop/getInfo",shopController.getInfo);

// 开启服务
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
