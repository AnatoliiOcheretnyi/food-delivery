class ServiceProducts {
	constructor(containerProducts, containerCounter, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
		this.productsCatalog = productsCatalog;
		this.create();
	}
	create(){
        var wrapper = document.createElement('slot');
        
        var products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;

		for(var i=0; i<this.productsCatalog.length; i++) {

            var index = products.indexOf(this.productsCatalog[i].id);
            if(index === -1){
                var activeClass = '';
                var activeText = 'Додати в кошик';
            } else {
                var activeClass = ' btn-active';
                var activeText = 'Видалити з кошику';
            }

            var day = this.productsCatalog[i].day;
            switch(day){
                case 1:
                    var dayClass = ' mondayClass';
                    break;
                case 2:
                    var dayClass = ' thuesdayClass';
                    break;
               case 3:
                   var dayClass = ' wednesdayClass';
                   break;
                case 4:
                    var dayClass = ' thursdayClass';
                    break;
                case 5:
                    var dayClass = ' fridayClass';
                    break;
                case 6:
                    var dayClass = ' saturdayClass';
                    break;
                case 7:
                        var dayClass = ' sundayClass';
                        break;        
            }

            var type = this.productsCatalog[i].type;
            switch(type){
                case 1:
                    var typeClass = ' firstClass';
                    break;
                case 2:
                    var typeClass = ' secondClass';
                    break;
               case 3:
                   var typeClass = ' snackClass';
                   break;
                case 4:
                    var typeClass = ' sushiClass';
                    break;
                case 5:
                    var typeClass = ' pizzaClass';
                    break;      
            }

            var kitchen = this.productsCatalog[i].kitchen;
            switch(kitchen){
                case 1:
                    var kitchenClass = ' ukraineClass';
                    break;
                case 2:
                    var kitchenClass = ' japanClass';
                    break;
               case 3:
                   var kitchenClass = ' chineClass';
                   break;
                case 4:
                    var kitchenClass = ' franceClass';
                    break;
                case 5:
                    var kitchenClass = ' italyClass';
                    break;
                case 6:
                    var kitchenClass = ' indiaClass';
                    break;           
            }

			var item  = productsCreateElement.getElement({ tagName:'div',    className:'item' +dayClass +typeClass + kitchenClass});
			var name  = productsCreateElement.getElement({ tagName:'div',    className:'name',  innerText:this.productsCatalog[i].name });
			var img   = productsCreateElement.getElement({ tagName:'div',    className:'img',   backgroundImage:`url(${this.productsCatalog[i].img})` });
			var price = productsCreateElement.getElement({ tagName:'div',    className:'price', innerText:this.productsCatalog[i].price.toLocaleString()+' ГРН' });
			var btn   = productsCreateElement.getElement({ tagName:'button', className:'btn'+activeClass,   innerText:activeText, id:this.productsCatalog[i].id});

            btn.addEventListener('click', function(){
               var id = this.getAttribute('data-id');
               var result = serviceStore.putProduct(id);
               
                serviceProducts.containerCounter.innerText = result.products.length;

                if(result.pushProduct){
                    this.classList.add('btn-active');
                    this.innerText = 'Видалити з кошику'
                } else {
                    this.classList.remove('btn-active');
                    this.innerText = 'Додати в кошик'
                }
            })

			item.appendChild(name);
			item.appendChild(img);
			item.appendChild(price);
			item.appendChild(btn);
			wrapper.appendChild(item);
		}
		this.container.appendChild(wrapper);
	}
}

var serviceProducts = new ServiceProducts('.container-products', '.container-counter', productsCatalog);


