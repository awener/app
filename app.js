const app = require('express')();


app.get("/", function(req, res) {
  return res.status(200).end("TEST");
});

console.log("webhook much!");
app.listen(8085);
