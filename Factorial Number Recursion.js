function a(x) {
    if (x == 0) {
      return 1;
    } else {
      return x * a(x - 1);
    }
  }
  
  const num = prompt('Enter the positive number');
  if (num >= 0) {
    const c = a(num);
    console.log(`The factorial of ${num} is ${c}`)
  } else {
    console.log('plese Enter the positive number')
  }
  