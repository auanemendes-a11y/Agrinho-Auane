const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        if(window.innerWidth < 768){
            menu.classList.remove("active");
        }
    });
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme","light");
        themeBtn.textContent = "🌙";
    }
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".reveal")
.forEach(el => observer.observe(el));


// ======================
// MAPA INTERATIVO - Adicionar aqui os eventos
// ======================

const mapa = L.map('map', {
    scrollWheelZoom: false
}).setView([-24.8, -51.5], 7);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(mapa);


// TERRA INDÍGENA TEKOHA GUASU GUAVIRÁ

L.marker([-24.08, -54.26])
.addTo(mapa)
.bindPopup(`
    <h3>Tekoha Guasu Guavirá</h3>

    <p>
        Território tradicional Avá-Guarani situado entre Guaíra,
        Terra Roxa e municípios vizinhos. A região apresenta
        histórico de conflitos fundiários, retomadas territoriais
        e reivindicações pela demarcação das terras indígenas.
    </p>
`);


// PINHÃO

L.marker([-25.69, -51.66])
.addTo(mapa)
.bindPopup(`
    <h3>Pinhão</h3>

    <p>
        Município historicamente marcado por disputas fundiárias,
        conflitos de posse e tensões envolvendo comunidades rurais,
        posseiros e grandes propriedades.
    </p>
`);


// RIO BONITO DO IGUAÇU

L.marker([-25.49, -52.53])
.addTo(mapa)
.bindPopup(`
    <h3>Rio Bonito do Iguaçu</h3>

    <p>
        Região conhecida pelos grandes assentamentos rurais
        organizados por movimentos sociais e por históricos
        conflitos pela terra.
    </p>
`);


// QUEDAS DO IGUAÇU

L.marker([-25.45, -52.91])
.addTo(mapa)
.bindPopup(`
    <h3>Quedas do Iguaçu</h3>

    <p>
        Importante área de conflitos fundiários envolvendo
        assentamentos da reforma agrária e disputas territoriais.
    </p>
`);


// REGIÃO DO CONTESTADO

L.marker([-26.42, -51.31])
.addTo(mapa)
.bindPopup(`
    <h3>Região do Contestado</h3>

    <p>
        Área associada à Guerra do Contestado (1912–1916),
        conflito envolvendo posseiros, trabalhadores rurais,
        empresas madeireiras e os governos estaduais e federal.
    </p>
`);


// TERRA INDÍGENA MANGUEIRINHA

L.marker([-25.95, -52.18])
.addTo(mapa)
.bindPopup(`
    <h3>Terra Indígena Mangueirinha</h3>

    <p>
        Território tradicional Kaingang e Guarani,
        importante para a preservação cultural e ambiental
        do sudoeste paranaense.
    </p>
`);


// Aqui que muda a cor do ícone

const iconeMarrecas = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


// TERRA INDÍGENA MARRECAS

L.marker([-25.12, -51.53], {
    icon: iconeMarrecas
})
.addTo(mapa)
.bindPopup(`
    <h3>Terra Indígena Marrecas</h3>

    <p>
        Localizada no município de Turvo, entre Guarapuava e
        Prudentópolis, a nossa Terra Indígena Marrecas constitui
        uma das primeiras áreas indígenas oficialmente
        demarcadas no Paraná, ainda no século XIX.
    </p>

    <p>
        O território Kaingang de Marrecas tornou-se referência
        histórica na luta pela garantia territorial dos povos
        indígenas no estado.
    </p>

    <p>
        Durante o século XX, especialmente no período da
        ditadura militar, diversas comunidades indígenas
        enfrentaram políticas de assimilação forçada,
        restrições ao uso das línguas originárias e pressões
        sobre suas formas tradicionais de organização social
        e cultural. Recentemente, houveram manifestações de 
        pessoas e empresas ligadas ao agronegócio pedindo o 
        retorno desse triste período da história brasileira.
    </p>
`);



// AJUSTE RESPONSIVO

window.addEventListener('resize', () => {
    mapa.invalidateSize();
});

