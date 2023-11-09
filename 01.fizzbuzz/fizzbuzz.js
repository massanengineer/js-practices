for (let num1 = 1; num1 <= 20; num1++){
  if(num1 % 15 == 0 ){
    console.log('FizzBuzz');
  } else if (num1 % 5 == 0) {
    console.log('Buzz')
  } else if (num1 % 3 == 0) {
    console.log('Fizz')
  } else
  console.log(num1);
}