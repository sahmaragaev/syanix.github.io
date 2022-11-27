import AboutUs from "../views/components/about_us.js";
import Shahmar from "../views/components/shahmar.js";

const header = document.getElementById('header');
const info = document.getElementById('info');
info.innerHTML = await Shahmar.render();

header.innerHTML = await AboutUs.render();

const shahmar = document.getElementById('shahmar');
shahmar.onclick = async function() {
    info.innerHTML = await Shahmar.render();
};

const turkana = document.getElementById('turkana');
turkana.onclick = async function() {

};

const vaqif = document.getElementById('vaqif');
vaqif.onclick = async function() {

};