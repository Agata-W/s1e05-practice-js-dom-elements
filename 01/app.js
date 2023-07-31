console.log('DOM');

const element = document.querySelector('.comments__item.comments__item--newest')
console.log(element)
if (element) {
    const elementWithAttribute = element.querySelectorAll('[data-info]')
    console.log(elementWithAttribute.length)
}