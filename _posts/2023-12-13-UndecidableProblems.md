# Undecidable Problems Topic 3.18

## What will we be doing today?
- Investigate the existence of undecidable problems in computer science

#### A decidable problem is a decision problem for which an algorithm can be written to produce a correct output for all inputs (e.g., "Is the number even?")

#### An undecidable problem is a problem that has no algorithm that can provide a yes or no answer. An undecidable problem may have an algorithm that works, but it can never fully work, and there are always instances in which that is the case to make a problem undecidable.

## Example
- **Decidable problem:**
    ```python
    if n % 3 == 0:
        print("n is a multiple of three")
    else:
        print("n is not a multiple of three")
    ```
    There is a clear algorithm determining if a number is a multiple of three that works for every case.

- **Undecidable problem:**
    ```python
    Halting problem
    
    With any given arbitrary computer program, will it run forever or will it stop
    
    No yes or no answer to this problem every time, how does a test happen if there is no ending?
    
    If ending takes too much time to find ending, does it even exist? what if it does, but the computer is not fast enough to find it, so it answers the ending as none?
    
    There is no algorithm for this that reliably gives a yes or no answer
    ```

## Where do we see this
When a program crashes, the computer cannot run the program causing backlog leading to the computer stopping the program after a few moments. We refer to this as a crash *pro tip, this is not the only reason for a crash, just a possible one*

### Post Correspondence Problem
The Post Correspondence Problem (PCP) involves a set of tiles, each containing two strings. The problem asks whether it is possible to arrange these tiles in a sequence (repetitions allowed) so that concatenating the top strings of the selected tiles matches the concatenation of the bottom strings.

### Tiling Problem
The Tiling Problem deals with determining whether a given shape (arbitrary shape) can be tiled using a finite set of smaller shapes (tiles). It remains undecidable due to the infinite possibilities and arrangements of shapes that would need to be considered to conclusively solve the problem.

### Word Problem for Groups
The Word Problem for Groups asks whether, given a group presentation and two words formed from the group's generators, these words represent the same group element. This problem cannot be solved algorithmically due to the undecidable nature of the word problem for groups in general.

### Busy Beaver Problem
The Busy Beaver Problem involves finding the Turing machine with the most significant number of steps executed before halting among all machines with a certain number of states. Due to the vast number of possible configurations and the infinite potential for different Turing machines, determining the Busy Beaver function for a given number of states remains undecidable.
4
### Collatz Conjecture
The Collatz Conjecture follows an iterative sequence for positive integers: if the number is even, divide it by 2; if it's odd, triple it and add 1. The conjecture posits that regardless of the starting number, this sequence always reaches 1. Despite extensive computational verifications, a proof for all integers remains undetermined.

### Post's Correspondence Problem
Post's Correspondence Problem (PCP) involves choosing sequences of pairs of strings from a finite set so that the concatenation of the first string in each pair matches the concatenation of the second string. The problem asks whether a sequence can be formed that produces a matching sequence of strings and is undecidable due to its relation to the Halting Problem.

### Rice's Theorem
Rice's Theorem states that any non-trivial property about the behavior of programs that can be determined by examining their source code is undecidable. It asserts that it's impossible to create a general algorithm to decide non-trivial semantic properties of programs.

### Emptiness Problem for Turing Machines
The Emptiness Problem for Turing Machines aims to determine whether a given Turing machine recognizes any strings in its language. This problem is undecidable since determining whether a Turing machine halts on all inputs (recognizes no strings) is equivalent to solving the Halting Problem.

### The Entscheidigungsproblem
The Entscheidigungsproblem refers to David Hilbert's problem of finding an algorithm to decide the truth of any mathematical statement by creating a mechanical procedure for solving mathematical problems. This problem was proven undecidable by Turing, Church, and others in their work on computability theory and the limitations of computation.

## POPCORN HACK, Create your own undecidable problem
Create a problem that is unsolvable by any single algorithm; for example, this problem could have infinite possibilities.

Put multiples of three into an algorithm and consistently divide each number by three.

Undecidability: This problem is undecidable because of it consistently dividing each number by three, which will never end (3/3 = 1, 1/3 = .33, .33/3 = 0.111, 0.111/3 = 0.037...).

### Example 
#### The "Infinite Sum Sequence Problem (ISSP)"
Problem Statement: Given an infinite sequence of positive integers, can it be determined whether there exists a subsequence that sums up to a specific target value?

Undecidability:
The ISSP is undecidable due to the infinite nature of sequences and the countless possible subsequence combinations, making it impossible to algorithmically determine the existence of a subsequence summing to a target value within a reasonable timeframe.

