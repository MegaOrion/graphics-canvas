import {data} from './data.js';

const canvas = document.createElement('canvas');
canvas.setAttribute('id', "graphic");
canvas.setAttribute('height', "310px");
canvas.setAttribute('width', "1300px");
document.body.append(canvas);
canvas.style.border = 'solid black 1px';

const ctx = canvas.getContext('2d');
const ARR_Y0 = data[0].columns[1];
const ARR_Y1 = data[1].columns[2];
const ARR_X = data[0].columns[0];

ctx.scale(1, 1);

ctx.c
for (let i = 0; i < 3; i++) {
    ctx.fillText(i * 150 + "", 0, canvas.height - i * 150 - 1);
}
ctx.stroke();

ctx.beginPath();
for (let i = 0; i < getDate().length; i++) {
    ctx.fillText(getDate()[i], i * 33 + 10, canvas.height - 1);
}
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = data[0].colors.y0;
ctx.moveTo(10, canvas.height - 1);
for( let i = 1; i < ARR_Y0.length; i++) {
    ctx.lineTo(i*11+10, canvas.height - data[0].columns[1][i])
}
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = data[0].colors.y1;
ctx.moveTo(10, canvas.height - 1);
for( let i = 1; i < ARR_Y1.length; i++) {
    ctx.lineTo(i*11+10, canvas.height - data[0].columns[2][i])
}
ctx.stroke();

function getDate() {
    let arr = [];    
    for (let i = 1; i < ARR_X.length; i += 3) {
        let d = new Date(ARR_X[i]);
        arr.push(`${(d.getDate() < 10 ? '0' + d.getDate() : d.getDate())}.${(d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))}`)
    }
    return arr;
}

console.log(getDate());