const mainCards = document.querySelector('main-cards')
const mainUl = document.querySelector('.main-ul')


let productsData = [];

function renderProductsData(list){

    for(let i = 0; i < list.length; i++){
        if(list[i].id > 0){
            productsData.push(list[i])
        }
    }
}

renderProductsData(data)

for(let i = 0; i < productsData.length; i++){
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

    imageLi.setAttribute('src', productsData[i].img)
    tagLi.innerText = productsData[i].tag
    titleLi.innerText = productsData[i].nameItem
    descriptionLi.innerText = productsData[i].description
    valueLi.innerText = productsData[i].value
    butttonLi.innerHTML = productsData[i].addCart

    listLi.append(imageLi, tagLi, titleLi, descriptionLi, valueLi, butttonLi)
    
    mainUl.appendChild(listLi)
}