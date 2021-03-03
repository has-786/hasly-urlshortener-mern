
function A(a){
  console.log(a);
}

sum=A.bind(3);
function sum(b){
  console.log(b);
}


console.log(sum(3)(4));
