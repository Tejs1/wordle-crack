const data = require("./list.json");
console.log(data);

fetch("./list.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

const filterArr = (input, letter, output) => {
  input.filter((ele) => {
    return ele.includes(letter) ? output.push(ele) : output;
  });
};
const filterIndex = (input, letter, output, index) => {
  input.filter((ele) => {
    return ele.indexOf(letter) === index ? output.push(ele) : output;
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

const arr = [
  "hi",
  "hello",
  "good",
  "bad",
  "red",
  "orange",
  "oops",
  "zonks",
  "zooea",
  "zooey",
  "zooid",
  "zooks",
  "zooms",
  "zoons",
];

const not = [
  ..."again".split(""),
  ..."lusty".split(""),
  ..."pwhmjkcv".split(""),
];
console.log(not);

const ans = [];
not.forEach((letter) => {
  ans.push(filterNot(list, letter));
});

result = ans.reduce((a, b) => a.filter((c) => b.includes(c)));

const one = [];
const two = [];
const three = [];
filterArr(result, "e", one);
filterArr(one, "o", two);

filterIndex(two, "r", three, 4);
console.log(three);
