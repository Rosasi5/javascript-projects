const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    id = e.target.dataset.id;
    if(id){
        //remove active buttons from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active'); //remove the active class from among the buttons
            e.target.classList.add('active');// add the active class on the current button that has triggered the click event.
        });
        //hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})