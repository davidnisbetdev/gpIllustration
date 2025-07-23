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

let galleryPush = document.querySelector(".drawing");


function renderGallery(galleryItems){
    let galleryString = '';
    
    galleryItems.forEach(item => {
        galleryString += (`<div class="drawingBox" data-item="${item.category}"><img src="${item.path}"></div>`)
    }
    )

    galleryPush.innerHTML = galleryString

}

renderGallery(galleryItems)

const filterListItems = document.querySelectorAll(".list");
let galleryImages = document.querySelectorAll(".drawingBox");


filterListItems.forEach(item => {
    item.addEventListener('click', () => {
        filterListItems.forEach(li => li.classList.remove('active'))
        item.classList.add('active');

        const dataFilter = item.getAttribute("data-filter")

        galleryImages.forEach(image => {
            const itemCategory = image.getAttribute('data-item')

        if (dataFilter === 'all' || dataFilter === itemCategory){
            image.classList.remove('hide') 
        } else {
            image.classList.add('hide')
        }
    })
})
  });
})