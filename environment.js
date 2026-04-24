
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const originX = canvas.width / 2;
const originY = canvas.height / 2;
const originZ = 0;

var sampleRect = {
  p1 :{
    x:originX + 50,
    y:originY + 50,
    z:originZ + 5,
  },
  p2:{
    x:originX + 5,
    y:originY + 50,
    z:originZ + 5,
  },
  p3:{
    x:originX + 5,
    y:originY + 5,
    z:originZ + 5,
  },
  p4:{
    x:originX + 5,
    y:originY + 50,
    z:originZ + 50,
  },
  p5:{
    x:originX + 5,
    y:originY + 5,
    z:originZ + 50,
  },
  p6:{
    x:originX + 50,
    y:originY + 5,
    z:originZ + 5,
  },
  p7:{
    x:originX + 50,
    y:originY + 50,
    z:originZ + 50,
  },
  p8:{
    x:originX + 50,
    y:originY + 50,
    z:originZ + 50,
  },
  color: "blue",
}

const camera = {
  x: originX,
  y: originY,
  z: originZ,
  hor: 0,
  vert:0,
}

function drawWireFrame(mol) {
  
//draw wire frame
    ctx.fillStyle = "black";
    ctx.beginPath();       // Start a new path
    ctx.moveTo(mol.p1.x , mol.p1.y );    // Starting point 
    ctx.lineTo(mol.p2.x , mol.p2.y );  // Ending point
    ctx.lineTo(mol.p3.x , mol.p3.y );
    ctx.lineTo(mol.p6.x , mol.p6.y );
    ctx.lineTo(mol.p1.x , mol.p1.y );
    ctx.stroke();          // Render the line

    //draw front points
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(mol.p1.x, mol.p1.y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mol.p2.x, mol.p2.y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mol.p3.x, mol.p3.y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mol.p6.x, mol.p6.y, 3, 0, 2 * Math.PI);
    ctx.fill();

}
drawWireFrame(sampleRect)

console.log("...Script End")
