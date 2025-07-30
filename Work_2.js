//1
let str = '';
for (let i = 10; i < 20; i++) {
    str += i + ', ';
}
console.log(str);

//2
let str2 = '';
for(let i = 10; i < 20; i++){
    str2 += i*i + ', ';
}
console.log(str2);

//3
for(let i = 0; i < 10; i++){
    console.log(i + '*7 = ' + i*7);
}

//4
let sum = 0;
for(let i = 0; i < 15; i++){
    sum+=i;
}
console.log(sum);

//5
let product = 1;
for(let i = 15; i < 35; i++){
    product*=i;
}
console.log(product);

//6
let sum2 = 0;
let average;
for(let i = 1; i <= 500; i++){
    average = (sum2+=i)/500;
}
console.log(average);

//7
let sum3 = 0;
for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        sum3+=i;
    }
}
console.log(sum3);

//8
for(let j = 100; j < 200; j++){
    if(j % 3 == 0){
        console.log(j);
    }
}

//9
let number = prompt("Введіть натуральне число > 0:");
let result9 = "";
for(let i = 1; i <= number; i++){
  if(number % i === 0){
    result9 += i + " ";
  }
}
console.log("Дільники числа " + number + ": " + result9);

let countEven = 0;
for(let i = 1; i <= number; i++){
  if(number % i === 0 && i % 2 === 0){
    countEven++;
  }
}
console.log("Кількість парних дільників: " + countEven);

sum = 0;
for(let i = 1; i <= number; i++){
  if(number % i === 0 && i % 2 === 0){
    sum += i;
  }
}
console.log("Сума парних дільників: " + sum);

//10 
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}