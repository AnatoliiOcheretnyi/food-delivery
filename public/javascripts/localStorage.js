class ServiceStore{
    constructor() {}
    getProducts(){
        var products = [];
        var productsLocalStorage = localStorage.getItem('products');
        if(productsLocalStorage !== null){
            products = JSON.parse(productsLocalStorage);
        } 
        return products;
    }
    putProduct(id){
        var products = this.getProducts();

        var index = products.indexOf(id);
        if(index === -1){
            products.push(id);
            var pushProduct = true;
        }else {
            products.splice(index, 1);
            var pushProduct = false;
        }        
        localStorage.setItem('products', JSON.stringify(products));
        return{
            pushProduct: pushProduct,
            products: products
        }
    }
}

var serviceStore = new ServiceStore();