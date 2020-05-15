import { response } from "express";

console.log('Hello World')

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/woof';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    const woof = {
        name, content
    };

    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(woof),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(createdWoof => {
            console.log(createdWoof);
            form.reset();
            form.style.display = 'none';
            loadingElement.style.display = 'none';
        })
});