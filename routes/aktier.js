var express = require('express');
var router = express.Router();
var Aktie = require('../models/aktier');

router.route('/aktier')
	.get(function(req, res){
		console.log('Fick get')
		Aktie.find(function(err, aktier){
			if (err) return res.send(err);
			res.json(aktier);
		});
	})
	.post(function(req, res){
		var aktie = new Aktie(req.body); 

		aktie.save(function(err){
			if (err) return res.send(err);
		})
	});

	module.exports = router;