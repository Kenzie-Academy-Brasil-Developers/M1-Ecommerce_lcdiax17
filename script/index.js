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
        valueLi.innerText = list[i].value
        butttonLi.innerHTML = list[i].addCart
    
        listLi.append(imageLi, tagLi, titleLi, descriptionLi, valueLi, butttonLi)
        
        mainUl.appendChild(listLi)
    }
}
renderAllProducts(data)