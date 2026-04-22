
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var sampleRect = {
  p1 :{
    x:1,
    y:1,
    z:1,
  },
  p2:{
    x:-1,
    y:1,
    z:1,
  },
  p3:{
    x:-1,
    y:-1,
    z:1,
  },
  p4:{
    x:-1,
    y:1,
    z:-1,
  },
  p5:{
    x:-1,
    y:-1,
    z:-1,
  },
  p6:{
    x:1,
    y:-1,
    z:1,
  },
  p7:{
    x:1,
    y:-1,
    z:-1,
  },
  p8:{
    x:1,
    y:1,
    z:-1,
  },
  color: "blue",
}

const camera = {
  x: 540,
  y: 300,
  z: 0,
  hor: 0,
  vert:0,
}

function drawCube(mol) {
  ctx.fillStyle = mol.color;
  mol.x = 
  ctx.fillRect (mol.x, mol.y, mol.w, mol.h);
}

drawCube(sampleRect)
