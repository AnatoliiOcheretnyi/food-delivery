var style = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

//   var data = [
//     {
//         "id": 1,
//         "name": "Капрезе",
//         "ingredients": "сир моцарела, помідори, базилік, оливковa олія",
//         "weight": "150г",
//         "price": 76,
//         "imgUrl": "../images/caprese.jpg",
//         "category": "італійська, салат, п'ятниця"
//     },
//     {
//       "id": 2,
//         "name": "Тірамісу",
//         "ingredients": "сир маскарпоне, цукор, яйця, печево савоярді, заварна кава, ром, какао порошок",
//         "weight": "220г",
//         "price": 70,
//         "imgUrl": "../images/tiramisu.jpg",
//         "category": "італійська, десерт"
//     },
//     {
//       "id": 3,
//         "name": "Піца гавайська",
//         "ingredients": "сир моцарелла, тісто, відварена курка, консервовані ананаси, італійські трави",
//         "weight": "710г",
//         "price": 134,
//         "imgUrl": "../images/hawaiian.jpg",
//         "category": "італійська, піца, середа"
//     },
//     {
//       "id": 4,
//         "name": "Панна котта",
//         "ingredients": "вершки, цукор, ваніль",
//         "weight": "175г",
//         "price": 45,
//         "imgUrl": "../images/panakota.jpg",
//         "category": "італійська, десерт, неділя"
//     },
//     {
//       "id": 5,
//         "name": "Качукко",
//         "ingredients": "восьминіг, мідії, тигрова криветка, кальмар",
//         "weight": "300г",
//         "price": 395,
//         "imgUrl": "../images/cacciucco.jpg",
//         "category": "італійська, гарячі_страви, субота"
//     },
//     {
//       "id": 6,
//         "name": "Нісуаз",
//         "ingredients": "картопля, томат чері, тунець, куряче філе",
//         "weight": "230г",
//         "price": 100,
//         "imgUrl": "../images/nisuaz.jpg",
//         "category": "французька, салат, четверг"
//     },
//     {
//       "id": 7,
//         "name": "Круасан",
//         "ingredients": "шоколад",
//         "weight": "50г",
//         "price": 10,
//         "imgUrl": "../images/kruasan.jpg",
//         "category": "французька, десерт"
//     },
//     {
//       "id": 8,
//         "name": "Борщ",
//         "ingredients": "картопля, буряк столовий, квасоля, капуста",
//         "weight": "350г",
//         "price": 30,
//         "imgUrl": "../images/borshch.jpg",
//         "category": "українська, гарячі_страви, понеділок"
//     },
//     {
//       "id": 9,
//         "name": "Вареники",
//         "ingredients": "сир",
//         "weight": "300г",
//         "price": 40,
//         "imgUrl": "../images/varenuku.jpg",
//         "category": "українська, гарячі_страви, понеділок, п'ятниця"
//     },
//     {
//       "id": 10,
//         "name": "Млинці",
//         "ingredients": "мак",
//         "weight": "250г",
//         "price": 50,
//         "imgUrl": "../images/pancakes.jpg",
//         "category": "українська, десерт"
//     },
//     {
//       "id": 11,
//         "name": "Суші",
//         "ingredients": "лосось свіжий, рис, норі, авокадо",
//         "weight": "250г",
//         "price": 114,
//         "imgUrl": "../images/sushi.jpg",
//         "category": "японська, вівторок"
//     },
//     {
//       "id": 12,
//         "name": "Місо",
//         "ingredients": "сир тофу, місо, вакамі, цибуля зелена",
//         "weight": "350г",
//         "price": 59,
//         "imgUrl": "../images/miso.jpg",
//         "category": "японська, гарячі_страви"
//     }
// ];

var productsCatalog = [
	{id:'el1', day:1, kitchen:1, type:1, name:'Canon EOS R',price:10000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
	{id:'el2', day:2, kitchen:1, type:1, name:'макарон',      price:20000, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el3', day:3, kitchen:1, type:1, name:'редька',   price:30000, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el4', day:4, kitchen:2, type:1, name:'ігор',         price:10000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
	{id:'el5', day:5, kitchen:2, type:1, name:'Canon EOS 650D',      price:20000, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el6', day:6, kitchen:2, type:1, name:'Canon EOS 5D Mark',   price:30000, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el7', day:7, kitchen:3, type:2, name:'Canon EOS R',         price:10000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
	{id:'el8', day:1, kitchen:3, type:2, name:'Canon EOS 650D',      price:20000, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el9', day:2, kitchen:3, type:1, name:'Canon EOS 5D Mark',   price:30000, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
  {id:'el10', day:3, kitchen:3, type:3, name:'Canon EOS R',         price:10000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
	{id:'el11', day:4, kitchen:4, type:3, name:'Canon EOS 650D',      price:20000, img:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
	{id:'el12', day:5, kitchen:4, type:3, name:'Canon EOS 5D Mark',   price:30000, img:'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
	{id:'el13', day:6, kitchen:4, type:3, name:'Sony Cyber-shot DSC', price:40000, img:'https://images.unsplash.com/photo-1500630417200-63156e226754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}
];

// var complexCatalog = [
//   {id: 'c1', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c2', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c3', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c4', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c5', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c6', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c7', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c8', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
//   {id: 'c9', name:'суп 1', price:1000, img:'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'}
// ]