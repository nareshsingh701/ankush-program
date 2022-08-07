function a(b) {
    const c = b.length;
    for (let i = 0; i < c / 2; i++) {
      if (b[i] !== b[c - 1 - i]) {
        return 'It is not a palindrome'
      }
    }
    return 'It is a palindrome'
  }
  const b = prompt('Enter a string ');
  const value = a(b)
  console.log(value);
  