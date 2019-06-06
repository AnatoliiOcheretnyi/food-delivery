var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  console.log(req.query);
  
  var complexCatalog = [
    {id: 'c1', name:'елемент 1', price:100},
    {id: 'c2', name:'елемент 2', price:500},
    {id: 'c3', name:'елемент 3', price:100},
    {id: 'c4', name:'елемент 4', price:100},
    {id: 'c5', name:'елемент 5', price:100}
  ];

  var productsCatalog = [
    {id:'el1', day:11, kitchen:22, type:32, name:'борщ',price:100, img:'images/borshch.jpg'},
    {id:'el2', day:12, kitchen:22, type:32, name:'вареники',price:20, img:'images/varenuku.jpg'},
    {id:'el3', day:13, kitchen:23, type:31, name:'капрезе',   price:30, img:'images/caprese.jpg'},
    {id:'el4', day:14, kitchen:23, type:31, name:'нісуаз',price:10, img:'images/nisuaz.jpg'},
    {id:'el5', day:15, kitchen:23, type:33, name:'панкейк',price:200, img:'images/slide2.jpg'},
    {id:'el6', day:16, kitchen:23, type:33, name:'круасан',price:300, img:'images/kruasan.jpg'},
    {id:'el7', day:17, kitchen:24, type:34, name:'суші',price:100, img:'images/sushi.jpg'},
    {id:'el8', day:11, kitchen:21, type:34, name:'палермо',price:200, img:'images/slide6.jpg'},
    {id:'el9', day:12, kitchen:21, type:34, name:'верона',price:300, img:'images/hawaiian.jpg'},
    {id:'el10', day:13, kitchen:24, type:32, name:'місо суп',price:100, img:'images/miso.jpg'},
    {id:'el11', day:14, kitchen:24, type:34, name:'роли',price:200, img:'images/slide8.jpg'},
    {id:'el12', day:15, kitchen:22, type:33, name:'сирники',price:300, img:'images/slide5.jpg'},
    {id:'el99', day:16, kitchen:21, type:33, name:'панакота',price:300, img:'images/panakota.jpg'},
    {id:'el130', day:17, kitchen:22, type:33, name:'млинці',price:100, img:'images/pancakes.jpg'},
    {id:'el131', day:11, kitchen:23, type:33, name:'торт',price:200, img:'images/slide1.jpg'},
    {id:'el132', day:12, kitchen:22, type:32, name:'печеня',price:300, img:'images/slide4.jpg'},
    {id:'el1332', day:13, kitchen:23, type:33, name:'смаколик',price:300, img:'images/slide3.jpg'},
    {id:'el1232', day:14, kitchen:24, type:31, name:'морепродукти',price:300, img:'images/slide7.jpg'},
    {id:'el13', day:15, kitchen:21, type:33, name:'тірамісу', price:400, img:'images/tiramisu.jpg'}
  ];

    var day = [];
    var kitchen = [];
    var type = [];

    // if(req.query != {}){
      if(JSON.stringify(req.query)!==JSON.stringify({})){
        console.log(req.query)
      
      console.log('!!!!!!!!!');
      
      var params = req.query.params;
      console.log(params);
      
      var mas =  params.split(',');
      console.log(mas);
      
      for(var i = 0; i < mas.length; i++){
        var classId = mas[i].substring(0,1);
        // console.log(classId);
        
        if(classId == 1){
          day.push(mas[i])
        } else if (classId == 2) {
          kitchen.push(mas[i])
        } else if(classId == 3){
          type.push(mas[i])
        }
      }
    }
    
    var afterDays = [];
    
    // console.log(day);
    if(day.length > 0){
      for(var i = 0; i < day.length; i++){
        for(var j = 0; j < productsCatalog.length; j++){
          // console.log(productsCatalog[j].day);
          
            if (productsCatalog[j].day == day[i]) {
                afterDays.push(productsCatalog[j]);
            }
        }
      }
    } else {
      afterDays = productsCatalog;
    }
    // console.log(afterDays);
    
    var afterKitchen = [];
    if(kitchen.length > 0){
      for(var i = 0; i < kitchen.length; i++){
        for(var j = 0; j < afterDays.length; j++){
            if (afterDays[j].kitchen == kitchen[i]) {
                afterKitchen.push(afterDays[j]);
            }
        }
      }
    } else {
      afterKitchen = afterDays;
    }

    var afterType = [];
    if(type.length > 0){
      for(var i = 0; i < type.length; i++){
        for(var j = 0; j < afterKitchen.length; j++){
            if (afterKitchen[j].type == type[i]) {
                afterType.push(afterKitchen[j]);
            }
        }
      }
    } else {
      afterType = afterKitchen;
    }

  var data = [complexCatalog, afterType]

  res.send(data);
});

module.exports = router;
