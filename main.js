const reviews =  [
{
    id: 1,
    name: 'Lee Jong Suk',
    job: 'actor/model',
    img: './images/person1.png',
    text: "Lee Jong-Suk was born on 14 September 1989 in Yongin, Gyeonggi-do, Korea. He is an actor and executive, known for Romance Is a Bonus Book (2019), I Hear Your Voice (2013) and Pinocchio (2014).",
  },
  {
    id: 2,
    name: 'song hye kyu',
    job: 'actress/model',
    img: './images/person2.png',
    text: 'Song Hye-Kyo made her debut as a model, becoming the winner of a school uniform model competition at the age of 14. Born on November 22, 1981, she initially trained to become a figure skater at a young age in elementary',
  },
  {
    id: 3,
    name: 'song jung ki',
    job: 'actor/model',
    img: './images/person3.png',
    text: 'He was born September 19, 1985) is a South Korean actor. He rose to fame in the historical coming-of-age drama Sungkyunkwan Scandal (2010) and the variety show Running Man (2010-2011) as one of the original cast members.',
  },
  {
    id: 4,
    name: 'han so hee',
    job: 'actress/model',
    img: './images/person4.png',
    text: 'She was born Lee So-hee (이소희); November 18, 1994) is a South Korean actress and model. She began her career as a supporting character. Despite the fact that this native South Korean beauty hasn`t had a long career in the Korean entertainment industry, Han So-hee has earned the love of the people.',
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const randomBtn = document.querySelector(".randomBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
});

function showPerson(e) {
    const item = reviews[e];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    //console.log('next button is working');
    showPerson(currentItem);
});


prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    //console.log('prev button is working');
    showPerson(currentItem)
});

randomBtn.addEventListener('click', function() {
    //console.log('random button is working');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem)

})