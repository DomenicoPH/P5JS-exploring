const expArray = [
    {
        id: 1,
        label: "Experimento 01",
        link: "experiments/face-cam-test01/index.html"
    },
    {
        id: 2,
        label: "Experimento 02",
        link: "experiments/letter-anim-test01/index.html"
    },
    {
        id: 3,
        label: "Experimento 03",
        link: "experiments/letter-anim-test02/index.html"
    },
    {
        id: 4,
        label: "ASCII Webcam",
        link: "experiments/project001-asciiart-01/index.html"
    }
];

const patternsArray = [
    {
        id: 1,
        label: "Angled Lines I",
        link: "patterns/angled-lines/index.html"
    },
    {
        id: 2,
        label: "Angled Lines II",
        link: "patterns/angled-lines-2/index.html"
    },
    {
        id: 3,
        label: "Colored Sq.",
        link: "patterns/colored-squares/index.html"
    },
    {
        id: 4,
        label: "Random Color T.",
        link: "patterns/random-color-triangles/index.html"
    },
    {
        id: 5,
        label: "Sq. Pattern",
        link: "patterns/simple-square-pattern/index.html"
    },
    {
        id: 6,
        label: "Sq. Grid",
        link: "patterns/squares-grid/index.html"
    },
];


const expList = document.querySelector(".experiments");
if(expList){
    expList.innerHTML = '';

    expArray.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.label;
        listItem.appendChild(link);
        expList.appendChild(listItem);
    })
} else {
    console.error('No se encontró el elemento con clase "experiments"');
};

const patList = document.querySelector(".patterns");
if(patList){
    patList.innerHTML = '';

    patternsArray.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.label;
        listItem.appendChild(link);
        patList.appendChild(listItem);
    })
} else {
    console.error('No se encontró el elemento con clase "patterns"');
};

// ---------------------------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header p');
    if(header){
        header.textContent = `Experimentos con p5.js y ml5.js - ${expArray.length} proyectos`;
    }
});