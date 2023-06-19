let txt = document.getElementById("text")
console.log(txt.innerText)

let main = document.getElementsByTagName('h1')
console.log(main);

let q3 = document.getElementsByClassName('box')
console.log(q3)

let mm = document.querySelector('h3');

addEventListener('click', () => {
    mm.innerText = ' → Hello World'
})

let hh = document.getElementsByClassName('Replace')

function callme() {
    console.log(hh[0])
    hh[0].innerText = " → Welcome To Elevation Academy";
}

let header = document.querySelector('#heading')

header.addEventListener('click', () => {
    heading.setAttribute('style', 'color : red')
})


let parent = document.querySelector('.parent')
let head1 = document.querySelector('#h1')
let count = 0;
head1.addEventListener('click', () => {
    if (count % 2 === 0) {
        parent.setAttribute('style', 'flex-direction:column')
        count++;
        console.log(count)
    } else {
        parent.setAttribute('style', 'flex-direction:row')
        count++;
        console.log(count)

    }


})

let c1 = document.getElementsByClassName("h3")
let AM = document.getElementsByClassName("am")

function callme() {
    let time = new Date()
    let hours = time.getHours()
    let mins = time.getMinutes()
    let sec = time.getSeconds()

    if (hours > 12) {
        hours = hours - 12
        AM[0].innerText = 'pm'
    } else {
        AM[0].innerText = 'am'
    }


    let timezone = `${hours} hours`
    let timezone1 = `${mins} mins`
    let timezone2 = `${sec} sec`
        // console.log("hours,mins,sec")

    c1[0].innerText = timezone
    c1[1].innerText = timezone1
    c1[2].innerText = timezone2
}
setInterval(() => {
    callme()
}, 1000);

let clock = document.querySelector('.Time')
let h2 = document.querySelectorAll('h2')

function time() {
    let time = new Date;
    let hours = time.getHours()
    let min = time.getMinutes()
    let secs = time.getSeconds()

    let timezone = `Hours ${hours} : Minutes ${min} : Seconds ${secs}`
    console.log(hours, min, secs)
    h3[0].innerText = timezone
}

setInterval(() => {
    time()
}, 1000)