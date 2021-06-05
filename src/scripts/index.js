import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './app';
import data from '../DATA.json';

const datas = data.restaurants;
let dataList = '';

datas.forEach((data) => {
    dataList += `
    <div class="product-item">
        <div class="shadow-gradient">
            <img class="product-thumbnail" src="${data.pictureId}" title="${data.name}" alt="${data.name}">
        </div>
        <div class="product-title"><h1>${data.name}</h1></div>
        <div class="product-rating"></div>
        <div class="content-list">
            <div class="title-item">
                <h3 class="content-title">${data.city}</h3>
                <h3>${data.rating} / 5</h3>
            </div>
            <p>${data.description.slice(0, 100)}...</p>
        </div>
    </div>
    `;
});
document.querySelector('#product-list').innerHTML = dataList;


new App({
    button: document.querySelector('.menu-toggle'),
    drawer: document.getElementById('navbar'),
    content: document.querySelector('#content')
});
