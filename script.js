const uts = document.getElementById('utsP');
const visual = document.getElementById('visualP');
const comm = document.getElementById('communicationP');
const honours = document.getElementById('honoursP');
const showcase = document.getElementById('showcaseP');
const year = document.getElementById('yearP');
const extra = document.getElementById('extra-textP')

const anja = document.getElementById('anja');
const arkie = document.getElementById('arkie');
const chantelle = document.getElementById('chantelle');
const charles = document.getElementById('charles');
const charli = document.getElementById('charli');
const cheylon = document.getElementById('cheylon');
const daniel = document.getElementById('daniel');
const elaine = document.getElementById('elaine');
const ellie = document.getElementById('ellie');
const jade = document.getElementById('jade');
const james = document.getElementById('james');
const jenn = document.getElementById('jenn');
const jessie = document.getElementById('jessie');
const jie = document.getElementById('jie');
const joe = document.getElementById('joe');
const joel = document.getElementById('joel');
const jom = document.getElementById('jom');
const katie = document.getElementById('katie');
const kaya = document.getElementById('kaya');
const kk = document.getElementById('kk');
const lucien = document.getElementById('lucien');
const mac = document.getElementById('mac');
const pat = document.getElementById('pat');
const shu = document.getElementById('shu');

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

arkie.addEventListener("mouseover", (event) => {
    addText('', 'ARKIE', 'THOMAS', '', 'WEIRD', 'GIRLS', '')
})
arkie.addEventListener("mouseout", (event) => {
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

charli.addEventListener("mouseover", (event) => {
    addText('CHARLI', 'KRITE', '', 'OBJECTS', 'OF INTEREST', '', '')
})
charli.addEventListener("mouseout", (event) => {
    resetText();
})

cheylon.addEventListener("mouseover", (event) => {
    addText('', 'CHEYLON', 'DEVINE', '', 'VESTIGES', 'OF THE SEA', '')
})
cheylon.addEventListener("mouseout", (event) => {
    resetText();
})

daniel.addEventListener("mouseover", (event) => {
    addText('', 'DANIEL', 'SJÖGREN', '', 'EVERYTHING', 'GOES', '')
})
daniel.addEventListener("mouseout", (event) => {
    resetText();
})

elaine.addEventListener("mouseover", (event) => {
    addText('', 'ELAINE', 'CABANSAG', '', 'PLAYGROUND', '', '')
})
elaine.addEventListener("mouseout", (event) => {
    resetText();
})

ellie.addEventListener("mouseover", (event) => {
    addText('', 'ELLIE', 'JIYOON', 'PARK', '', 'THE WORDS', 'HE LEFT')
})
ellie.addEventListener("mouseout", (event) => {
    resetText();
})

jade.addEventListener("mouseover", (event) => {
    addText('JADE', 'YEO', '', 'DIAGNOSING', 'BIAS', '', '')
})
jade.addEventListener("mouseout", (event) => {
    resetText();
})

james.addEventListener("mouseover", (event) => {
    addText('JAMES', 'CAMPBELL', '', 'THE', 'BARRIER', '', '')
})
james.addEventListener("mouseout", (event) => {
    resetText();
})

jenn.addEventListener("mouseover", (event) => {
    addText('JENN', 'SHU', '', 'TYPOLOGY', 'OF', 'OSCILLATION', '')
})
jenn.addEventListener("mouseout", (event) => {
    resetText();
})

jessie.addEventListener("mouseover", (event) => {
    addText('JESSIE', 'HUA', '', 'THE TALES', 'OF', 'HOFFMAN', '')
})
jessie.addEventListener("mouseout", (event) => {
    resetText();
})

jie.addEventListener("mouseover", (event) => {
    addText('JIE', 'YIN', '', 'TRISKELION', '', '', '')
})
jie.addEventListener("mouseout", (event) => {
    resetText();
})

joe.addEventListener("mouseover", (event) => {
    addText('JOSEPH', 'MATTHEW', 'PALMERO', '', 'BUDOTS', 'IS SERIOUS', 'DANCE MUSIC')
})
joe.addEventListener("mouseout", (event) => {
    resetText();
})

joel.addEventListener("mouseover", (event) => {
    addText('JOEL', 'BREVIG', '', 'SICKDAY', '2026', '', '')
})
joel.addEventListener("mouseout", (event) => {
    resetText();
})

jom.addEventListener("mouseover", (event) => {
    addText('JOM', 'SON', '', 'CROAK', '', '', '')
})
jom.addEventListener("mouseout", (event) => {
    resetText();
})

katie.addEventListener("mouseover", (event) => {
    addText('KATIE', 'BAYNE', '', 'HEALING THE', 'INTERNET,', 'BIT BY BIT', '')
})
katie.addEventListener("mouseout", (event) => {
    resetText();
})

kaya.addEventListener("mouseover", (event) => {
    addText('KAYA', 'TRANTER', '', 'FUTURE', 'FRAMES', '', '')
})
kaya.addEventListener("mouseout", (event) => {
    resetText();
})

kk.addEventListener("mouseover", (event) => {
    addText('KK', 'PATEL', '', 'OUT', 'OF', 'LINE', '')
})
kk.addEventListener("mouseout", (event) => {
    resetText();
})

lucien.addEventListener("mouseover", (event) => {
    addText('LUCIEN', 'YUMRU', '', 'WITH ME', 'THROUGH THE', 'TAILWIND', '')
})
lucien.addEventListener("mouseout", (event) => {
    resetText();
})

mac.addEventListener("mouseover", (event) => {
    addText('MACKENZIE', 'JOYNER', '', 'HERE', 'AND', 'GONE', '')
})
mac.addEventListener("mouseout", (event) => {
    resetText();
})

pat.addEventListener("mouseover", (event) => {
    addText('PATRICK', 'BAKER', '', 'PERSONAOS', '', '', '')
})
pat.addEventListener("mouseout", (event) => {
    resetText();
})

shu.addEventListener("mouseover", (event) => {
    addText('SHU', 'CAI', '', 'MENAGERIE', '', '', '')
})
shu.addEventListener("mouseout", (event) => {
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