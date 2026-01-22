const REPO_NAME = "P5JS-exploring";
const BASE_PATH = `${REPO_NAME}`;

const listArray = [
    {
        id: 1,
        label: "Experimento 01",
        link: `${BASE_PATH}/face-cam-test01/index.html`
    },
    {
        id: 2,
        label: "Experimento 02",
        link: `${BASE_PATH}/letter-anim-test01/index.html`
    },
    {
        id: 3,
        label: "Experimento 03",
        link: `${BASE_PATH}/letter-anim-test02/index.html`
    },
]

const list = document.querySelector(".list");

if(list){
    list.innerHTML = '';

    listArray.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.label;
        listItem.appendChild(link);
        list.appendChild(listItem);
    })
} else {
    console.error('No se encontró el elemento con clase "list"');
};

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header p');
    if(header){
        header.textContent = `Experimentos con p5.js y ml5.js - ${listArray.length} proyectos`;
    }
});