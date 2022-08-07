function a() {
    const data = prompt('Enter a sentence');
    const b = data.split(' ')
    b.sort();
    console.log('The sort world are');
    for (const d of b) {
      console.log(d);
    }
  }
  a()
  