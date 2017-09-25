const app = require('express')();


app.get("/", function(req, res) {
  return res.status(200).end("TTT");
});

console.log("claws");
app.listen(8085);
