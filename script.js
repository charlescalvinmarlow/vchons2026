const uts = document.getElementById('utsP');
const visual = document.getElementById('visualP');
const comm = document.getElementById('communicationP');
const honours = document.getElementById('honoursP');
const showcase = document.getElementById('showcaseP');
const year = document.getElementById('yearP');
const extra = document.getElementById('extra-textP')

const chantelle = document.getElementById('chantelle');
const cheylon = document.getElementById('cheylon');
const anja = document.getElementById('anja');
const charles = document.getElementById('charles');
const sophie = document.getElementById('sophie');
const tom = document.getElementById('tom');

function resetText() {
    uts.innerHTML = "UTS";
    visual.innerHTML = "VISUAL"
    comm.innerHTML = "COMMUNICATION"
    honours.innerHTML = "HONOURS"
    showcase.innerHTML = "SHOWCASE"
    year.innerHTML = "2026"
    extra.innerHTML = ""
}

anja.addEventListener("mouseover", (event) => {
    addText('', 'ANJA', 'CLAUSIUS', '', 'DIGITAL', 'DISEMBODIMENT', '')
})
anja.addEventListener("mouseout", (event) => {
    resetText();
})

chantelle.addEventListener("mouseover", (event) => {
    addText('CHANTELLE', 'CORTEZ', 'MAGLALANG', '', 'TANIM', 'TRACING ROOTS TO A', 'PLANTLY ATTENTION')
})
chantelle.addEventListener("mouseout", (event) => {
    resetText();
})

charles.addEventListener("mouseover", (event) => {
    addText('CHARLES', 'MARLOW', '', '', 'FOREST', 'OF THE', '.CLOUD')
})
charles.addEventListener("mouseout", (event) => {
    resetText();
})

cheylon.addEventListener("mouseover", (event) => {
    addText('', 'CHEYLON', 'DEVINE', '', 'VESTIGES', 'OF THE SEA', '')
})
cheylon.addEventListener("mouseout", (event) => {
    resetText();
})



sophie.addEventListener("mouseover", (event) => {
    addText('SOPHIE', 'ZHANG', '', 'AN INDEX', 'OF MEMORY', '', '')
})
sophie.addEventListener("mouseout", (event) => {
    resetText();
})

tom.addEventListener("mouseover", (event) => {
    addText('TOM', 'HOUSTON', '', 'ARE YOU', 'MY TWIN?', '', '')
})
tom.addEventListener("mouseout", (event) => {
    resetText();
})

function addText(one, two, three, four, five, six, seven) {
    uts.innerHTML = one;
    visual.innerHTML = two;
    comm.innerHTML = three
    honours.innerHTML = four
    showcase.innerHTML = five
    year.innerHTML = six
    extra.innerHTML = seven
}