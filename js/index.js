var a = 2,
  b = 10,
  c = 8;
var coef = [a,b,c];
var roots = root(coef);

function deltac(a, b, c) {
  return b * b - 4 * a * c;
}
function root(coef) {

  var a = coef[0], b= coef[1], c=coef[2];
 
  if (deltac(a, b, c) < 0) {
    console.log("no roots");
  } else {
    var r1 = -b + Math.sqrt(deltac(a, b, c));
    var r2 = -b - Math.sqrt(deltac(a, b, c));
    var r= [r1,r2];
    return r;
  }
}
function changeCoef() {
  a=a + Math.round(Math.random());
  b=b*1+Math.round(Math.random());
  c=c-Math.round(Math.random());
  coef = [a,b,c];
  computeAndDisplay(coef);
}

function initCoef(){
  //console.log("init");
  a = 2;
  b = 10;
  c = 8;
coef = [a,b,c]
computeAndDisplay(coef);
}

function computeAndDisplay (coef) { 
//console.log("cAD coef " + coef);
document.getElementById("coef").innerHTML = "coef a,b,c = " +coef;
roots = root(coef);
document.getElementById("roots").innerHTML = "roots = " +roots  ;
}

function array(a,b,c){
  var ar=[a,b,c];
  return ar;
  //console.log("array" +ar);
}