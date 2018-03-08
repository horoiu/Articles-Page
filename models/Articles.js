/*global fetch*/

let articlesArr = [];


function Articles(data) {
    data = data || {};

    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
}


Articles.prototype.getArticles = function(id) {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    return fetch(url, {method: 'GET'})
    .then(handleErrors)
    .then((response) => {
        response.forEach((article) => {
            articlesArr.push(article);
        });
    })
    .catch(function(error) {
        console.log('Articles CATCH error: ', error);
    });
};  // end of getArticles function


let handleErrors = (response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Articles handleErrors ERROR: '+response.status);
};