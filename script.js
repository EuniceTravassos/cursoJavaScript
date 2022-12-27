function initialTab (){

    const tabMenu = document.querySelectorAll('.js-tab-menu li');
    const tabContent = document.querySelectorAll('.js-tab-content section');
   
    if(tabContent.length && tabContent.length){

        function activeTab (index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });  
    }
}

initialTab();

function initialFaq (){

    const questionsList = document.querySelectorAll('.js-questions dt');

    if(questionsList.length) {
        questionsList[0].classList.add('active');
        questionsList[0].nextElementSibling.classList.add('active');
    
        function activeQuestions(event){
            this.classList.add('active');
            this.nextElementSibling.classList.toggle('active');
        }
    
        questionsList.forEach((item) => {
            item.addEventListener('click', activeQuestions);
        });
    };

}

initialFaq();

function initialScroll (){
    
    const internalLinks = document.querySelectorAll('js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventdefault();
        
        const href = event.currentTarget.getAtttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    internalLinks.forEach((link) => {
        link.addEventLitener('click', scrollToSection)
    });

}

initialScroll();


function initialScrollSoft (){
 
const sections = document.querySelectorAll('.js-scroll');
const windowHeight = window.innerHeight * 0.6;

function animaScroll() {
    
    section.forEach((section) => {

        const sectionTop = section.getBoundingClientReact().top;
        const isSectonVisible = (sectionTop - windowHeight < 0);

        if(isSectonVisible ){
            section.classList.add('active');
        } else
            section.classList.remove('active');
    })
}

}

window.addEventListener('scroll', initialScrollSoft);

//Torna as imagens e textos dinamicos:
//Adicionar o evento
//Fazer o loop para os li, passar os argumentos 
//Adicionar os eventos, executar elas, passar o argumento
//modificar o CSS (nao esquecer)

//Tornar o FAQ dinamico:
// mesmos passos

//Melhorar o scroll da pagina