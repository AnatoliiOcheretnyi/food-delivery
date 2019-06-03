var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  console.log(req.query);
  
  var complexCatalog = [
    {id: 'c1', name:'елемент 1', price:10000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id: 'c2', name:'елемент 2', price:500, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id: 'c3', name:'елемент 3', price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id: 'c4', name:'елемент 4', price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id: 'c5', name:'елемент 5', price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'}
  ];

  var productsCatalog = [
    {id:'el1', day:11, kitchen:21, type:31, name:'суп',price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id:'el2', day:12, kitchen:21, type:31, name:'макарон',      price:20, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el3', day:13, kitchen:21, type:31, name:'редька',   price:30, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el4', day:14, kitchen:22, type:31, name:'равлики',         price:10, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id:'el5', day:15, kitchen:22, type:31, name:'багет',      price:200, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el6', day:16, kitchen:22, type:31, name:'круасан',   price:3000, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el7', day:17, kitchen:23, type:32, name:'паста',         price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id:'el8', day:11, kitchen:23, type:32, name:'палермо',      price:200, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el9', day:12, kitchen:23, type:31, name:'верона',   price:300, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el10', day:13, kitchen:23, type:33, name:'фоджа',         price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id:'el11', day:14, kitchen:24, type:33, name:'роли',      price:200, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el12', day:15, kitchen:24, type:33, name:'сашимі',   price:300, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el99', day:12, kitchen:23, type:31, name:'верона',   price:300, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el130', day:13, kitchen:23, type:33, name:'фоджа',         price:100, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
    {id:'el131', day:14, kitchen:24, type:33, name:'роли',      price:200, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el132', day:15, kitchen:24, type:33, name:'сашимі',   price:300, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {id:'el13', day:16, kitchen:24, type:33, name:'угор', price:400, img:'https://images.unsplash.com/photo-1500630417200-63156e226754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
  ];

  var data = [complexCatalog, productsCatalog]

  res.send(data);
});

module.exports = router;
