 'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

  function titleClickHandler(event){ 
    event.preventDefault();
    const clickedElement = this;    //  oznacza element któremu jest nadany listener
    console.log('Link was clicked!');
    console.log(event);
    
/* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
/* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);    
    clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('Href:', articleSelector); 
    
/* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);

/* [DONE] add class 'active' to the correct article */
    console.log('targetArticle:', targetArticle);    
    targetArticle.classList.add('active');
    }

/*const links = document.querySelectorAll('.titles a');  //przeniesiona (zadanie ze znalezieniem buga)
console.log(links);
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}*/


    const optArticleSelector ='.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',
        optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

/* [DONE] remove contents of titleList - Usunięcie zawartości listy linków*/
    console.log('optTitleListSelector = ', optTitleListSelector);
    const titleList = document.querySelector(optTitleListSelector);
    console.log('titleList = ', titleList);
    titleList.innerHTML = '';

/* [DONE] for each article - Pętla dla wszystkich artykułów */
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('articles = ', articles);
    for(let article of articles){
        article.querySelector(optArticleSelector);
        console.log('article = ', article);

/* [DONE] get the article id - Odczytanie id artykułu */
    const articleId = article.getAttribute('id');
    console.log('articleId = ', articleId);

/* [DONE] find the title element - Odczytanie tytułu artykułu*/
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('articleTitle = ', articleTitle);


/*  get the title from the title element - Tworzymy kod HTML linka */

/* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId +'"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML = ', linkHTML);

/*  insert link into titleList - Dodanie linka do listy */

    /* titleList.insertAdjacentHTML('afterend', linkHTML);
    console.log('titleList = ', titleList);*/
    html = html + linkHTML;
    console.log('html = ', titleList);
}

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }
};

generateTitleLinks();




     

  
  

  
 
  

  