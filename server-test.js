// const express = require('express');
import express from 'express';
import path from 'path';
const app = express();
const port = 3220;

// 解析JSON格式的请求体
app.use(express.json());

// 解析URL编码的请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(process.cwd(),'./client-test\/client')) );
// 定义一个简单的路由
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
