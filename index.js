const Card = document.querySelectorAll(".cell")
const Front = document.querySelectorAll(".front")
const Score = document.querySelector(".score span")
const Container = document.querySelector(".container")



function changeImage() {

    Card.forEach(a => {
        const number = [...Array(Card.length).keys()]
        const rand = Math.floor(Math.random() * Card.length)

        a.style.order = number[rand]
    })
}

changeImage()
Click()


function Click() {
    for (let i = 0; i < Card.length; i++) {

        Front[i].classList.add('showcard')

        setInterval(() => {
            Front[i].classList.remove('showcard')
        }, 2000);



        Card[i].addEventListener('click', () => {

            Front[i].classList.add('turn')
            const CardFlipped = document.querySelectorAll('.turn')

            if (CardFlipped.length == 2) {

                Container.style.pointerEvents = 'none'
                setInterval(()=> {}, 1000);
                Container.style.pointerEvents = 'all'
                Match(CardFlipped[0], CardFlipped[1])
            }
        })
    }
}

function Match(Card1, Card2) {

    if (Card1.dataset.index == Card2.dataset.index) {

        Score.innerHTML = parseInt(Score.innerHTML) + 1 


        Card1.classList.remove('turn')
        Card2.classList.remove('turn')

        Card1.classList.add('matched')
        Card2.classList.add('matched')

    }
    else {
        setTimeout(() => {
            Card1.classList.remove('turn')
            Card2.classList.remove('turn')
        }, 1000);
    }

}