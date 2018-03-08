/*global fetch*/
/*global Comment*/
/*global handleErrors*/
/*global id*/
   
   
let commentsArr = []; 


function Comments(defaultData) {
    defaultData = defaultData || {};
    this.comentsArr = {};
}


Comments.prototype.getCommentsForArticle = function() {
    let url = 'https://jsonplaceholder.typicode.com/posts/'+id+'/comments';
    
    return fetch(url, {method: 'GET'})
    .then(handleErrors)
    .then((response) => {
        response.forEach((comment) => {
         let c = new Comment(comment);
         commentsArr.push(c);
        });
     })
    .catch(function(error) {
        console.log('Comments CATCH error : ', error);
    });
}; // end of getCommentsForArticle method