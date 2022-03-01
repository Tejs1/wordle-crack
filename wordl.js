const data = require("./list");

const filterArr = (input, letter, output) => {
  input.filter((ele) => {
    return ele.includes(letter) ? output.push(ele) : output;
  });
};
const filterIndex = (input, letter, output, index) => {
  input.filter((ele) => {
    return ele.indexOf(letter) === index ? output.push(ele) : false;
  });
};

const filterNot = (arr, letter) => {
  const temp = [];
  arr.forEach((word) => {
    if (!word.includes(letter)) {
      temp.push(word);
    }
  });
  return temp;
};

const not = "taspondflickb".split("");

const ans = [];

not.forEach((letter) => {
  ans.push(filterNot(data, letter));
});

result = ans.reduce((a, b) => a.filter((c) => b.includes(c)));

const one = [];
const two = [];
const three = [];
const four = [];
const five = [];
const six = [];

filterArr(result, "u", one);
filterArr(one, "r", two);
filterArr(two, "e", three);
filterArr(three, "y", four);
// filterIndex(four, "d", five, 0);
// filterIndex(five, "e", six, 1);
// filterArr(four, "d", five);
// filterIndex(data, "s", one, 4);
// filterArr(four, "y", five);
// filterIndex(three, "a", five, 1);
// filterIndex(five, "a", five, 1);

console.log(four);
