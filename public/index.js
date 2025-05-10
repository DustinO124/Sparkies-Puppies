const burger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navbar = document.querySelector('header');
const logo = document.querySelector('#logo');
const mobileTitle = document.querySelector('#mobile-title');
const offsetHeight = document.querySelector('header').offsetHeight;




window.addEventListener('scroll', function() {

    if (window.scrollY > offsetHeight) {
        logo.classList.remove('hidden');
        logo.classList.add('inline-block');
        navbar.classList.add('bg-white','transition','duration-700');
        navbar.classList.remove('text-primary-white');
        navbar.classList.add('text-primary-black');
        navbar.classList.add('bg-white');
        navbar.classList.remove('transition', 'delay-800');
        mobileTitle.classList.remove('hidden');

    } 
    else{
         if(menu.classList.contains('max-h-0')) {
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            logo.classList.remove('inline-block');
            logo.classList.add('hidden');
            mobileTitle.classList.add('hidden');
            
         }
    }
    
});
// absolute top-full w-full overflow-hidden max-h-0


burger.addEventListener('click', () => {

    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0','md:h-auto');
        menu.classList.add('max-h-96');
        navbar.classList.add('bg-white'); 
        navbar.classList.add('text-primary-black');
        navbar.classList.remove('text-primary-white');
        navbar.classList.remove('transition', 'delay-800','duration-700');
        
        logo.classList.remove('hidden');
        logo.classList.add('inline-block');
        mobileTitle.classList.remove('hidden');
        
        
    } else {
        menu.classList.remove('max-h-96');
        menu.classList.add('max-h-0','md:h-auto');
        navbar.classList.add('transition', 'delay-800','duration-700');
        
        
        if (window.scrollY <= offsetHeight) { // Add this condition
            
            navbar.classList.remove('bg-white');
            navbar.classList.remove('text-primary-black');
            navbar.classList.add('text-primary-white');
            // 
            logo.classList.add('hidden');
            logo.classList.remove('inline-block');
            mobileTitle.classList.add('hidden');

        }
        
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const scrollToPosition = window.scrollY + target.getBoundingClientRect().top - offsetHeight;
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
        
        menu.classList.remove('max-h-96');
        menu.classList.add('max-h-0','md:h-auto');
        navbar.classList.add('transition', 'delay-800','duration-700');
    });
});

showClock();
setInterval("showClock()",1000);

function showClock() {
  let thisDay = new Date(); // returns current date   
  let septDate = nextSept13(thisDay);
  septDate.setHours(21);
  
  // Convert to Pacific Time
  let pacificTimeOffset = 420; // Pacific Time is UTC-7
  let localOffset = thisDay.getTimezoneOffset();
  let offset = pacificTimeOffset - localOffset;
  let pacificDate = new Date(thisDay.getTime() + offset * 60 * 1000);
  
  var countDown = septDate - pacificDate;
  
  let dayCountDown = Math.floor(countDown / (1000 * 60 * 60 * 24)); 
  let hourCountDown = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minCountDown = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let secCountDown = Math.floor((countDown % (1000 * 60)) / 1000);
   
  document.getElementById("daysLeft").textContent = dayCountDown ;
  document.getElementById("hoursLeft").textContent = hourCountDown + 3;
  document.getElementById("minLeft").textContent = minCountDown;
  document.getElementById("secLeft").textContent = secCountDown;
}


function nextSept13(currentDate) {
   var cYear = currentDate.getFullYear();
   var sDate = new Date("September 13, 2023");
   sDate.setFullYear(cYear);
   if ((sDate - currentDate) < 0) sDate.setFullYear(cYear + 1);
   return sDate;
}


const formContainer = document.getElementById('form-container');
const form = document.getElementById('reminderForm');
const thankYouMessage = document.getElementById('thankYouMessage');

document.getElementById('showFormBtn').addEventListener('click', function() {
    form.classList.remove('hidden');
    form.classList.add('flex','justify-center','items-center');
});
  
document.getElementById('closeFormBtn').addEventListener('click', function() {
    form.classList.add('hidden');
    
});
  
document.getElementById('closeFormBtn2').addEventListener('click', function() {
    form.classList.add('hidden');
    thankYouMessage.classList.add('hidden');
    formContainer.classList.remove('hidden');

    formContainer.classList.add('flex');
    
    
});

const statContainer = document.getElementById('statsContainer');
const statBtn = document.getElementById('statsButton');


