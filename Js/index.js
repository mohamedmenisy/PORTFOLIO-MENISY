

// -------------------typed.js
var typed = new Typed('.typedEll', {
    strings: ['Mohamed Menisy.', 'a Front-End Developer.', "a Back-End Developer." , "a Fullstack .NET developer."],
    typeSpeed:100,
    backSpeed:100,
    fadeOut: true,
    loop:true,
    loopCount: Infinity,
  });

//   -----------------aos-animation
  AOS.init();


// ------------------change navbar-background-color
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navbar_a = document.querySelector('.navbar a');
    if (window.scrollY >= 100) {
        navbar.style.backgroundColor = 'black';

    }
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = 'transparent';

    }
});



// -------------------change bg-video
let backgrounds = [
    {
        name:"waves",
        src:"https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video3.mp4"
    },
    {
        name:"balle",
        src:"https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video2.mp4"
    }
    ]
let loading = document.querySelector(".loading");
let cbx = document.querySelector("#cbx-51");
cbx.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })

    loading.style.display="flex";
    let videoelement= document.querySelector("video")
    let videoid =videoelement.id;

    if (videoid == "waves") {
        videoelement.src=backgrounds[1].src;
        videoelement.id =backgrounds[1].name
    }else{
        videoelement.src=backgrounds[0].src;
        videoelement.id =backgrounds[0].name
    }
    setTimeout(() => {
        loading.style.display="none";
    }, 3000);

});
let videoelement= document.querySelector("video")
videoelement.play();


// ---------------------------------------------projects

let projects = [];
let JS =  [
    {
        name:"Age-Calculator",
        img:"Images/Projects/age.png",
        repoLink:"https://github.com/mohamedmenisy/Age-Calculator",
        DemoLink:"https://mohamedmenisy.github.io/Age-Calculator/"
    },
    {
        name:"Slider",
        img:"Images/Projects/slider.png",
        repoLink:"https://github.com/mohamedmenisy/slider",
        DemoLink:"https://mohamedmenisy.github.io/slider/"
    },
    {
        name:"To-Do-List",
        img:"Images/Projects/todolist.png",
        repoLink:"https://github.com/mohamedmenisy/To-Do-List",
        DemoLink:"https://mohamedmenisy.github.io/To-Do-List/"
    },
    {
        name:"Angora",
        img:"Images/Projects/Angora.png",
        repoLink:"https://github.com/mohamedmenisy/Angora",
        DemoLink:"https://mohamedmenisy.github.io/Angora/"
    },
    {
        name:"Calculator",
        img:"Images/Projects/Calculator.png",
        repoLink:"https://github.com/mohamedmenisy/Calculator",
        DemoLink:"https://mohamedmenisy.github.io/Calculator/"
    },
    {
        name:"Glass",
        img:"Images/Projects/Glass.png",
        repoLink:"https://github.com/mohamedmenisy/Glass",
        DemoLink:"https://mohamedmenisy.github.io/Glass/"
    },
    {
        name:"Joma",
        img:"Images/Projects/Joma.png",
        repoLink:"https://github.com/mohamedmenisy/Joma",
        DemoLink:"https://mohamedmenisy.github.io/Joma/"
    },
    {
        name:"Simone",
        img:"Images/Projects/Simone.png",
        repoLink:"https://github.com/mohamedmenisy/Simone",
        DemoLink:"https://mohamedmenisy.github.io/Simone/"
    },
    {
        name:"Crud",
        img:"Images/Projects/CRUD.png",
        repoLink:"https://github.com/mohamedmenisy/Crud",
        DemoLink:"https://mohamedmenisy.github.io/Crud/"
    },
    {
        name:"Crud",
        img:"Images/Projects/lamp.png",
        repoLink:"https://github.com/mohamedmenisy/lamp",
        DemoLink:"https://mohamedmenisy.github.io/lamp/"
    },
    {
        name:"Crud",
        img:"Images/Projects/wrish.png",
        repoLink:"https://github.com/mohamedmenisy/wrish",
        DemoLink:"https://mohamedmenisy.github.io/wrish/"
    },
];
let ANGULAR =[
    {
        name:"SiaStore",
        img:"Images/Projects/siastore.png",
        repoLink:"https://github.com/mohamedmenisy/siastore",
        DemoLink:"https://mohamedmenisy.github.io/siastore/"
    },
    {
        name:"RestaurantsOrder",
        img:"Images/Projects/RestaurantsOrder.png",
        repoLink:"https://github.com/mohamedmenisy/RestaurantsOrder",
        DemoLink:"https://mohamedmenisy.github.io/RestaurantsOrder/"
    },
    {
        name:"Noxe",
        img:"Images/Projects/noxe.png",
        repoLink:"https://github.com/mohamedmenisy/noxe",
        DemoLink:"https://mohamedmenisy.github.io/noxe/home"
    },
] ;
let REACTJS = [

    {
        name:"CimaMovie",
        img:"Images/Projects/cinma.png",
        repoLink:"https://github.com/mohamedmenisy/CimaMovie",
        DemoLink:"https://mohamedmenisy.github.io/CimaMovie/"
    },
];
let BackEnd =[
    {
        name:"Siastore-Backend",
        img:"Images/Projects/backend.png",
        repoLink:"https://github.com/mohamedmenisy/siastore-backend",
        DemoLink:"https://github.com/mohamedmenisy/siastore-backend"
    },
    {
        name:"OrderFoodOnline-Backend",
        img:"Images/Projects/backend.png",
        repoLink:"https://github.com/mohamedmenisy/OrderFoodOnline",
        DemoLink:"https://github.com/mohamedmenisy/OrderFoodOnline"
    },
    {
        name:"StellaITI",
        img:"Images/Projects/backend.png",
        repoLink:"https://github.com/mohamedmenisy/StellaITI",
        DemoLink:"https://github.com/mohamedmenisy/StellaITI"
    },
]
let li = document.querySelectorAll(".ProjectTypes ul li")
li[0].style.borderBottom="2px solid white";

