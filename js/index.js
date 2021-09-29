const heading = document.querySelector('.navbar .heading');
const writing = document.querySelectorAll('.content-right .text');
const item = document.querySelectorAll('.navbar .item');
const image = document.querySelectorAll('.content-right .image');
const head = document.querySelectorAll('.content-right h1');
const ul = document.querySelectorAll('.navbar');
const topics = document.querySelectorAll('.main .heading');
const t1 = new TimelineMax()
t1 .fromTo(
        ul,
        0.5,
        {y:-100},
        {y:0}
    )
    .fromTo(
        heading,
        0.5,
        {opacity: '0', x: -100},
        {opacity: '1', x: 0, ease: Power2.easeInOut}   
    )
    .fromTo(
        item,
        0.5,
        {opacity: '0', x: 100},
        {opacity: '1', x: 0, ease: Power2.easeInOut}
    )
    .fromTo(
        topics,
        0.5,
        {opacity: '0', x: -1000},
        {opacity: '1', x: 0, ease: Power2.easeInOut} 
    )
    .fromTo(
        head,
        0.5,
        {opacity: '0', y: -1000},
        {opacity: '1', y: 0, ease: Power2.easeInOut} 
    )
    .fromTo(
        writing,
        0.7,
        {opacity: '0', x: -1000},
        {opacity: '1', x: 0, ease: Power2.easeInOut}    
    )
    .fromTo(
        image,
        0.7,
        {opacity: '0', x: 1000},
        {opacity: '1', x: 0, ease: Power2.easeInOut} ,
        '=-0.7'
    )
