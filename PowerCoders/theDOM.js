// const para = document.querySelector('p');
// console.log(para);

// const para = document.querySelector('.error');
// console.log(para);

// const para = document.querySelector('div.error');
// console.log(para);

// const para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p')
// console.log(paras)

// paras.forEach(para => {
//     console.log(para);
// });

// const paras = document.querySelectorAll('p')
// console.log(paras[0])

// const title = document.getElementById('page-title')
// console.log(title)

// const errors = document.getElementsByClassName('error')
// console.log(errors)
// console.log(errors[0])

// const paras = document.getElementsByTagName('p')
// console.log(paras)
// console.log(paras[0])

// const para = document.querySelector('p')
// console.log(para.innerText)
//  para.innerText = 'we are awesome!'
//  para.innerText += 'we are awesome!'
// const paras = document.querySelectorAll('p')
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text'
// });

// const content = document.querySelector('.content')

// console.log(content.innerHTML);
// content.innerHTML += '<h2>this is a new h2</h2>'


// const people = ['asem', 'hani', 'nawaf'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.hoogle.com')
// link.innerText = 'blah blah link' 

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success'); 

// mssg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;')
// console.log(title.style)
// console.log(title.style.color)
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '80px;';
// title.style.margin = '';
// const content = document.querySelector('p')
// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

const paras = document.querySelectorAll('p')
paras.forEach(para => {
    if (para.textContent.includes('error')) {
       para.classList.add('errer'); 
    }
    if (para.innerText.includes('success')) {
       para.classList.add('success')
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test')
title.classList.toggle('test')
