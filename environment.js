
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var sampleRect = {
  p1 :{
    x:50,
    y:50,
    z:5,
  },
  p2:{
    x:5,
    y:50,
    z:5,
  },
  p3:{
    x:5,
    y:5,
    z:5,
  },
  p4:{
    x:5,
    y:50,
    z:50,
  },
  p5:{
    x:5,
    y:5,
    z:50,
  },
  p6:{
    x:50,
    y:5,
    z:5,
  },
  p7:{
    x:50,
    y:5,
    z:50,
  },
  p8:{
    x:50,
    y:50,
    z:50,
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
  

  ctx.beginPath();       // Start a new path
  ctx.moveTo(mol.p1.x , mol.p1.y );    // Starting point 
  ctx.lineTo(mol.p2.x , mol.p2.y );  // Ending point
  ctx.lineTo(mol.p3.x , mol.p3.y );
  ctx.lineTo(mol.p6.x , mol.p6.y );
  ctx.lineTo(mol.p1.x , mol.p1.y );
  ctx.stroke();          // Render the line

  ctx.fillStyle = mol.color;
  ctx.fillRect (mol.p3.x, mol.p3.y, mol.p1.x-mol.p3.x , mol.p1.y-mol.p3.y);

  ctx.fillStyle = 'grey';
  ctx.beginPath();
  ctx.arc(mol.p1.x, mol.p1.y, 3, 0, 2 * Math.PI);
  ctx.fill();
}

drawWireFrame(sampleRect)

console.log("...script end")