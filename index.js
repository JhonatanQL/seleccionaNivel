const nivelList = document.getElementById('nivelList');
const nivel = document.getElementById('nivel');
const vida = document.getElementById('vida');
const daño = document.getElementById('daño');

class Estadisticas {
  constructor(vidas,danos){
    this.vidas = vidas
    this.danos = danos
  }
}

const niveles = ['','','','','']

niveles[0] = new Estadisticas(100,50);
niveles[1] = new Estadisticas(120,60);
niveles[2] = new Estadisticas(150,80);
niveles[3] = new Estadisticas(170,90);
niveles[4] = new Estadisticas(200,150);

for(let i = 1; i <= 5; i++){
  let nivelItem = document.createElement('option');
  nivelItem.textContent = i;
  nivelList.appendChild(nivelItem);
}

nivelList.addEventListener('click', () => {
  nivel.textContent = `Nivel: ${nivelList.value}`
  nivelList.value == 1 ? 
    (vida.textContent = `Vida: ${niveles[0].vidas}`,
    daño.textContent= `Daño: ${niveles[0].danos}`) 
    : 
    '1' 
  nivelList.value == 2 ? 
    (vida.textContent = `Vida: ${niveles[1].vidas}`,
    daño.textContent= `Daño: ${niveles[1].danos}`) 
    : 
    '1' 
  nivelList.value == 3 ? 
    (vida.textContent = `Vida: ${niveles[2].vidas}`,
    daño.textContent= `Daño: ${niveles[2].danos}`) 
    : 
    '1' 
  nivelList.value == 4 ? 
    (vida.textContent = `Vida: ${niveles[3].vidas}`,
    daño.textContent= `Daño: ${niveles[3].danos}`) 
    : 
    '1' 
  nivelList.value == 5 ? 
    (vida.textContent = `Vida: ${niveles[4].vidas}`,
    daño.textContent= `Daño: ${niveles[4].danos}`) 
    : 
    '1' 
})

