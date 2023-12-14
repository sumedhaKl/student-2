---
toc: true
comments: true
layout: post
title: Computing Bias
courses: { compsci: {week: 16} }
type: hacks
---

## Introduction to Computing Bias
A brief introduction to computing biases is that human biases are usually incorporated into algorithms or data. If this is confusing to understand, here is one example. When you are browsing Netflix and look at the different categories, you see that typically there are a bunch of Netflix exclusives being displayed more than non-exclusives. This is a form of computing bias as this would benefit Netflix, as the movie or show will never leave Netflix. So, if you get hooked on that show, then you will inevitably keep paying the Netflix subscription.

## Explicit Data vs Implicit Data
Many software apps such as Netflix mentioned previously collect a lot of data. There are two types of data that apps collect and they are Explicit and Implicit.

### Explicit:
- Examples:
  - Name
  - Address

### Implicit:
- Examples(Netflix):
  - What you watch
  - When you watched
  - Engagement(Watch Retention)
  - Types of movies or shows

## Popcorn Hack 1
Name a software app you know about and name some explicit and some implicit data that they collect from you, the user.

Answer: Amazon
Explicit data: Name, address, credit card number
Implicit data: What you bought, when you bought it, what you searched for, what type of things you commonly buy

## Loan Company Example
Another bias can be observed in trends. In the context of an app that collects information for loan officers to help them decide who the best candidate is to give a loan to, trends, for example, could show that a certain age group is comprised of better candidates for a loan. This bias is based on trends and data, and it could be beneficial to the loan officers, preventing them from losing money on loans and avoiding complications with the loanee. However, this could be harmful to the candidate applying for the loan because they might be turned away simply because they don't qualify within a certain age or race bracket.

## Example #2
- Movies
  - A movie such as Despicable Me has more of a demographic for younger people. Even though this bias is beneficial because it is content that is specific to someone's wants.
  - Movies such as Star Wars are more geared toward older people as their target audience is contrary to a cartoon.
- Video Games
  - Casual Audience: These games have a bias towards an audience that wants to play casually
    - Candy Crush
    - Minecraft
  - Sweaty Games: These have more of a bias for people that want to get better and play competitively
    - Counter Strike
    - Call of Duty

## Popcorn Hack 2
Give an example of a movie, show, or video game, or even a certain software that has a certain bias and what the bias is towards.

Answer: Jeopardy! (the show); Has a bias towards brainy people who want to watch it, hoping to get new knowledge as they test their current knowledge.

## Mitigating Bias in Algorithms

To address human biases, programmers must work towards minimizing bias in algorithms used for computing innovations. Software should aim for neutrality, considering all perspectives and actively rejecting inherent human biases.

Key considerations during program development:

- Identify potential sources of bias.
- Assess whether your program is amplifying or intentionally excluding certain elements.
- Solicit feedback from a diverse and widespread group of individuals.
- Contemplate how people who differ from you might utilize your developments.

## Questions to Ask About Bias

- In the example of the Loan Company, the bias was unintentional but could be potentially excluding fit candidates. In the example of Netflix, the bias of adding exclusives in the front of categories is intentional but not harmful for anyone. This leads to some questions to ask if you encounter bias in software.

- Questions:
  - Is it enhancing or intentionally excluding?
  - Is the bias intentionally harmful or hateful?
  - Are you receiving feedback from a wide variety of people?

Using these questions, software developers are able to reduce harmful bias in algorithms and data.

## Homework Hacks:
The implementation of a predictive policing algorithm in a city has raised concerns regarding potential biases, leading to disproportionate targeting of specific neighborhoods. This over-policing could result in civil rights violation. Your task is to propose a solution to mitigate this bias and explain the method you'd use to remove computing bias. Make a full paragraph that is at least 4 sentences.

I will first identify the reasons for over-policing of specific neighborhoods. I will base the algorithm on actual data, such as robberies or car thefts. I will figure out if the algorithm is based on stereotypes and if it intentionally harms specific groups of people. To get feedback from other people living in the city, I will post flyers in all neighborhoods and stand outside stores, telling all who will listen about what I am trying to do. I will then use this data to base the algorithm's decisions on policing. This will give me a larger sample size and will help me in removing bias.

Due: Friday night to Jake Shim