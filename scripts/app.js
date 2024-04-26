const references = [
    {
        name: "Natalia Silva",
        ocupation: "Ing de petroleos",
        phone: "316 867 9648",
        email: "natalia.silva-14@hotmail.com"
    },
    {
        name: "Santiago Ortegate",
        ocupation: "Diseñador industrial",
        phone: "304 553 9082",
        email: "santiago.ortegate@gmail.com"
    },
    {
        name: "Jacob Cheyne",
        ocupation: "Director comercial",
        phone: "312 566 2148",
        email: "jake.cheyne@hotmail.com"
    }
]

const experience = [
    {
        languageName: "Html",
        percentprogress: 25,
        image: "assets/images/HTML5.jpg"
    },
    {
        languageName: "Css",
        percentprogress: 20,
        image: "assets/images/Css.jpg"
    },    
    {
        languageName: "JavaScript",
        percentprogress: 10,
        image: "assets/images/JavaScript.jpg"
    }
]


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event){
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});




