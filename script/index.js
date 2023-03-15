const mainCards = document.querySelector('main-cards')
const mainUl = document.querySelector('.main-ul')

let productsData = [];

function ProductsDataList(list){

    for(let i = 0; i < list.length; i++){
        if(list[i].id > 0){
            productsData.push(list[i])
        }
    }
}
ProductsDataList(data)

function renderAllProducts(list){
    for(let i = 0; i < list.length; i++){
        const listLi = document.createElement('li')
        const imageLi = document.createElement('img')
        const tagLi = document.createElement('p')
        const titleLi = document.createElement('h3')
        const descriptionLi = document.createElement('p')
        const valueLi = document.createElement('p')
        const butttonLi = document.createElement('button')
    
        listLi.className = 'list-class'
        imageLi.className = 'image-li'
        tagLi.classList = 'tag-li'
        titleLi.className = 'title-li'
        descriptionLi.className = 'description-li'
        valueLi.className = 'value-li'
        butttonLi.className = 'button-li'
        
        imageLi.setAttribute('src', list[i].img)
        tagLi.innerText = list[i].tag
        titleLi.innerText = list[i].nameItem
        descriptionLi.innerText = list[i].description
        valueLi.innerText = `R$ ${list[i].value}`
        butttonLi.innerHTML = list[i].addCart
        butttonLi.id = `product-${list[i].id}`
        
        butttonLi.addEventListener('click', function(event){
            let productElement = event.target.id
            let id = parseInt(productElement.substring(8))

            let product = searchProduct(id)
            
            let liProductCart = productInMyCart(product)
            
            document.querySelector('.cart-list').appendChild(liProductCart)

            console.log(liProductCart);
        })

        listLi.append(imageLi, tagLi, titleLi, descriptionLi, valueLi, butttonLi)
        mainUl.appendChild(listLi)
    }
}

function searchProduct(id){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === id){
            return data[i]
        }
    }
}

function productInMyCart(product){
    const cartLiProd = document.createElement('li')
    const cartImageProd = document.createElement('img')
    const cartTitleProd = document.createElement('h3')
    const cartValueProd = document.createElement('p')
    const cartButttonProd = document.createElement('button')

    cartImageProd.setAttribute('src', product.img)
    cartTitleProd.innerText = product.nameItem
    cartValueProd.innerText = `R$ ${product.value}`
    cartButttonProd.innerHTML = product.addCart
    cartButttonProd.id = `product-${product.id}`

    cartLiProd.append(cartImageProd, cartTitleProd, cartValueProd, cartValueProd, cartButttonProd)
    return cartLiProd
}
// document.querySelector('.cart-list').appendChild(productInMyCart(data[0]))







renderAllProducts(data)