li.forEach(element => {
    element.addEventListener('click',()=>{
        if (element.innerHTML == "HTML / CSS / JS") {
            projects=JS;


        }
        if (element.innerHTML == "REACTJS") {
            projects=REACTJS;


        }
        if (element.innerHTML == "ANGULAR") {
            projects=ANGULAR;

        }
        if(element.innerHTML == "BACKEND"){
            projects=BackEnd;
        }
        li.forEach(el2 => {
            el2.style.borderBottom="none";

        });
        element.style.borderBottom="2px solid white";
        displayProjects(projects);


    })

});
function displayProjects(projectsArr){
    let project = "";
    for (let i = 0; i < projectsArr.length; i++) {
       project+=`

    <div class="col-md-6" >
        <div class="projectItem"  data-aos="fade-up" data-aos-easing="linear"
  data-aos-duration="1000"  >
        <div class="projectimg" style="background-image: url(${projectsArr[i].img})">
            <div class="imglayer">
                <p>${projectsArr[i].name}</p>
                <div>
                <a href="${projectsArr[i].repoLink}" target="_blank">
                <i class="fa-brands fa-github"></i>
                </a>
                <a href="${projectsArr[i].DemoLink}" target="_blank">
                <i class="fa-solid fa-eye"></i>
                </a>
                </div>
            </div>
        </div>

        </div>


    </div>

       `

    }
    document.querySelector(".allprojects").innerHTML=project
};
displayProjects(JS);


// ----------------------------------------end projects




// ----------------------------------start contact


let nameinput ,emailinput , messagetext,subjectinput;
let form= document.querySelector('form');
nameinput = document.getElementById("name");
emailinput = document.getElementById("email");
messagetext = document.getElementById("message");
subjectinput = document.getElementById("subject");

const serverID= "service_haxlj8m"
const  tempaletID= "template_m5d4rhn"
const  PublicKey= "W8td0W-EKTivcS3tE"


// send message
emailjs.init(PublicKey);
form.addEventListener('submit',(e)=>{
e.preventDefault();
const inputData={
    user_subject:subjectinput.value,
    from_name:nameinput.value,
    user_email:emailinput.value,
    user_message:messagetext.value
};
emailjs.send(serverID,tempaletID,inputData).then(
    ()=>{
        subjectinput.value=""
        nameinput.value=""
        emailinput.value=""
        messagetext.value=""
        console.log("success");

    },(error)=>{
        console.log(error);

    }
);
})