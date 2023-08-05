console.log('DOM');

// const navElement = document.querySelector('nav')
// const ulElement = document.createElement('ul')
// const liElement = document.createElement('li')
// const aElement = document.createElement('a')

// navElement.appendChild(ulElement)
// ulElement.appendChild(liElement)
// liElement.appendChild(aElement)

// aElement.innerText = 'home'
// aElement.setAttribute('href', '/')

// const liElement2 = liElement.cloneNode(true)
// ulElement.appendChild(liElement2)
// const aElement2 = liElement2.querySelector('a')
// aElement2.innerText = 'galeria'
// aElement2.href = '/gallery'


// const liElement3 = liElement.cloneNode(true)
// ulElement.appendChild(liElement3)
// const aElement3 = liElement3.querySelector('a')
// aElement3.innerText = 'contact'
// aElement3.href = '/contact'


// struktura do wykorzystania w pętli
const menuItems = [
    { text: 'start', url: '/' },
    { text: 'galeria', url: '/gallery' },
    { text: 'kontakt', url: '/contact' },
];

const navElement = document.querySelector('nav')
const ulElement = document.createElement('ul')
navElement.appendChild(ulElement)

menuItems.forEach(function (item) {
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')
    ulElement.appendChild(liElement)
    liElement.appendChild(aElement)

    aElement.innerText = item.text
    aElement.href = item.url
})



