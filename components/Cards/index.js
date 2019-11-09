// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardcontainer = document.querySelector('.cards-container');
EmCards = async url =>{
    try{ 
        Response= await axios.get(url);
        const javascript = response.data.articles.javascript;
        const bootstrap = response.data.articles.bootstrap;
        const technology = response.data.articles.technology;
        const jquery = response.data.articles.jquery;
        const node = response.data.articles.node;
        javascript.forEach(item => {
            cardcontainer.appendChild(cardcreator(item));
          });
          bootstrap.forEach(item => {
            cardcontainer.appendChild(cardcreator(item));
          });
          technology.forEach(item => {
            cardcontainer.appendChild(cardcreator(item));
          });
          jquery.forEach(item => {
            cardcontainer.appendChild(cardcreator(item));
          });
          node.forEach(item => {
            cardcontainer.appendChild(cardcreator(item));
          });
        }
         catch (err) {
          console.log(err);
        }
};
EmCards('https://lambda-times-backend.herokuapp.com/articles');
function cardcreator(obj){
    const card  = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCard = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardSpan = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCard);
    imgCard.appendChild(cardImg);
    author.appendChild(cardSpan);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCard.classList.add('img-contianer');

    headline.textContent= obj.headline;
    cardImg.setAttribute('src', obj.authorPhoto);
    cardSpan.textContent = 'By' + obj.authorname;
    
    return card;
};