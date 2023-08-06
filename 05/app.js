console.log('DOM');

const curr = document.querySelector('.js-curr');

//1
const newButton = document.createElement('button')
newButton.innerText = 'usuń z koszyka'
curr.parentElement.appendChild(newButton)


//2
const children = Array.from(curr.parentElement.children)
console.log(children)

children.forEach(function (item) {
    if (item !== curr) {
        item.classList.add('siblings')
    }
});

//3
const siblingElement = curr.parentElement.nextElementSibling
console.log(siblingElement)
siblingElement.setAttribute('title', 'nextElementSibling')

//4
const lastArticle = curr.parentElement.parentElement.lastElementChild
console.log(lastArticle)
const newParagraph = document.createElement('p')
const button = lastArticle.children[lastArticle.children.length - 1]

lastArticle.insertBefore(newParagraph, button)

//5
const articleParent = curr.parentElement.parentElement
const firstArticle = curr.parentElement
const newArticle = firstArticle.cloneNode(true)
articleParent.insertBefore(newArticle, firstArticle)
