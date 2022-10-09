const num = parseInt(prompt("Natural son kiriting:"));
let son = 0;
for( let i = 1 ; i <= num; i++){
    if (num > 0)
    {console.log(`[${i}, ]`);}
    son += i;
}
console.log(`${num} gacha bo'lgan sonalar yig'indisi = ${son} `)