//1
let str = '';
for(let i = 20; i <= 30; i+=0.5){
    str += i + ' ';
}
console.log(str);

//2
let rate = 42; 
for(let dollars = 10; dollars <= 100; dollars += 10){
  let hryvnas = dollars * rate;
  console.log(dollars + " USD = " + hryvnas + " грн");
}

//3
let N = prompt('Enter a digit: ');
for(let i = 1; i <= 100; i++){
    if(i*i < N){
        console.log(i);
    }
}

//4
let n = prompt("Введи число");
if(n <= 1){
    console.log("не є простим");
} 
else{
  let i = 2;
  for(; i*i <= n; i++){
    if(n % i === 0){
        break;
    } 
  }
  console.log(i*i > n ? "просте" : "не є простим");
}

