const reviews = [
    {
        id: 1,
        name: "Rosasi",
        job: "web developer",
        img: "https://us.123rf.com/450wm/cc0collection/cc0collection2205/cc0collection220540385/186116070-dark-room-people-woman-girl-photography-photographer-camera-lens-outdoor-travel.jpg?ver=6",
        text: "I am rosasi from matongo. I am so much  motivated by the way you run things in the company.",
    },
    {
        id: 2,
        name:"Rose Muhando",
        job: "Backend developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiB2E79LWVUoq4bDADmjZbQTQrfjuR2OKCsA&s",
        text: "I also sing too mofos. So iF you dont give me the job its not like i will starve."

    },
    {
        id: 3,
        name: "Mr Omondi",
        job: "Crystal Hill Manager",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHrOScrUCr1d7byUa_e0MfS_FNUk32jfdWGVdlE_nZlEfEN2YNL--rdQXyhF_MxTYZys&usqp=CAU",
        text: "Simplicity high thinking."

    },
    {
        id: 4,
        name: "Joseph Parker",
        job: "Boxer",
        img: "https://www.thesun.co.uk/wp-content/uploads/2023/12/GETTY_Day-of-Reckoning-Media-Workout_SPO_GYI1870318776jpg-JS867526553.jpg",
        text: "Come get some whooping to get ya life straight muthafuckerz."
    },
    {
        id: 5,
        name: "Buakaw",
        job: "Kick Boxer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjD_FASgQ7CGf2fLOcdoMWo5o3rzqX6IlFA&s",
        text: "Come get me when you are ready to die modafucker!!!"
    },
    {
        id: 6,
        name: "Tripple GGG - Genady Golovkin",
        job: "Professional Boxer",
        img: "https://ca-times.brightspotcdn.com/dims4/default/6845d0a/2147483647/strip/true/crop/1200x700+0+0/resize/1200x700!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F25%2Fe0%2F7d2912ce69777444204656327145%2Fla-sp-boxing-golovkin-20150516-001",
        text: "I will stand by you toe to toe until you fall. I got heavy hands and a gas tank that never runs out."
    }
];
//select items
const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const info= document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() { //the function is executed when the page loads.
    showPerson();
});

//show person based on item
function showPerson(currentItem) {
    const item = reviews[currentItem]; //get the current user stored in the currentItem variable.
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show next person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem); 
});