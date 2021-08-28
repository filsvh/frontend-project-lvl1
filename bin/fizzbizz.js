const fizzbizz = (length) => {
  for (let i = 1; i < length; i++) {
    const fizz = !(i % 3);
    const bizz = !(i % 5);
    if (fizz && bizz) {
      console.log("fizzbizz");
      continue;
    }
    if (fizz) {
      console.log("fizz");
      continue;
    }
    if (bizz) {
      console.log("bizz");
      continue;
    }
    console.log(i)
  }
}

fizzbizz(100);