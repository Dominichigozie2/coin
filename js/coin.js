
let five = document.querySelector("#scope");
let four = document.querySelector("#search");

five.onclick = () => {
    four.classList.toggle("show");
}



let icon = document.querySelector("#bars");
let side = document.querySelector("#top");

icon.onclick = () => {
    icon.classList.toggle("fa-times");
    side.classList.toggle("active");
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


//for the package page
const tags = document.querySelectorAll('[data-tab-target]')
const tabCont = document.querySelectorAll('[data-tab-cont]')

tags.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabCont.forEach(tabCont => {
            tabCont.classList.remove('tactive')
        });
        tags.forEach(tab => {
            tab.classList.remove('tactive')
        });
        tab.classList.add('tactive')
        target.classList.add('tactive')
    });
});

// for the calculator
let a;
let b;
let c;

document.getElementById("calBtn").onclick = function () {
    a = document.getElementById("calText").value;
    a = Number(a);
    
    b = 14000000;

    c = a * b;
    document.getElementById("calResult").innerHTML = c;
 }



 /**
  * for the login and inputs 
  * 
  */
let d = document.getElementById("sign");
let e = document.getElementById("signin");
let f;
d.onclick = function () {
    e.classList.toggle("display")
}

document.getElementById("time").onclick = function () {
    e.classList.remove("display")
};

document.getElementById("signBtn").onclick = function () {
    e.classList.remove("display");
    f=window.prompt("THANKS FOR VISITING OUR SITE AGAIN")
}



let userTexts = document.getElementsByClassName("user-test");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text")
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic")
    userTexts[i].classList.add("active-text")
}





const tages = document.querySelectorAll('[data-tab-get]')
const tabCant = document.querySelectorAll('[data-tab-cant]')

tages.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabGet)
        tabCant.forEach(tabCant => {
            tabCant.classList.remove('tactive')
        });
        tages.forEach(tab => {
            tab.classList.remove('tactive')
        });
        tab.classList.add('tactive')
        target.classList.add('tactive')
    });
});






