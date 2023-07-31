console.log('DOM');


const list = document.querySelectorAll('[data-url]');
list.forEach(function (el) {
    const attr = el.getAttribute('data-url');
    el.setAttribute('href', attr)
    // const dataset = el.dataset.url
    // el.setAttribute = ('href', dataset);
})