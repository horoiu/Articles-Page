/*global Comments*/
/*global commentsArr*/


    let comments = new Comments();
    let commentsRequest = comments.getCommentsForArticle();

    function commentsFunction() {
        commentsRequest.then(() => {
            renderCommentsContainer();
            commentsArr.forEach((c) => {
               renderComments(c);
           });
        });
    }


    function renderCommentsContainer() {
        // select article container
        let container = document.getElementsByTagName('article')[0];
        // create comments Section container
        let sectionElem = document.createElement('section');
        sectionElem.setAttribute('class', 'comments');

        container.appendChild(sectionElem);
    }


    function renderComments(c) {

        // create comment Div element
        let commentDivElem = document.createElement('div');
        commentDivElem.setAttribute('class', 'comment');
        commentDivElem.setAttribute('id', c.id);
        // create comment Ul element
        let commentUlElem = document.createElement('ul');
        // create comment P elements
        let commentIdParagraphElem = document.createElement('p');
        commentIdParagraphElem.innerHTML = 'Comment.id: ' + c.id;
        let commentNameParagraphElem = document.createElement('p');
        commentNameParagraphElem.innerHTML = 'User Name: '+ c.name;
        let commentMailParagraphElem = document.createElement('p');
        commentMailParagraphElem.innerHTML = 'e-mail: ' + c.email;
        let commentBodyParagraphElem = document.createElement('p');
        commentBodyParagraphElem.innerHTML = c.body;

        commentUlElem.appendChild(commentBodyParagraphElem);
        commentUlElem.appendChild(commentNameParagraphElem);
        commentUlElem.appendChild(commentMailParagraphElem);
        commentUlElem.appendChild(commentIdParagraphElem);

        commentDivElem.appendChild(commentUlElem);

        let sectionElem = document.getElementsByTagName('section')[0];
        sectionElem.appendChild(commentDivElem);
    }
