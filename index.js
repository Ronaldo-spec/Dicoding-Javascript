const message = (name) => {
    console.log(`Hello ${name}`)
}

message('Anjay');

const initialMemoryUsage = process.memoryUsage().heapUsed;

const yourName = process.argv[2]; // Mengambil argumen ke-2 dari command line (node script.js NamaAnda)
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// -------------------------------------------------------------------------------------------------
const Tiger = require('./Tiger.js')
const Wolf = require('./Wolf.js')

const tiger = new Tiger();
const wolf = new Wolf();

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  } else if (tiger.strength < wolf.strength){
    wolf.howl();
    return;
  } else {
    console.log('Kekuatannya sama!')
  }
}

fighting(tiger,wolf);
