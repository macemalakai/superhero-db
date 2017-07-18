const Hero = require('./../../models/hero')
const controller = {}



controller.index = (req, res) => {
  Hero.find()
  .then(heroes => {
    console.log(heroes);
    res.render('heroes/hero')
  })
}

controller.show = (req, res) => {
  User.findByHeroId(req.session.user_id, req.params.hero_id)
  .then(hero => {
    res.render('hero', {hero})
  })
  .catch((err) => {
    console.log(err);
  })

}




module.exports = controller