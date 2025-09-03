window.addEventListener('DOMContentLoaded', () => {

const galleryItems = [
  // Character Design
  {
    category: "charDesign",
    path: "./images/art/characters/customDndCommission.webp",
  },
  {
    category: "charDesign",
    path: "./images/art/characters/elfiasConcepts.webp",
  },
  {
    category: "charDesign",
    path: "./images/art/characters/elfiasConcept2.webp",
  },
  { category: "charDesign", path: "./images/art/characters/jediConcept.webp" },
  {
    category: "charDesign",
    path: "./images/art/characters/mandalorianConcept.webp",
  },
  {
    category: "charDesign",
    path: "./images/art/characters/numnumConcept.webp",
  },

  // Comics
  { category: "comics", path: "./images/art/comics/IMG_1470.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1471.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1472.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1481.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1482.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1483.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1484.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1485.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1486.webp" },
  { category: "comics", path: "./images/art/comics/IMG_1487.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2313.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2314.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2315.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2316.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2344.webp" },
  { category: "comics", path: "./images/art/comics/IMG_2345.webp" },

  // Posters
  { category: "posters", path: "./images/art/posters/IMG_1556.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1588.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1612.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1643.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1656.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1711.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1720.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1748.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1755.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1820.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1832.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1833.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1871.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1883.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1896.webp" },
  { category: "posters", path: "./images/art/posters/IMG_1908.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2030.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2049.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2055.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2068.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2089.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2131.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2180.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2197.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2215.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2231.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2248.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2266.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2279.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2285.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2286.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2299.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2303.webp" },
  { category: "posters", path: "./images/art/posters/superman.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2390.webp" },
  { category: "posters", path: "./images/art/posters/IMG_2398.webp" },
];


const itemsPerPage = 15;
let galleryContainer = document.querySelector(".drawing");
let paginationContainer = document.querySelector(".pageNumbers")
let filterListItems = document.querySelectorAll(".list")
const modal = document.getElementById("image-modal")
const modalImg = document.getElementById("modal-img")
const modalClose = document.getElementById("modal-close")

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
    }


)}

function showModal(){
    galleryContainer.addEventListener('click', (event) => {
        const clickedBox = event.target.closest('.drawingBox')

        if(clickedBox){
            const dataPath = clickedBox.getAttribute('data-path')
            console.log(dataPath);
            modalImg.src = dataPath
            modal.style.visibility = 'visible'
        }
        })
        modalClose.addEventListener("click", () => {
          modal.style.visibility = 'hidden';
        });
        modal.addEventListener('click', (event) => {
            if(event.target === modal){
                modal.style.visibility = 'hidden'
            }
        })
}
  filterListeners();
  paginationListeners();
  updateGalView();
  showModal();

})
