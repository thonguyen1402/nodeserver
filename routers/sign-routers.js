let router = require('express').Router();

router.get('/',function(req, res){
	res.render('home')
})

var signController = require('../controllers/Controller_sign.js')
//sign-in
router.route('/signin')
.get(signController.viewSignIn)
.post(signController.signin)
.put(signController.update)
//sign-up
router.route('/signup')
.get(signController.viewSignUp)
.post(signController.signup)

module.exports = router