## Homework Due by Friday 11:59, message Daniel Choi, give an explanation for each problem that is one sentence long. Graded on completion and explanation. Send popcorn hack as a screenshot

### Post Correspondence Problem:
What is the primary concern related to the Post Correspondence Problem (PCP)?

A) It involves matching strings using regular expressions.

B) It deals with finding the shortest path in a graph.

--> C) PCP revolves around identifying whether a set of strings can be matched in a specific sequence.
Explanation: This is similar to the Halting Problem where it is unclear when the sequence will end.

D) It's related to optimizing sorting algorithms.

### Tiling Problem
Which statement accurately describes the undecidable nature of the Tiling Problem?

A) The Tiling Problem refers to arranging tiles in a specific pattern which can always be solved using a finite number of steps.

B) There exists an algorithm that can determine if a given shape can be tiled with a specific set of smaller shapes.

--> C) It's impossible to ascertain if an arbitrary shape can be tiled using a finite set of smaller shapes.
Explanation: This problem is undecidable because there are infinite possibilities for how tiles can be arranged to make the main shape and we are only provided a finite set of shapes which only has finite possibilities to make the main shape.

D) Tiling Problems can only be solved for regular polygons.

### Word Problem for Groups
What is the core issue represented by the Word Problem for Groups?

A) It focuses on finding the most efficient algorithm for text processing in groups.

--> B) This problem pertains to determining if two words representing group elements are equivalent.
Explanation: This problem is undecidable because an infinite number of words can be part of the same group element.

C) The Word Problem for Groups refers to solving crossword puzzles collaboratively.

D) It involves identifying the most commonly occurring words in a group.

### Busy Beaver Problem
Which statement accurately describes the concept behind the Busy Beaver Problem?

A) It deals with optimizing the performance of multitasking systems.

B) Busy Beaver Problem revolves around finding the most efficient algorithm to sort a list of numbers.

--> C) It's about determining the longest-running and most productive Turing machine.
Explanation: Turing Machines have inifinite potential for being productive and there is a equally large number of ways these machines could be put together, or configured. It is unsolvable because it is looking for a finite solution out of infinite possibilities.

D) Busy Beaver Problem is concerned with scheduling tasks in a time-efficient manner.

### Collatz Conjecture
What is the primary characteristic of the Collatz Conjecture?

A) It's a conjecture related to the distribution of prime numbers.

B) The conjecture revolves around finding the optimal path in a graph.

--> C) Collatz Conjecture deals with iterating over integers using a specific sequence until reaching the value 1.
Explanation: There is an infinite number of integers so it is very unlikely to test all the integers in order to reach the end value 1.

D) It's a hypothesis about the behavior of sorting algorithms.

### Post's Correspondence Problem
Which problem involves matching pairs of strings in a way that no two sequences produce identical combined strings?

A) Traveling Salesman Problem.

B) Knapsack Problem.

--> C) Post's Correspondence Problem.
Explanation: The problem is about matching strings so that the concatenations are unique when the strings are linked together.

D) Dijkstra's Shortest Path Problem.

### Rice's Theorem
What does Rice's Theorem state?

A) It claims that all programming languages are Turing-complete.

--> B) Rice's Theorem affirms that any non-trivial property about the behavior of programs is undecidable.
Explanation: A non trivial property is neither true nor false for every program. A computer cannot be made that defines these properties because computers only work on boolean logic which is only true or false.

C) It asserts that all recursive functions can be computed using a Turing machine.

D) Rice's Theorem describes the limitations of parallel computing.

### Emptiness Problem for Turing Machines
What does the Emptiness Problem for Turing Machines aim to determine?

--> A) It checks whether a Turing machine can recognize an empty language.
Explanation: The Emptiness Problem aims to determine if a Turing Machine recognizes all the strings in a language. It is undecidable because Turing machine cannot halt on all inputs because inputs are infinite. 

B) This problem is concerned with finding the smallest Turing machine.

C) Emptiness Problem verifies if a Turing machine has an infinite tape.

D) It examines whether a Turing machine can accept an infinite sequence of input.

### The Entscheidigungsproblem
Which problem was famously formulated by David Hilbert and aimed to find a procedure that could decide the truth of any mathematical statement?

A) P vs NP Problem.

B) Riemann Hypothesis.

--> C) The Entscheidigungsproblem.
Explanation: This was a challenge from David Hilbert that contains an algorithm that can answer every mathematical problem. This is undecidable because computers will give a yes/no answer after solving each input and there are infinite inputs.

D) Goldbach's Conjecture.

