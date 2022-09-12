const getInputId =(id)=>{
    const input = document.getElementById(id);
    const inputValue = input.value;
    input.value =''
    return inputValue;
}

const addProduct=()=>{
    const productField = getInputId('product-name');
    const quantityField = getInputId('product-quantity')

    const number = Number(quantityField)
    if(!isNaN(productField)|| !Number.isInteger(number)){
        confirm('vul input dica');
        return;
    }

 setlocalStorage(productField, quantityField)
  display()
}

 const getLocalStorageData =()=>{
    const products = localStorage.getItem('allProduct')
    const parseProduct = JSON.parse(products)
    return parseProduct;
 }


 const setlocalStorage =(name, quantity)=>{
   let products = getLocalStorageData()
  
    if(!products){
        products ={}
    }
    
    if( products[name]){
        products[name] = parseInt( products[name])+parseInt(quantity)
    }
    else{
        products[name]=quantity;
    }
    localStorage.setItem('allProduct', JSON.stringify(products))
}

const display=()=>{
    const products =getLocalStorageData()
    // console.log(products);
    const section = document.getElementById('all-products');
    section.textContent =''
    for(let product in products){
        // console.table(product, products[product])
        const name = product;
        const quantity = products[product]
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
        <span class="fs-4">${name}</span>
        Quantity
        <small>${quantity}</small>
    </div>
        `;
        section.appendChild(div)
    }

}
display()



const addClear=()=>{
  
    localStorage.clear()
    
}
addClear()