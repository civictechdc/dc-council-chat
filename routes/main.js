const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
	// console.log('Rendering the home page');
	res.sendFile(path.join(__dirname, 'pages/index.html'));
});

module.exports = router;