function guessed() {
    const random = Math.floor(Math.random() * 10) + 1;
    let number=parseInt(prompt('Guase a number 1 to 10 :'));
    while(number !==random){
    number=parseInt(prompt('Guase a number 1 to 10 :'));
    }
    if(number==random){
    console.log('You guessed the careact number')
    }
  }
  guessed()