const canvas = document.createElement('canvas');
canvas.setAttribute('id', "graphic");
canvas.setAttribute('height', "310px");
canvas.setAttribute('width', "1300px");
document.body.append(canvas);
canvas.style.border = 'solid black 1px';

const ctx = canvas.getContext('2d');
const ARR_Y0 = data[0].columns[1];
const ARR_Y1 = data[0].columns[2];
const ARR_X = data[0].columns[0];

ctx.scale(1, 1);

ctx.beginPath();
for (let i = 0; i < 3; i++) {
    ctx.fillText(i * 150 + "", 0, canvas.height - i * 150 - 1);
}
ctx.stroke();

ctx.beginPath();
for (let i = 0; i < createStrDate(ARR_X).length; i++) {
    ctx.fillText(createStrDate(ARR_X)[i], i * 33 + 10,canvas.height - 1);
}
ctx.stroke();

ctx.beginPath();
ctx.scale(1, -1);
ctx.strokeStyle = data[0].colors.y0;
ctx.moveTo(10, 1 - 300);
for( let i = 1; i < ARR_Y0.length; i++) {
    ctx.lineTo(i * 11 + 10, data[0].columns[1][i] - 300)
}
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = data[0].colors.y1;
ctx.moveTo(10, 1 - 300);
for( let i = 1; i < ARR_Y1.length; i++) {
    ctx.lineTo(i * 11 + 10, data[0].columns[2][i] - 300)
}
ctx.stroke();


const canvas1 = document.createElement('canvas');
canvas1.setAttribute('id', "graphic1");
canvas1.setAttribute('height', "310px");
canvas1.setAttribute('width', "1300px");
document.body.append(canvas1);
canvas1.style.border = 'solid black 1px';

const ctx1 = canvas1.getContext('2d');
const AR_Y0 = data[1].columns[1];
const AR_Y1 = data[1].columns[2];
const AR_X = data[1].columns[0];


ctx1.scale(1, 1);
ctx1.beginPath();
for (let i = 0; i < 6; i++) {
    ctx1.fillText(i * 10000 + "", 0, canvas1.height - i * 60 - 1);
}
ctx1.stroke();
ctx1.beginPath();
for (let i = 0; i < createStrDate(AR_X).length; i++) {
    ctx1.fillText(createStrDate(AR_X)[i], i * 33 + 10, canvas1.height - 1);
}
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = data[1].colors.y0;
ctx1.scale(1, -0.00625);
ctx1.moveTo(10, 1 - 50000);
for( let i = 1; i < AR_Y0.length; i++) {
    ctx1.lineTo(i*11+10, data[1].columns[1][i] - 50000)
}
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = data[1].colors.y1;
ctx1.moveTo(10, 1 - 50000);
for( let i = 1; i < AR_Y1.length; i++) {
    ctx1.lineTo(i * 11 + 10, data[1].columns[2][i] - 50000)
}
ctx1.stroke();

function createStrDate(ARR_X) {
    let arr = [];    
    for (let i = 1; i < ARR_X.length; i += 3) {
        let d = new Date(ARR_X[i]);
        arr.push(`${(d.getDate() < 10 ? '0' + d.getDate() : d.getDate())}.${(d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))}`)
    }
    return arr;
}