const app = require('express')();


app.get("/", function(req, res) {
  return res.status(200).end("TEST");
});


app.listen(8085);
