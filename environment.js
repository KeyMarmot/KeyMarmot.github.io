
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
    x:.1,
    y:1,
    z:1,
  },
  p3:{
    x:.1,
    y:.1,
    z:1,
  },
  p4:{
    x:.1,
    y:1,
    z:.1,
  },
  p5:{
    x:.1,
    y:.1,
    z:.1,
  },
  p6:{
    x:1,
    y:.1,
    z:1,
  },
  p7:{
    x:1,
    y:.1,
    z:.1,
  },
  p8:{
    x:1,
    y:1,
    z:.1,
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

function drawWireFrame(mol) {
  ctx.fillStyle = mol.color;
  ctx.beginPath();       // Start a new path
  ctx.moveTo(mol.p1.x * 50, mol.p1.y * 50);    // Starting point 
  ctx.lineTo(mol.p2.x * 50, mol.p2.y * 50);  // Ending point
  ctx.lineTo(mol.p3.x *50 , mol.p3.y * 50);
  ctx.lineTo(mol.p6.x * 50, mol.p6.y * 50);
  ctx.lineTo(mol.p1.x * 50, mol.p1.y * 50);
  ctx.stroke();          // Render the line

  ctx.fillRect (mol.p3.x, mol.p3.y, 50, 50);
}

drawWireFrame(sampleRect)
