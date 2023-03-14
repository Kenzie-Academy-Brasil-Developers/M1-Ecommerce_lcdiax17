const mainCards = document.querySelector('main-cards')
const mainUl = document.querySelector('main-ul')


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
    const titleLi = document.createElement('h3')
    const descriptionLi = document.createElement('p')
    const valueLi = document.createElement('p')
    const butttonLi = document.createElement('button')

    imageLi.setAttribute('src', productsData[i].img)
    titleLi.innerText = productsData[i].nameItem
    descriptionLi.innerText = productsData[i].description
    valueLi.innerText = productsData[i].value
    butttonLi.innerHTML = productsData[i].addCart

    listLi.append(imageLi, titleLi, descriptionLi, valueLi, butttonLi)

    
}