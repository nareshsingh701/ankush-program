function add(x) {
    let a = 0;
    let b, i = 1,
      step = 1;
    while (x != 0) {
      b = x % 2;
      console.log(`step ${step++}: ${x}/2,  remander = ${b},Quotient = ${parseInt(x/2)} `);
      x = parseInt(x / 2);
      a = a + b * i;
      i = i * 10;
    }
    console.log(`Binary: ${a}`)
  }
  let number = prompt('Enter a decimal number:')
  add(number)
  