var express = require('express');
var router = express.Router();
var Aktie = require('../models/aktier');

router.route('/aktier')
	.get(function(req, res){
		console.log('Got GET');
		Aktie.find(function(err, aktier){
			if (err) return res.send(err);
			res.json(aktier);
		});
	})
	.post(function(req, res){
		console.log('Got POST')
		var aktie = new Aktie(req.body); 
		console.log(req.body);
		aktie.save(function(err){
			if (err) return res.send(err);
		})
			res.json(req.body);
	});

router.route('/aktier/:name')
	.get(function(req, res){
		console.log('Got INDIVIDUAL GET');
		Aktie.findOne({name: req.params.name}, function(err, aktie){
			if (err) return res.send(err);
			res.json(aktie);
		})
	})
	.delete(function(req, res){
		console.log('Got DELETE');
		Aktie.remove({name: req.params.name}, function(err, aktie){
			if (err) return res.send(err);
			res.json({message: 'Deletion completed'});

		});
			

	});
	module.exports = router;