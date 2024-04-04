
let timeline = gsap.timeline();

//From start to contact
function contactUpAni() {
    gsap.to(".main-text", {y: -200, opacity: 0});
    console.log("YEAS")
}
function contactCenterAni() {
    gsap.fromTo('.contact-me', {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 0.75, delay: 0.5});
}

//From Contatct to start
function contactDownAni() {
    gsap.to('.contact-me', {y: 200, opacity: 0});
}
function centerStartAni() {
    gsap.fromTo('.main-text', {y: -200, opacity: 0}, {y: 0, opacity: 1, duration: 0.7, delay: 0.5});
}


//Gellery functions
function blobUpAni() {
    timeline.to('.blob', {y: -100, opacity: 0, duration: 0.75});
    const mainTextElement = document.querySelector('.main-text');
    const contactMeElement = document.querySelector('.contact-me');
    const foot = document.querySelector('.footer');

    if (mainTextElement) 
        timeline.to(mainTextElement, {y: -100, opacity: 0, duration: 0.75}, ">60%");
    if (contactMeElement) 
        timeline.to(contactMeElement, {y: -100, opacity: 0, duration: 0.75}, ">60%");

    timeline.to(foot, {y: 100, opacity: 0, duration: 0.75}, "<20%");
}

function rowChangeAni() {
    timeline.fromTo(document.querySelector('.row'), {y: 200, opacity: 0},{y: 0, opacity: 1, duration: 1.75}, "<20%");

}
function resizeHeightAni() {
    timeline.to('.container-main', {duration: 2, height: 'calc(100% - 40px)'});

}
//Back from gellery
function getBlobAni() {
    const blob = document.querySelector('.blob');
    gsap.to(blob, {y: 0, opacity: 1, duration: 0.75}, "<2%");
    const foot = document.querySelector('.footer');
    gsap.to(foot, {y: 0, opacity: 1, duration: 0.75});
}

function resizeBackHeightAni() {
    gsap.to('.container-main', {duration: 2, height: 'auto'});

}


