const mainCards = document.querySelector('main-cards')
const mainUl = document.getElementsByTagName('ul')


let productsData = [];

function renderProductsData(list){

    for(let i = 0; i < list.length; i++){
        if(list[i] == id[i]){
            productsData.push(list[i])
        }
    }
}

renderProductsData(data)

for(let i = 0; i < productsData.length; i++){
    const listLi = document.createElement('li')
}