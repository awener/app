const app = require('express')();


app.get("/", function(req, res) {
  return res.status(200).end("laocmurrdeploy?!?");
});

console.log("webhook much!");
app.listen(8085);
