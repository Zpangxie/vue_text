function getInfo(req, res) {
  res.send({
    name: "711",
    level: 10,
  });
}

module.exports = {
    getInfo
}