const User = require('../../models/user');
const controller = {}


//

controller.index = (req, res) => {
  User.find()
  .then(users => {
    res.render('index')
  })
}

controller.show = (req, res) => {
  // User.findByHeroId(req.session.user_id, req.params.hero_id)
  // .then(user => {
    res.render('index')
  // })

}

controller.login = (req, res) => {
  res.render('users/login')
}

controller.process_login = (req, res) => {
  //Authentication logic would go here

  res.redirect('/heroes');
}

controller.signup = (req, res) => {
  res.render('users/signup')
}

controller.new = (req, res) => {
  User
  .create(req.body.user)
  .then(() => {
    res.redirect('/users/login');
  })
  .catch((err) => {
    res.json(err);
  });
}

module.exports = controller
