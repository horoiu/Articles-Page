/*global fetch*/
/*global id*/

function Article(defaultData) {
    defaultData = defaultData || {};

    this.userId = defaultData.userId;
    this.id = defaultData.id;
    this.title = defaultData.title;
    this.body = defaultData.body;
}


Article.prototype.getArticle = function() {
    let url = 'https://jsonplaceholder.typicode.com/posts/'+id;

    return fetch(url,  {method: 'GET'})
    .then(handleErrors)
    .then((response) => {
        this.userId = response.userId;
        this.id = response.id;
        this.title = response.title;
        this.body = response.body;
    })
    .catch(function(error) {
        console.log('Article CATCH error: ', error);
    });
};  // end of getArticle function


let handleErrors = (response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('handleErrors Article ERROR: '+response.status);
};

