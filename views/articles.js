/*global Articles*/
/*global articlesArr*/

window.addEventListener('load', function() {


    const articles = new Articles();
    let articlesRequest = articles.getArticles();


    articlesRequest.then(() => {
        renderArticleContainer();
        articlesArr.forEach((a) => {
            renderArticles(a);
        });
        
    });

    function renderArticleContainer() {
        // create section container for articles
        let container = document.getElementsByTagName('body')[0];
        const sectionElem = document.createElement('section');
        
        container.appendChild(sectionElem);
    }


    function renderArticles(a) {
        const sectionContainer = document.getElementsByTagName('section')[0];

        // create article container
        const articlesElem = document.createElement('article');
        // add an id to the article
        articlesElem.setAttribute('id', a.id);
        // add an class to the article
        articlesElem.setAttribute('class', 'articles');
        // create article image element
        const articlesImageElem = document.createElement('img');
        articlesImageElem.setAttribute('class', 'image');
        articlesImageElem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwgY8L5L0dfMuEjOcASgA6V2Btt-WQ_0ylG9lnCcC6cdjvW3ZtA');
        // create article title element
        const articlesTitleElem = document.createElement('h1');
        articlesTitleElem.innerHTML = a.id + ' - ' + a.title;
        // create article body element
        const articlesBodyElem = document.createElement('p');
        articlesBodyElem.setAttribute('class', 'verticalAlign');
        articlesBodyElem.innerHTML = a.body;
        // add aventListener to Article
        articlesElem.addEventListener("click", viewArticle);

        articlesElem.appendChild(articlesImageElem);
        articlesElem.appendChild(articlesTitleElem);
        articlesElem.appendChild(articlesBodyElem);

        sectionContainer.appendChild(articlesElem);
        
    } // end of renderArticles function


    let viewArticle = (click) => {
        let id = click.path[0].id || click.path[1].id;
        window.location.href = "https://preview.c9users.io/horoiu/homework1/Homework's/07-OOP/pages/article.html?id="+id;
        };


});  // end of window.addEventListener




