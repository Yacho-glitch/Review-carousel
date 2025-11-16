const obj = [{
                img : "ffff.jpeg",
                name : "Susan Smith",
                job : "WEB DEVELOPER",
                paragh : "I'm baby meggings twee health goth + 1. Bicycle rights tumeric chartreuse before they sold out charmbray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
            },
            {
                img : "ssss.jpeg",
                name : "Peter Jones",
                job : "INTERN",
                paragh : "irijff ieurjiur iuiroeo oiuriej oiu ereiu ieui. oiuuierou iuri ouoiur eoiu oiuiuiuopipo oirouuiuir oiiuurioipe ioiruiepfk hhjhjfh iiuriuirjk iu jkjk iuiuiu jkjkiu jkj iui ukj oiuiui u kj kjkjkj kjoio ioi jkjkjkljkt"
            },
            {
                img : "gggg.jpeg",
                name : "Lyam Williams",
                job : "CEO",
                paragh : "erzr zererere trtfggf ghyttyry ytrytyr ytytytrfgd yt ytyt uyutpolkj jnkdilppi jjikieozldo dkjieihgk kieooiezr ieiiozekjsdf kjfdkdjsozpk dfjiurjhfnciji jkjjfdiuhgncfhhfi uiurizosofisdfo eiuriuuqskjfdi ueirier jkfdkj"
            }
            ];

const cardSection = document.querySelector('.cardSection');
let number = 0;

let displayCard = () => {
    cardSection.innerHTML = `
                            <img src="images/${obj[number].img}" alt="person">
                            <h4>${obj[number].name}</h4>
                            <h5>${obj[number].job}</h5>
                            <p>${obj[number].paragh}</p>
                            <div class="btnTags">
                                <button id="leftBtn">prev</button>
                                <button id="rightBtn">next</button>
                            </div>
                            <button id="randomObj">Surprise Me</button>
    `

    document.querySelector('#rightBtn').addEventListener('click', nextCard);
    document.querySelector('#leftBtn').addEventListener('click', prevCard);
}

displayCard();


function nextCard() {
    number++;
    if (number >= obj.length) {
        number = 0;
    }
    displayCard();
    console.log(number);
}

function prevCard() {
    number--;
    if (number < 0) {
        number = obj.length - 1;
    }
    displayCard();
    console.log(number)
}










































// THE LAST STEP : Random card

// function showRandom() {
//     let randomNum = Math.floor(Math.random() * obj.length);

//         cardContent.innerHTML = `
//                                 <img src="images/${obj[randomNum].img}" alt="person">
//                                 <h4>${obj[randomNum].name}</h4>
//                                 <h5>${obj[randomNum].job}</h5>
//                                 <p>${obj[randomNum].paragh}</p>
//                                 <div class="btnTags">
//                                     <button id="leftBtn">prev</button>
//                                     <button id="rightBtn">next</button>
//                                 </div>
//                                 <button id="randomObj">Surprise Me</button>
//         `

//     document.getElementById('randomObj').addEventListener('click', showRandom)
//     console.log(randomNum);
// }

// document.getElementById('randomObj').addEventListener('click', showRandom);














// const wholeContent = document.querySelector('.content');

// document.addEventListener('DOMContentLoaded', function() {
//           wholeContent.innerHTML = `<h1>Our Reviews</h1>
//                                     <div class="cardSection">
//                                         <img src="images/fffff.jpeg" alt="person">
//                                         <h5>Susan Smith</h5>
//                                         <h6>WEB DEVELOPER</h6>
//                                         <p>I'm baby meggings twee health goth + 1. Bicycle rights tumeric chartreuse
//                                             before they sold out charmbray pop-up. Shaman humblebrag pickled
//                                             coloring book salvia hoodie, cold-pressed four dollar toast everyday carry
//                                         </p>
//                                         <div class="btnTags">
//                                             <button id="leftBtn">prev</button>
//                                             <button id="rightBtn">next</button>
//                                         </div>
//                                         <button>Surprise Me</button>
//                                 </div>`;
// })
