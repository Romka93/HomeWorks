var q = 3;
 q *= 3; // Інструкція вираз;
console.log(q);
{
    var x = 100;
    c = Math.cos(x); // Складові інструкції;
    console.log(c);
}
if (c != x){
    console.log("YES")// Інструкція if;
}else {
    console.log("NO") // Конструкція else;
}
i = j = 1;
k = 2;
if( i == j) {
    if (j == k) {
        console.log("i = k");
    }
    else {
        console.log("i ne= k")
    }
}
if( i == j){
    if(j == k){
        console.log("i = k");}
}
else{
    console.log("i ne= k")
}
var w = 5;
if(w < 1){
    console.log(1)
}
else {
    if(w > 1){
        console.log(2)
    }
    else {
        if(w = 1){
            console.log(3)
        }
        else {
            console.log(4)
        }
    }
}

switch('10 + 10'){
    case '10 + 10': console.log(10+10); break; //Інструкція switch;
    case 109: console.log(2); break;
    case 10 : console.log(3); break;
    default : console.log(4);break;
}
let y = true;
function convert(y) {
    switch (typeof y){
        case 'number': return y.toString(16);
        case 'string': return '"' + y + '"';
        case 'boolean': return y.toString().toUpperCase();
        default: return y.toString();
    }
}
console.log(convert(y));
let o = 0;
while (5 > o){
    console.log(o);//Інструкція while
    o++;
}
let l = 1;
do { console.log(l)}
while(l >   2){ console.log('da');};