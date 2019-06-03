document.querySelector('#sortL').onclick = mySort1;
document.querySelector('#sortH').onclick = mySort;

function mySort(){
    var sort = document.querySelector('slot');
    for(var i = 0; i < sort.children.length; i++){
        for(var j = i; j < sort.children.length; j++){
            if(+sort.children[i].getAttribute('data-price') > +sort.children[j].getAttribute('data-price')){
                replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertAfter(replaceNode, sort.children[i]);
            }
        }

    }
}

function mySort1(){
    var sort = document.querySelector('slot');
    for(var i = 0; i < sort.children.length; i++){
        for(var j = i; j < sort.children.length; j++){
            if(+sort.children[i].getAttribute('data-price') < +sort.children[j].getAttribute('data-price')){
                replaceNode = sort.replaceChild(sort.children[j], sort.children[i]);
                insertAfter(replaceNode, sort.children[i]);
            }
        }

    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}