let list = document.querySelectorAll('.list');
let drawingBox = document.querySelectorAll('.drawingBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')

        for(let k=0; k<drawingBox.length; k++){
            drawingBox[k].classList.remove('active')
            drawingBox[k].classList.add("hide");

            if(displayBox[k].getAttribute(data-item) == dataFilter || dataFilter == "all"){
                drawingBox[k].classList.remove('hide')
                drawingBox[k].classList.add("active");
            }
        }
    })
}