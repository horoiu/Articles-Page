/*global Article*/
/*global commentsFunction*/

function getUrlParam(name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}
let id = getUrlParam('id');


window.addEventListener('load', function() {


    const article = new Article();
    const articleRequest = article.getArticle();

    (function articleFunction() {
        articleRequest.then(() => {
            renderArticle(article);
            commentsFunction();
        });
    })();


    function renderArticle(id) {
        const container = document.getElementsByTagName('body')[0];

        // create article container
        const articleElem = document.createElement('article');
        articleElem.setAttribute('class', 'article');
        articleElem.setAttribute('id', article.id);
        // create article title element
        const articleTitleElem = document.createElement('h1');
        articleTitleElem.innerHTML = article.id + ' - ' + article.title;
        // create article body element
        const articleBodyElem = document.createElement('p');
        articleBodyElem.setAttribute('class', 'articleParagraph');
        articleBodyElem.innerHTML = article.body;
        // create article image element
        const articleImage = document.createElement('img');
        articleImage.setAttribute('class', 'articleImage');
        articleImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwgY8L5L0dfMuEjOcASgA6V2Btt-WQ_0ylG9lnCcC6cdjvW3ZtA');
        
        articleElem.appendChild(articleTitleElem);
        articleElem.appendChild(articleBodyElem);
        articleElem.appendChild(articleImage);

        container.appendChild(articleElem);
    }


    //////// mainButton
    const mainButton = document.getElementById('mainButton');
    mainButton.addEventListener("click", mainButtonClicked);

    function mainButtonClicked() {
        window.location.href = "https://preview.c9users.io/horoiu/homework1/Homework's/07-OOP/pages/articles.html";
    }


    //////// prevButton
    const prevButton = document.getElementById('prevButton');
    prevButton.addEventListener("click", prevButtonClicked);

    function prevButtonClicked() {
        //id = getUrlParam('id');
        if (id == 1) {
            alert('Sorry, but this is the first available article.');
            return;
        }
        else {
            id = parseInt(id) - 1;
            document.location.replace("https://preview.c9users.io/horoiu/homework1/Homework's/07-OOP/pages/article.html?id="+id);
        }
    }


    //////// nextButton
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener("click", nextButtonClicked);

    function nextButtonClicked() {
        //id = getUrlParam('id');
        if (id == 100) {
            alert('Sorry, but this is the last available article.');
            return;
        }
        else {
            id = parseInt(id) + 1;
            document.location.replace("https://preview.c9users.io/horoiu/homework1/Homework's/07-OOP/pages/article.html?id="+id);
        }
    }


}); // end of window.addEventListener
