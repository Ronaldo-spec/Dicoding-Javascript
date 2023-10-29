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