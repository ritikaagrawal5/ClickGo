document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'lion',
        img: 'url(lion.png)',
      },
      {
        name: 'housefly',
        img: 'url(housefly.png)',
      },
      {
        name: 'doraemon',
        img: 'url(doraemon.png)',
      },
      {
        name: 'lamb',
        img: 'url(lamb.png)',
      },
      {
        name: 'monkey',
        img: 'url(monkey.png)',
      },
      {
        name: 'turtle',
        img: 'url(turtle.png)',
      },
      {
        name: 'lion',
        img: 'url(lion.png)',
      },
      {
        name: 'housefly',
        img: 'url(housefly.png)',
      },
      {
        name: 'doraemon',
        img: 'url(doraemon.png)',
      },
      {
        name: 'lamb',
        img: 'url(lamb.png)',
      },
      {
        name: 'monkey',
        img: 'url(monkey.png)',
      },
      {
        name: 'turtle',
        img: 'url(turtle.png)',
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'url(visualization.png)')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'url(visualization.png)')
        cards[optionTwoId].setAttribute('src', 'url(visualization.png)')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'url(blank3.jpg)')
        cards[optionTwoId].setAttribute('src', 'url(blank3.jpg)')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'url(visualization.png)')
        cards[optionTwoId].setAttribute('src', 'url(visualization.png)')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
