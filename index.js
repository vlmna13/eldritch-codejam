// let ancients = {
//     azathoth,
//     cthulhu,
//     iogSothoth,
//     shubNiggurath
// }

// let cardsBlue = {
//     blue1,
//     blue2,
//     blue3,
//     blue4,
//     blue5,
//     blue6,
//     blue7,
//     blue8,
//     blue9,
//     blue10,
//     blue11,
//     blue12,
// }

// let cardsBrown = {
//     brown1,
//     brown2,
//     brown3,
//     brown4,
//     brown5,
//     brown6,
//     brown7,
//     brown8,
//     brown9,
//     brown10,
//     brown11,
//     brown12,
//     brown13,
//     brown14,
//     brown15,
//     brown16,
//     brown17,
//     brown18,
//     brown19,
//     brown20,
//     brown21,
// }

// let cardsGreen = {
//     green1,
//     green2,
//     green3,
//     green4,
//     green5,
//     green6,
//     green7,
//     green8,
//     green9,
//     green10,
//     green11,
//     green12,
//     green13,
//     green14,
//     green15,
//     green16,
//     green17,
//     green18,
// };

let ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
    //   cardFace: Ancients.azathoth,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
    //   cardFace: Ancients.cthulhu,
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
    //   cardFace: Ancients.iogSothoth,
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
    //   cardFace: Ancients.shubNiggurath,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
]

// let difficulties = [
//     {
//       id: 'easy',
//       name: 'Низкая'
//     },
//     {
//       id: 'normal',
//       name: 'Средняя'
//     },
//     {
//       id: 'hard',
//       name: 'Высокая'
//     },
// ]

let cardsDataBlue = [
    {
      id: 'blue1',
      cardFace: './assets/MythicCards/blue/blue1.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: './assets/MythicCards/blue/blue2.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: './assets/MythicCards/blue/blue3.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: './assets/MythicCards/blue/blue4.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: './assets/MythicCards/blue/blue5.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: './assets/MythicCards/blue/blue6.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: './assets/MythicCards/blue/blue7.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: './assets/MythicCards/blue/blue8.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: './assets/MythicCards/blue/blue9.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: './assets/MythicCards/blue/blue10.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: './assets/MythicCards/blue/blue11.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: './assets/MythicCards/blue/blue12.png',
      difficulty: 'normal',
      color:'blue'
    },
]

let cardsDataBrown = [
    {
      id: 'brown1',
      cardFace: './assets/MythicCards/brown/brown1.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: './assets/MythicCards/brown/brown2.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: './assets/MythicCards/brown/brown3.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: './assets/MythicCards/brown/brown4.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: './assets/MythicCards/brown/brown5.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: './assets/MythicCards/brown/brown6.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: './assets/MythicCards/brown/brown7.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: './assets/MythicCards/brown/brown8.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: './assets/MythicCards/brown/brown9.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: './assets/MythicCards/brown/brown10.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: './assets/MythicCards/brown/brown11.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: './assets/MythicCards/brown/brown12.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: './assets/MythicCards/brown/brown13.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: './assets/MythicCards/brown/brown14.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: './assets/MythicCards/brown/brown15.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: './assets/MythicCards/brown/brown16.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: './assets/MythicCards/brown/brown17.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: './assets/MythicCards/brown/brown18.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: './assets/MythicCards/brown/brown19.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: './assets/MythicCards/brown/brown20.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: './assets/MythicCards/brown/brown21.png',
      difficulty: 'easy',
      color:'brown'
    },
]

let cardsDataGreen = [
    {
      id: 'green1',
      cardFace: './assets/MythicCards/green/green1.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: './assets/MythicCards/green/green2.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: './assets/MythicCards/green/green3.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: './assets/MythicCards/green/green4.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: './assets/MythicCards/green/green5.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: './assets/MythicCards/green/green6.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: './assets/MythicCards/green/green7.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: './assets/MythicCards/green/green8.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: './assets/MythicCards/green/green9.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: './assets/MythicCards/green/green10.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: './assets/MythicCards/green/green11.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: './assets/MythicCards/green/green12.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: './assets/MythicCards/green/green13.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: './assets/MythicCards/green/green14.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: './assets/MythicCards/green/green15.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: './assets/MythicCards/green/green16.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: './assets/MythicCards/green/green17.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: './assets/MythicCards/green/green18.png',
      difficulty: 'easy',
      color:'green'
    },
]

