console.log(Number('100'));
console.log(+'100');
console.log(Number('100a'));
console.log(+'100a');
console.log(parseInt('10 0a'));
console.log(parseInt('a10 0a'));
console.log(parseFloat('10.02a'));
console.log(parseInt('10.02a'));

console.log(Boolean(100));
console.log(Boolean(0));

console.log(Boolean('100'));
console.log(Boolean('fsssfs'));
console.log(!!'100');
console.log(!!'');
console.log(!'fs');
var a;
console.log(String(true));
console.log(String(false));
console.log(a = '' + true);
console.log('' + false);
console.log(a);
console.log(typeof a);

console.log(String({}));

console.log(Boolean({}));
console.log(Boolean([23]));
console.log(!!{});
console.log(!![]);

console.log(typeof function asd() {})

// typeof 1{}
console.log(typeof 'number');

console.log(typeof undefined);

let b;
console.log(typeof b);
console.log(b);

console.log(typeof null);

function resulttime (a,b){
    b = (b + 25) % 59;
    if(b/59 < 1){
        console.log(a , b);
    } else {

        
        console.log(a, b);
    }
}
resulttime(10,50);

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

