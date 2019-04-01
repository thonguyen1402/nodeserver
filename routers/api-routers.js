// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

var contactController = require('./contactController.js')

router.route("/contact")
.get(contactController.index)
.post(contactController.new)
router.route('/contact/:contact_id')
.get(contactController.view)
.put(contactController.update)
.delete(contactController.delete)
// Export API routes
module.exports = router;