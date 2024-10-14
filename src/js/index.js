import Warrior from "./warriors.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#cards').style.visibility = 'visible';
    const logo = document.querySelector('#logo')

    setTimeout(() => {
        logo.style.width = '300px';
        logo.style.height = '200px';
    }, 2);
    startLol();
});

//-----------------------------------------------------
let allwarriors = [];

const startLol = async () => {
    const api = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        const data = await response.json();
        const warriors = data.data;

        Object.keys(warriors).forEach(character => {
            allwarriors.push(new Warrior(warriors[character]));
        });
        
        await showWarriors();

    } catch (error) {
        console.error('Error:', error);
    }
};

// -----------------------------------------------------

const showWarriors = async () => {
    const container = document.getElementById("cards");  
    container.innerHTML = ''; 

    for (let i = 0; i < allwarriors.length; i++) {
container.innerHTML += `
    <div class="card">
    <div class = circle_attack><div class="attack">${allwarriors[i].attack}</div></div>
        <img src="${allwarriors[i].img}" class="card-image" alt="${allwarriors[i].name}">
        <h1><b>${allwarriors[i].name}</b></h1>
        <div class="front card-back">
            <h2 class="back-content">${allwarriors[i].title}</h2>
            <p class="back-content">${allwarriors[i].intro}</p>
            <p class="back-content">
                <b>Defense</b>: ${allwarriors[i].defense}<br>
                <b>Magic</b>: ${allwarriors[i].magic}<br>
                <b>Difficulty</b>: ${allwarriors[i].difficulty}
            </p>
        </div>
        <div class="types"> 
        ${allwarriors[i].partype}</div>
    </div>`;

    }
};