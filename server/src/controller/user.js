function getName(request, response) {
  const uid = Number(request.query.uid);
  // 允许跨域
  // response.set("Access-Control-Allow-Origin", "*");
  // 如果有 uid
  if (uid) {
    // 根据 uid 查询数据库
    const database = [
      { id: 1, name: "李四" },
      { id: 2, name: "张三" },
      { id: 3, name: "王麻子" },
    ];
    let target;
    for (let i = 0; i < database.length; i++) {
      const current = database[i];
      if (current.id === uid) {
        target = current;
      }
    }

    // 如果查找到用户，返回用户名
    if (target) {
      response.send({
        errorCode: 0,
        name: target.name,
      });
    }
    // 如果未查找到用户，返回错误信息
    else {
      response.send({
        errorCode: 1,
        errorMessage: "未查找到用户",
        name: null,
      });
    }
  }
  // 如果没有 uid，返回错误信息
  else {
    response.send({
      errorCode: 1,
      errorMessage: "没有传入查询参数",
      name: null,
    });
  }
}

function getAddress(req, res) {
  res.send([
    {
      location: "北京",
      street: "小关街道",
    },
    {
      location: "北京",
      street: "回龙观街道",
    },
  ]);
}

module.exports = {
  getName,
  getAddress,
};
