function a(num) {

    if (num < 2) {
      return num;
    } else {
      return a(num - 1) + a(num - 2);
    }
  }
  const b = prompt('Enter the number of terms');
  
  if (b <= 0) {
    console.log('the positive integer number')
  } else {
    for (let i = 0; i < b; i++) {
      console.log(a(i));
    }
  }
  