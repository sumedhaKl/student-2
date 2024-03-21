---
toc: true
commments: true
layout: post
title: MCQ Reflections
type: blogs
courses: {compsci: {week: 7}}
---

Corrections:

I got a 22/70 (I only attempted 47)

Question 3. Values assigned to the first and second

The correct answer was first = 100, second = 100

I didn't pay attention to the values of the code segments. Specifically, I didn't see that second was assigned to first, changing the value to 100. 

Question 7. Move piece on game board

The correct answer was 4

I wasn't able to properly keep track of how much the counter increased in order to figure out the accurate value. 

Question 8. Benefit of redundancy

The correct answer was Redundancy often allows messages to be sent on the network even if some network devices or connections have failed

I confused the meaning of redundancy in English with the meaning of redundancy in Computer Science.

Question 9. Digital representation of audio signal

This was the correct answer: An analog audio signal is measured at regular intervals. Each measurement is stored as a sample, which is represented at the lowest level as a sequence of bits.

I thought that audio signal could be represented as a set of instructions because computers have to be given very specific instructions but it is true that they work on binary.

Question 12. Move robot to gray squares 

This was the correct answer:

IF(CAN_MOVE(left))

{

ROTATE_LEFT()

}

MOVE_FORWARD()

I didn't think about what code would actually allow the robot to turn left when it was supposed to. I only thought about the main code.

Question 14. Error in isIncreasing procedure

This was the correct answer: Lines 8 and 12 should be interchanged.

By following my answer (B), the code will actually not end up working properly because the true/false statements weren't in their correct spots. But, after correcting the code,it will work because the true/false statements have been interchanged, allowing the code to work correctly.

Question 16. Consequence of using Creative Commons

This was the correct answer: Individuals can freely distribute or use the contents of the e-book without needing to obtain additional permissions from the author.

I'd forgotten what a no rights reserved Creative Commons License was and thought it was an all rights reserved one instead. In a no rights reserved Creative Commons License, users can use any part of someone else's work without needing to give credit to the original author. 

Question 17. Remove connections to disconnect devices B and C

This was the correct answer: 4

I didn't see that there was a connection between B-A-C and only saw three connections to remove instead of 4. 

Question 18. True statement about the network

This was the correct answer: If devices B and F fail, then device A will not be able to communicate with device G.

I thought the question was asking about individual devices, not connections, so I only saw 4 other devices the connections between A and G could go through. 

Question 19. Use of weak passwords

This was the correct answer: Unauthorized individuals can use data mining and other techniques to guess a user’s password.

I didn't read the question correctly and thought it was about encryption and decryption instead of weak passwords. I also didn't remember what data mining was.

Question 20. Effect of limited bandwidth

This was the correct answer: Guest users will be restricted in the maximum amount of data that they can send and receive per second.

I did not know that fault tolerance is regardless of bandwith. 

Question 23. True statement about the Internet

This was the correct answer: The Internet is designed to scale to support an increasing number of users.

I didn't know the Internet was scalable nor did I remember what scalable meant. I thought about data traveling through the Internet getting split into packets instead.

Question 25. Result of iteration statements

This was the correct answer: The procedure returns the sum of the integers from 1 to n.

I thought the program will not end because the value of n is not defined.

Question 29. Value displayed when j is 3 and k is 4

This was the correct answer: 12

I thought the program will only loop once and thought it would stop when the value was 7.

Question 32. Statement about public key encryption

This was the correct answer: Public key encryption enables parties to initiate secure communications through an open medium, such as the Internet, in which there might be eavesdroppers.

I thought anyone could access public keys, making them unsafe.

Question 33. Efficiency of driving route algorithms

This was the correct answer: Algorithm II uses a heuristic approach to provide an approximate solution in reasonable time.

I didn't remember the difference between algorithmic and heuristic. 

Question 36. Why information is hard to remove from Internet

This was the correct answer: All personal information is stored online using authentication measures, making the information hard to access.

I wasn't sure what the least likely reason personal info was hard to remove was. I didn't seem to understand where and how so much personal information was stored and how to properly remove it. 

Question 38. Situation where simulation is unsuitable

This was the correct answer: When the solution to the problem requires real-world data inputs that are continually measured at regular intervals.

I didn't really know much about simulations, so I didn't know when it would be best to use them, nor did I know about any requirements for the simulations to work. 

Question 39. Number of bits needed for item inventory

This was the correct answer: 7

I didn't think about the choices being values that could work if 2 was raised to that number as a power. I didn't remember that binary is related to powers of 2. 

Question 41. Use of crowdsourcing in online games

This was the correct answer: The company allows individual players to endorse fellow players based on courteous interactions. Once a player receives enough endorsements, the player is given free rewards that can be used during gameplay.

I hadn't studied crowdsourcing in a long time, so I wasn't sure which choice would involve the most people. 

Question 42. Iterate over integerList

This was the correct answer: 3

I didn't use MOD 2 properly because I didn't think about it involving odd and even values. I counted even values when the question was asking about odd values. 

Question 44. Storing real numbers values using an approximation

This was the correct answer: The account balances are represented using a fixed number of bits, resulting in round-off errors.

I couldn't tell the difference between round-off and overflow errors. Round off errors result in imprecise values. 

Question 45. Using botStepper procedure

This was the correct answer: The figure presents three lines of code. Throughout the code there are nested blocks of code, as follows. Line 1: [begin block] botStepper [begin block] 2 [end block] [end block] Line 2: [begin block] MOVE_FORWARD [end block] Line 3: [begin block] botStepper [begin block] 3 [end block] [end block]

My choice featured too many numbers which ended up moving the robot off the grid. I chose this because I couldn't figure out the right numbers to move the robot onto the gray square.

Question 46. Filtering and sorting restaurant data

This was the correct answer: I, II, and III

I couldn't see the sequences, so I just guessed. 

Question 47. Expression to count restaurants

This was the correct answer: (avgRating ≥ 4.0) AND ((prcRange = "lo") OR (prcRange = "med"))

My answer causes an AND gate to be present where the price range is (avgRating ≥ 4.0) OR (prcRange = "lo") and (prcRange = "med") which is physically impossible because then the code will never work. 

Questions 48-70. Did not attempt