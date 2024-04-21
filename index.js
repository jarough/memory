const Card = document.querySelectorAll(".cell")
const Front = document.querySelectorAll(".front")



function changeImage() {

    Card.forEach(a=> {
        const number = [...Array(Card.length).keys()]
        const rand = Math.floor(Math.random()*Card.length)

        a.style.order = number[rand]
    })
}

changeImage()
Click()


function Click() {
    for(let i=0;i<Card.length;i++) {

        Card[i].addEventListener('click', ()=>{

            Front[i].classList.add('turn')
            const CardFlipped = document.querySelectorAll('.turn')

            if(CardFlipped.length == 2){
                Match(CardFlipped[0], CardFlipped[1])
            }
        })
    }
}

function Match(Card1, Card2) {

    if(Card1.dataset.index == Card2.dataset.index){

    }
    else {
        Card1.classList.remove('turn')
        Card2.classList.remove('turn')
    }

}