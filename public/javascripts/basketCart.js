class BasketCart {
    constructor(containerCounter, containerCart, productCatolog){
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.productCatolog = productCatolog;
        this.create();
    }
    create(){
        

        this.containerCounter.addEventListener('click', function(){
            basketCart.containerCart.style.display = 'flex';
            var productCart = basketCart.getProductsCart();
            var wrapper = document.createElement('slot');
            var sumPrice = document.createElement('p');
            var sum = 0;

            for(var i = 0; i < productCart.length; i++){
                var item  = productsCreateElement.getElement({ tagName:'div',    className:'item' });
                var name  = productsCreateElement.getElement({ tagName:'div',    className:'name',  innerText:productCart[i].name });
                var img   = productsCreateElement.getElement({ tagName:'div',    className:'img',   backgroundImage:`url(${productCart[i].img})` });
                var price = productsCreateElement.getElement({ tagName:'div',    className:'price', innerText:productCart[i].price.toLocaleString()+' USD' });   

                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);

                sum += productCart[i].price;
            }

            var close = productsCreateElement.getElement({tagName: 'div', className: 'cart-close'});
            close.addEventListener('click', function(){
                basketCart.containerCart.innerHTML = '';
                basketCart.containerCart.style.display = 'none';
            });
            sumPrice.innerHTML = "Сума: " + sum;
            basketCart.containerCart.appendChild(wrapper);
            basketCart.containerCart.appendChild(sumPrice);
            basketCart.containerCart.appendChild(close);
            
        });
    }
    getProductsCart(){
        var products = serviceStore.getProducts();
        var productCart = [];
        for(var i = 0; i < this.productCatolog.length; i++){
            if(products.indexOf(this.productCatolog[i].id) !== -1){
            productCart.push(this.productCatolog[i]);
            }
        }
        return productCart;
    }
}

var basketCart = new BasketCart('.container-counter', '.container-cart', productsCatalog);