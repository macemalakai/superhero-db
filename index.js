  const express = require("express");
  const app = express();

  require("dotenv").config();

  app.set("view engine", "ejs");

  app.use(express.static("./public"));

  const session = require("express-session");
  const MongoStore = require("connect-mongo")(session);

//   app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({
//         url: process.env.MONGODB_URI || "mongodb://localhost:27017/sessions"
//     })
// }));


  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(require("./resources"));






  const port = process.env.PORT || 3000;

  app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  });
