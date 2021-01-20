module.exports= function(io){ 


const express = require('express');

const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');



router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get( '/users/:name', function (req, res) {
    let name= req.params.name

    let list = tweetBank.find( { name: name } );
    console.log(list)
    res.render( 'index', { tweets: list, showForm: true, twitero: name  });
  
  }); 

router.get('/tweets/:id', function (req, res) {
    let id= parseInt(req.params.id)
    console.log(id)
    let tweet = tweetBank.find( { id: id } );
    res.render( 'index',{ tweets: tweet });
  
  }); 

router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  return router;
};

  


  
