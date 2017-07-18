  const express = require("express");
  const router = express.Router();
  const md5 = require('md5');
  const axios = require('axios');

  const app = express();


  // these are set so they know which base url
  // in the individual routes for the resources themselves


  router.use('/api/marvel', (req, res) => {
    console.log(req.query);
    let timestamp = new Date()
    let hash = md5(timestamp+'bb57b71f904f691af92d51254eae098de7ab98b9'+'d87d9c5eec4d22d5af2a99cfadcf1299')
    axios(`https://gateway.marvel.com:443/v1/public/characters?name=${req.query.name}&ts=${timestamp}&apikey=d87d9c5eec4d22d5af2a99cfadcf1299&hash=${hash}`)
    .then(results => {
      console.log(results.data)
      res.send(results.data.data.results)
    })
    .catch(err => console.log(err));
  })

  router.use(
    "/users",
    require("./resources/users")
  );

  router.use(
    "/heroes",
    require("./resources/heroes")
  );

  router.use(
    "/",
    (req, res) => {
      res.render("index")
    }
  );



  // router.use(
  //   "/favorites",
  //   require("./resources/favorites")
  // );

  module.exports = router;
