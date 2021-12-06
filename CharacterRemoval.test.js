const CharacterRemoval = require("./CharacterRemoval");

var exampleCheck = [
  "worlcde",
  "hi",
  "base",
  "dog",
  "yellow",
  "white",
  "cat",
  "world",
];

var example1 = [
  "baseball",
  "a",
  "all",
  "b",
  "ball",
  "bas",
  "base",
  "cat",
  "code",
  "d",
  "e",
  "quit",
  "z",
];

var example2 = [
  "apbpleeeef",
  "a",
  "ab",
  "abc",
  "abcg",
  "b",
  "c",
  "dog",
  "e",
  "efd",
  "zzzz",
];

var example3 = [
  "pleeeef",
  "a",
  "ab",
  "abc",
  "abcg",
  "b",
  "c",
  "dog",
  "e",
  "efd",
  "zzzz",
];

test("Should print 2 if find a match with some word removing characters from 'worlcde'", () => {
  expect(CharacterRemoval(exampleCheck)).toBe(2);
});

test("Should print 4 if find a match with some word removing characters from 'baseball'", () => {
  expect(CharacterRemoval(example1)).toBe(4);
});

test("Should print 8 if find a match with some word removing characters from 'apbpleeeef'", () => {
  expect(CharacterRemoval(example2)).toBe(8);
});

test("Should print -1 if they don't find any word in te dictionary", () => {
  expect(CharacterRemoval(example3)).toBe(-1);
});
