class ServiceComplex {
    constructor( containerComplex, complexCatalog){
        this.containerComplex = document.querySelector(containerComplex);
        this.complexCatalog = complexCatalog;
        this.create();
    }
    create(){       
			var wrapper = document.createElement('slot');
			var products = serviceStore.getProducts();

		for(var i=0; i<this.complexCatalog.length; i++) {
			
			var index = products.indexOf(this.complexCatalog[i].id);
            if(index === -1){
                var activeClass = '';
                var activeText = 'Обрати';
            } else {
                var activeClass = ' btnActive';
                var activeText = 'Вилучити';
            }

			var item  = productsCreateElement.getElement({ tagName:'div',    className:'ite' });
			var name  = productsCreateElement.getElement({ tagName:'div',    className:'name',  innerText:this.complexCatalog[i].name });
			var price = productsCreateElement.getElement({ tagName:'div',    className:'price', innerText:this.complexCatalog[i].price.toLocaleString()+' ГРН' });
			var btn   = productsCreateElement.getElement({ tagName:'button', className:'btn' +activeClass,    innerText:activeText, id:this.complexCatalog[i].id });

			btn.addEventListener('click', function(){
				var id = this.getAttribute('data-id');
				var result = serviceStore.putProduct(id);
				 if(result.pushProduct){
					 this.classList.add('btnActive');
					 this.innerText = 'Вилучити'
				 } else {
					 this.classList.remove('btnActive');
					 this.innerText = 'Обрати'
				 }
			 })

			item.appendChild(name);
			item.appendChild(price);
			item.appendChild(btn);
			wrapper.appendChild(item);
		}
		this.containerComplex.appendChild(wrapper);
        
		
	}
}

var serviceComplex = new ServiceComplex('.complexDinner', complexCatalog);