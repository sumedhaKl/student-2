---
toc: True
comments: False
layout: post
title: 1.4 Correcting errors
description: Practice with identifying and correcting code blocks
type: posts
courses: {'compsci': {'week': 6}}
permalink: /basics/js-debug
---

{% include nav_basics.html %}

[College Board Big Idea 1](https://apclassroom.collegeboard.org/103/home?unit=1)

## Identifying and Correcting Errors (Unit 1.4)

> Become familiar with types of errors and strategies for fixing them

- Review CollegeBoard videos and take notes on blog
- Complete assigned MCQ questions if applicable

# Code Segments

Practice fixing the following code segments!

## Segment 1: Alphabet List

Intended behavior: create a list of characters from the string contained in the variable `alphabet`

### Code:


```python
%%js

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetList = [];

for (var i = 0; i < 10; i++) {
	alphabetList.push(i);
}

console.log(alphabetList);
```

### What I Changed

I changed 

## Segment 2: Numbered Alphabet

Intended behavior: print the number of a given alphabet letter within the alphabet. For example:
```
"_" is letter number _ in the alphabet
```

Where the underscores (_) are replaced with the letter and the position of that letter within the alphabet (e.g. a=1, b=2, etc.)

### Code:


```python
%%js

// Copy your previous code to built alphabetList here

let letterNumber = 5

for (var i = 0; i < alphabetList; i++) {
	if (i === letterNumber) {
		console.log(letterNumber + " is letter number 1 in the alphabet")
	}
}

// Should output:
// "e" is letter number 5 in the alphabet
```

### What I Changed

I changed...

## Segment 3: Odd Numbers

Intended behavior: print a list of all the odd numbers below 10

### Code:


```python
%%js

let evens = [];
let i = 0;

while (i <= 10) {
  evens.push(i);
  i += 2;
}

console.log(evens);
```

### What I Changed

I changed...

# BELOW NOT EDITED

The intended outcome is printing a number between 1 and 100 once, if it is a multiple of 2 or 5 
- What values are outputted incorrectly. Why?
- Make changes to get the intended outcome.


```python
%%js

var numbers = []
var newNumbers = []
var i = 0

while (i < 100) {
    numbers.push(i)
    i += 1
}
for (var i of numbers) {
    if (numbers[i] % 5 === 0)
        newNumbers.push(numbers[i])
    if (numbers[i] % 2 === 0)
        newNumbers.push(numbers[i])
}
console.log(newNumbers) 


```

# Challenge

This code segment is at a very early stage of implementation.
- What are some ways to (user) error proof this code?
- The code should be able to calculate the cost of the meal of the user

Hint:
- write a “single” test describing an expectation of the program of the program
- test - input burger, expect output of burger price
- run the test, which should fail because the program lacks that feature
- write “just enough” code, the simplest possible, to make the test pass

Then repeat this process until you get program working like you want it to work.


```python
%%js

var menu =  {"burger": 3.99,
         "fries": 1.99,
         "drink": 0.99}
var total = 0

//shows the user the menu and prompts them to select an item
console.log("Menu")
for (var item in menu) {
    console.log(item + "  $" + menu[item].toFixed(2)) //why is toFixed used?
}
//ideally the code should support mutliple items
var item = "burger"

//code should add the price of the menu items selected by the user 
console.log(total)
```

## Hacks
> Now is a good time to think about Testing of your teams final project...
- What errors may arise in your project?
- What are some test cases that can be used?
- Make sure to document any bugs you encounter and how you solved the problem.
- What are “single” tests that you will perform on your project? Or, your part of the project?
    * As Hack Design and Test plan action … Divide these “single” tests into Issues for Scrum Board prior to coding. FYI, related tests could be in same Issue by using markdown checkboxes to separate tests.