statBtn.addEventListener('click', () => {
statContainer.classList.remove('hidden');
});

document.getElementById('statCloseBtn').addEventListener('click', function() {
  statContainer.classList.add('hidden');
  
});



  

const switchEl = document.getElementById('switch');
const puppiesEl = document.getElementById('puppies');
const parentsEl = document.getElementById('parents');
const puppiesPage = document.getElementById('puppies-page');
const parentsPages = document.getElementById('parents-page');

let isActive = false;

switchEl.addEventListener('click', () => {
  if (isActive) {
    puppiesEl.classList.add('translate-x-0');
    puppiesEl.classList.remove('translate-x-24');
    puppiesEl.innerText = 'Puppies';
    puppiesPage.classList.remove('hidden');
    puppiesPage.classList.add('md:grid');
    parentsPages.classList.add('hidden');
  } else {
    puppiesEl.classList.add('translate-x-24');
    puppiesEl.classList.remove('translate-x-0');
    puppiesEl.innerText = 'Parents';
    puppiesPage.classList.remove('md:grid');
    puppiesPage.classList.add('hidden');
    parentsPages.classList.remove('hidden');
  }
  isActive = !isActive;
});


var puppyGallerySettings = {
  focus: 'center',
  type: 'loop',
  autoplay: true,
  pauseOnHover: true,
  lazyLoad: 'nearby',
  
};

var mainGallerySettings = {
  focus: 'center',
  type: 'loop',
  autoplay: true,
  height: '40rem',
  autoWidth: true,
  pauseOnHover: true,
  gap: '1rem',
  lazyLoad: 'nearby',
  
  breakpoints: {
    1024:{
      height: '35rem'
    },
    768: {
      height: '30rem',
    },
    640: {
      height: '25rem',
     
    },
    500: {
      height: '15rem',

    }

  }
};





document.addEventListener('DOMContentLoaded', function() {
  new Splide('#mainGallery',mainGallerySettings).mount();
});

//collects all Galleries
const gallery = document.querySelectorAll('.puppyGallery');
const openGalleryBtn = document.querySelectorAll('.openBtn');
const closeGalleryBtn = document.querySelectorAll('.closeBtn');
const galleryContainer = document.querySelectorAll('.galleryContainer');

for ( let i = 0; i < gallery.length; i++ ) {
  new Splide(gallery[i], puppyGallerySettings).mount();
}

openGalleryBtn.forEach(function(btn, index) {
  btn.addEventListener('click', () => {
  galleryContainer[index].classList.remove('hidden');
  })
});

closeGalleryBtn.forEach(function(btn, index) {
  btn.addEventListener('click', () => {
  galleryContainer[index].classList.add('hidden');
  })
});


let imageIndex = 0;
const images = [
  "img/stud6.webp",
  "img/stud7.webp",
  "img/stud1.webp",
  "img/test4.webp",
];
var img1 = new Image();
img1.src = "img/stud1.webp";

var img2 = new Image();
img2.src = "img/test4.webp";

var img3 = new Image();
img3.src = "img/stud6.webp";

var img4 = new Image();
img4.src = "img/mobile_background.webp";

var img5 = new Image();
img5.src = "img/stud7.webp";

var img6 = new Image();
img6.src = "img/background.webp";


function changeBackground() {
    // Get the element
    const studPage = document.getElementById("studPage");
    
    // Update the background image
    studPage.style.backgroundImage = `url("${images[imageIndex]}")`;
    
    // Increment index for next time
    imageIndex = (imageIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
//FAQ tab and Arrows 
const tabs = document.querySelectorAll('.faqTab');

tabs.forEach((tab, index) => {
    const answer = tab.querySelector('.faqAnswer');
    const upArrow = tab.querySelector('.arrow-up');
    const downArrow = tab.querySelector('.arrow-down');

    tab.addEventListener('click', () => {
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            upArrow.classList.remove('hidden');
            downArrow.classList.add('hidden');
        } else {
            answer.classList.add('hidden');
            upArrow.classList.add('hidden');
            downArrow.classList.remove('hidden');
        }
    });
});

//Animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('puppyCardShow');
    }

  })
});

const hiddenPupppyCards = document.querySelectorAll('.puppyCardHide');
hiddenPupppyCards.forEach((el) => observer.observe(el));

const studCardBtn = document.querySelector('#studContactBtn');

studCardBtn.addEventListener('click', () => {
  statContainer.classList.add('hidden');

});

