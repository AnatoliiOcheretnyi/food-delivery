class ServiceProducts {
	constructor(containerProducts, containerCounter, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
		this.productsCatalog = productsCatalog;
		this.create();
	}
	create(){
        var wrapper = document.createElement('slot' );
        
        var products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;

		for(var i=0; i<this.productsCatalog.length; i++) {

            var index = products.indexOf(this.productsCatalog[i].id);
            if(index === -1){
                var activeClass = '';
                var activeText = 'Додати в кошик';
            } else {
                var activeClass = ' btnActive';
                var activeText = 'Видалити з кошику';
            }

            var item  = productsCreateElement.getElement({ tagName:'div',    className:'item'});
            item.setAttribute('data-price', this.productsCatalog[i].price); 
			var name  = productsCreateElement.getElement({ tagName:'div',    className:'name',  innerText:this.productsCatalog[i].name });
			var img   = productsCreateElement.getElement({ tagName:'div',    className:'img',   backgroundImage:`url(${this.productsCatalog[i].img})` });
			var price = productsCreateElement.getElement({ tagName:'div',    className:'price', innerText:this.productsCatalog[i].price.toLocaleString()+' ГРН' });
			var btn   = productsCreateElement.getElement({ tagName:'button', className:'btn'+activeClass,   innerText:activeText, id:this.productsCatalog[i].id});

            btn.addEventListener('click', function(){
               var id = this.getAttribute('data-id');
               var result = serviceStore.putProduct(id);
               
                serviceProducts.containerCounter.innerText = result.products.length;

                if(result.pushProduct){
                    this.classList.add('btnActive');
                    this.innerText = 'Видалити з кошику'
                } else {
                    this.classList.remove('btnActive');
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

var serviceProducts = new ServiceProducts('.containerProducts', '.containerCounter', productsCatalog);


