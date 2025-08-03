window.addEventListener('DOMContentLoaded', () => {

const galleryItems = [
  // Character Design
  { category: 'charDesign', path: './images/art/characters/customDndCommission.PNG' },
  { category: 'charDesign', path: './images/art/characters/elfiasConcepts.PNG' },
  { category: 'charDesign', path: './images/art/characters/elfiasConcept2.PNG' },
  { category: 'charDesign', path: './images/art/characters/jediConcept.PNG' },
  { category: 'charDesign', path: './images/art/characters/mandalorianConcept.PNG' },
  { category: 'charDesign', path: './images/art/characters/numnumConcept.PNG' },

  // Comics
  { category: 'comics', path: './images/art/comics/IMG_1470.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1471.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1472.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1481.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1482.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1483.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1484.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1485.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1486.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_1487.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_2313.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_2314.jpg' },
  { category: 'comics', path: './images/art/comics/IMG_2315.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_2316.PNG' },
  { category: 'comics', path: './images/art/comics/IMG_2344.jpg' },
  { category: 'comics', path: './images/art/comics/IMG_2345.PNG' },

  // Posters
  { category: 'posters', path: './images/art/posters/IMG_1556.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1588.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1612.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1643.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1656.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1711.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1720.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1748.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1755.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1820.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1832.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1833.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1871.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1883.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1896.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_1908.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2030.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2049.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2055.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2068.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2089.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2131.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2180.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2197.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2215.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2231.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2248.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2266.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2267.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2279.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2285.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2286.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2299.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2303.PNG' },
  { category: 'posters', path: './images/art/posters/IMG_2343.PNG' },
];


const itemsPerPage = 15;
let galleryContainer = document.querySelector(".drawing");
let paginationContainer = document.querySelector(".pageNumbers")
let filterListItems = document.querySelectorAll(".list")
let modalContainer = document.querySelector(".drawing")

let state = {
    currentItems: galleryItems.filter(item => item.category === 'posters'),
    currentPage: 1
}

function updateGalView(){
    const startIndex = (state.currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = state.currentItems.slice(startIndex, endIndex)

    const pagesTotal = Math.ceil(state.currentItems.length / itemsPerPage)

    renderGallery(itemsToShow, galleryContainer)
    renderPagination(paginationContainer, pagesTotal, state.currentPage)
}

function renderGallery(itemsToShow, galleryContainer) {
  let galleryString = "";

  itemsToShow.forEach((item) => {
    galleryString += `<div class="drawingBox" data-item="${item.category}" data-path="${item.path}"><img src="${item.path}"></div>`;
  });

  galleryContainer.innerHTML = galleryString;
}

function renderPagination(paginationContainer, pagesTotal, currentPage){
    paginationContainer.innerHTML = ''
    let pages = ''

    for(let i = 1; i <= pagesTotal; i++){
        const isActive = i === currentPage ? 'active' : ''
        pages += (`<a href="#two" class="page-link ${isActive}" data-page="${i}">${i}</a>`)
    }

    paginationContainer.innerHTML = pages
}

function filterListeners(){
    filterListItems.forEach(item => {
        item.addEventListener('click', () => {
            filterListItems.forEach(li => li.classList.remove('active'))
            item.classList.add('active')

            const dataFilter = item.getAttribute('data-filter')

            if (dataFilter === 'all'){
                state.currentItems = galleryItems
            } else {
                state.currentItems = galleryItems.filter(galleryItem => {
                   return galleryItem.category === dataFilter
                })
            }
            state.currentPage = 1
            updateGalView()
        })
    })
}

function paginationListeners(){
    paginationContainer.addEventListener('click', (event) => {
        if(event.target.matches('.page-link')) {
            event.preventDefault()

            const pageNumber = parseInt(event.target.getAttribute('data-page'), 10)

            state.currentPage = pageNumber
            updateGalView()
        }
    })


}
  filterListeners();
  paginationListeners();
  updateGalView();

function showModal(){



    modalContainer.addEventListener('click', (event) => {
        const clickedBox = event.target.closest('.drawingBox')

        if(clickedBox){
            const dataPath = clickedBox.getAttribute('data-path')
            console.log(dataPath);

            const modalSrc = dataPath

            
        }
    })
}

showModal();
})
