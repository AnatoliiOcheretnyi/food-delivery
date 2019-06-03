class ComplexCart {
    constructor(containerCounter, containerComplex, complexCatolog){
        this.containerCounter = document.querySelector(containerCounter);
        this.containerComplex = document.querySelector(containerComplex);
        this.complexCatolog = complexCatolog;
        this.create();
    }
    create(){
        
        this.containerCounter.addEventListener('click', function(){
            complexCart.containerComplex.style.display = 'flex';
            var complCart = complexCart.getProductsCart();
            var wrapper = document.createElement('slot');
            var sumPrice = document.createElement('p');
            var sum = 0;
    
            for(var i = 0; i < complCart.length; i++){
                var item  = productsCreateElement.getElement({ tagName:'div',    className:'item' });
                var name  = productsCreateElement.getElement({ tagName:'div',    className:'name',  innerText:complCart[i].name });   
                var price = productsCreateElement.getElement({ tagName:'div',    className:'price', innerText:complCart[i].price.toLocaleString()+' ГРН' });
                item.appendChild(name);
                item.appendChild(price);
                wrapper.appendChild(item);

                sum += complCart[i].price;
            }
            sumPrice.innerHTML = "Сума: " + sum;
           complexCart.containerComplex.appendChild(wrapper);  
           basketCart.containerCart.appendChild(sumPrice);         
        });
    }
    getProductsCart(){
        var products = serviceStore.getProducts();
        var complCart = [];
        for(var i = 0; i < this.complexCatolog.length; i++){
            if(products.indexOf(this.complexCatolog[i].id) !== -1){
            complCart.push(this.complexCatolog[i]);
            }
        }
        return complCart;
    }
}

var complexCart = new ComplexCart('.containerCounter', '.containerComplex', complexCatalog);