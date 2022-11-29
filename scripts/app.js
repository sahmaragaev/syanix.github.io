import Header from "../views/components/header.js";
import Shahmar from "../views/components/shahmar.js";
import Turkana from "../views/components/turkana.js";
import Vaqif from "../views/components/vaqif.js";

const header = document.getElementById('header');
const info = document.getElementById('info');
info.innerHTML = await Shahmar.render();

header.innerHTML = await Header.render();

const shahmar = document.getElementById('shahmar');
shahmar.onclick = async function() {
    info.innerHTML = await Shahmar.render();
};

const turkana = document.getElementById('turkana');
turkana.onclick = async function() {
    info.innerHTML = await Turkana.render();
};

const vaqif = document.getElementById('vaqif');
vaqif.onclick = async function() {
    info.innerHTML = await Vaqif.render();

};