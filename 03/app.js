console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const parentElement = document.querySelector('.parent-for-button')
if (parentElement) {
    const buttonElement = document.createElement('button')

    // buttonElement.classList.add(buttonSettings.attr.className)
    // buttonElement.title = buttonSettings.attr.title

    // buttonElement.style.border = buttonSettings.css.border
    // buttonElement.style.padding = buttonSettings.css.padding
    // buttonElement.style.color = buttonSettings.css.color


    for (const key in buttonSettings.attr) {
        const value1 = buttonSettings.attr[key]
        buttonElement[key] = value1
    }
    for (const key in buttonSettings.css) {
        const value2 = buttonSettings.css[key]
        buttonElement.style[key] = value2
    }

    buttonElement.innerText = buttonSettings.text



    parentElement.appendChild(buttonElement)
}