let ancientCards = document.querySelectorAll('.ancient-card');
let chooseButtons = document.querySelectorAll('.choose-difficulty');
let centerPart = document.querySelector('.center');
let settings = {
    'deck': '',
    'difficulty': '',
};

let greenDots = document.querySelectorAll('.green');
let brownDots = document.querySelectorAll('.brown');
let blueDots = document.querySelectorAll('.blue')

function fillDots(deck) {

    if (deck === 'azathoth') {
        greenDots[0].textContent = ancientsData[0].firstStage.greenCards;
        greenDots[1].textContent = ancientsData[0].secondStage.greenCards;
        greenDots[2].textContent = ancientsData[0].thirdStage.greenCards;
        blueDots[0].textContent = ancientsData[0].firstStage.blueCards;
        blueDots[1].textContent = ancientsData[0].secondStage.blueCards;
        blueDots[2].textContent = ancientsData[0].thirdStage.blueCards;
        brownDots[0].textContent = ancientsData[0].firstStage.brownCards;
        brownDots[1].textContent = ancientsData[0].secondStage.brownCards;
        brownDots[2].textContent = ancientsData[0].thirdStage.brownCards;
    } else if (deck === 'cthulthu') {
        greenDots[0].textContent = ancientsData[1].firstStage.greenCards;
        greenDots[1].textContent = ancientsData[1].secondStage.greenCards;
        greenDots[2].textContent = ancientsData[1].thirdStage.greenCards;
        blueDots[0].textContent = ancientsData[1].firstStage.blueCards;
        blueDots[1].textContent = ancientsData[1].secondStage.blueCards;
        blueDots[2].textContent = ancientsData[1].thirdStage.blueCards;
        brownDots[0].textContent = ancientsData[1].firstStage.brownCards;
        brownDots[1].textContent = ancientsData[1].secondStage.brownCards;
        brownDots[2].textContent = ancientsData[1].thirdStage.brownCards;
    } else if (deck === 'iog-sothoth') {
        greenDots[0].textContent = ancientsData[2].firstStage.greenCards;
        greenDots[1].textContent = ancientsData[2].secondStage.greenCards;
        greenDots[2].textContent = ancientsData[2].thirdStage.greenCards;
        blueDots[0].textContent = ancientsData[2].firstStage.blueCards;
        blueDots[1].textContent = ancientsData[2].secondStage.blueCards;
        blueDots[2].textContent = ancientsData[2].thirdStage.blueCards;
        brownDots[0].textContent = ancientsData[2].firstStage.brownCards;
        brownDots[1].textContent = ancientsData[2].secondStage.brownCards;
        brownDots[2].textContent = ancientsData[2].thirdStage.brownCards;
    } else {
        greenDots[0].textContent = ancientsData[3].firstStage.greenCards;
        greenDots[1].textContent = ancientsData[3].secondStage.greenCards;
        greenDots[2].textContent = ancientsData[3].thirdStage.greenCards;
        blueDots[0].textContent = ancientsData[3].firstStage.blueCards;
        blueDots[1].textContent = ancientsData[3].secondStage.blueCards;
        blueDots[2].textContent = ancientsData[3].thirdStage.blueCards;
        brownDots[0].textContent = ancientsData[3].firstStage.brownCards;
        brownDots[1].textContent = ancientsData[3].secondStage.brownCards;
        brownDots[2].textContent = ancientsData[3].thirdStage.brownCards;
    }
    
}

ancientCards.forEach(card => {
    card.addEventListener('click', (event) => {
        ancientCards.forEach(el => {
            el.classList.remove('active');
        })
        event.target.classList.add('active');
        centerPart.classList.add('active');
        settings['deck'] = event.target.getAttribute('data-deck');
        fillDots(settings['deck']);
    });
    
})

chooseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        chooseButtons.forEach(el => {
            el.classList.remove('active');
        });
        event.target.classList.toggle('active');
        settings['difficulty'] = event.target.getAttribute('data-difficulty');
    });
})

function fillEasyDeck(difficulty) {
    if (difficulty === 'very-easy') {

    }
}















