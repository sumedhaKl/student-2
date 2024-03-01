---
toc: true
comments: true
layout: post
title: CPT Project
description: Explanation of CPT project structure and overview
type: tangibles
courses: { compsci: {week: 8} }
---
## CPT Project

### Overview of my Project

For our passion project, we made a mental health site for people to learn more about their mental health. 

<table>
  <thead>
    <tr>
      <th>College Board Requirements</th>
      <th>My work</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Instructions for input from one of the following: the user, a device, an online data stream, a file</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (197).png"/> - The code above uses JS code to allow a user to click on a card to reveal the image below it. This allows the user to see whether the images on the two cards match or not.</td>
    </tr>
    <tr>
      <td>Use of at least one list (or other collection type) to represent a collection of data that is stored and used to manage program complexity and help fulfill the user’s purpose.</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (198).png"/>- The images on the cards are stored in the list imagePaths in the scripts section of the body of the HTML code. This allows the computer to find the paths to make all the images visible when code is used to refer to the imagePaths list so there won't be unnecessary code for every single image. This helps fulfill the user's purpose by making it easier to see where each pair of matching images are.</td>
    </tr>
    <tr>
      <td>At least one procedure that contributed to the program’s intended purpose where you have defined: the name, return type, one or more parameters.</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (199).png"/>-This part of the code defines each aspect of the memory game card. The cards grid is defined, along with the card itself, the image on the front, and the image on the back.</td>
    </tr>
    <tr>
      <td>An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (200).png"/> -This shows selection when the code checks whether the number of clicked cards is two and selecting only those cards to check for a match. <img src="{{ site.baseurl }}/images/Screenshot (201).png"/>- This shows iteration when the code checks if the images on the cards match. If not, the cards flip back and the user chooses two different cards. If the images match, the cards are frozen and the user looks for another match.</td>
    </tr>
    <tr>
      <td>Calls to your student-developed procedure</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (202).png"/>- This code represents my call (document.getElementByID("cards-grid")) to get cards from the linked path and tries to initialize the memory game. If it is unable to do so, an error will pop up, saying that there was an error initializing the memory game.</td>
    </tr>
    <tr>
      <td>Instructions for output (tactile, audible, visual, or ) based on input and program functionality</td>
      <td><img src="{{ site.baseurl }}/images/Screenshot (201).png"/> - This part of the code freezes the matching cards after the user clicks on them. This is a visual output to show the user that a match has been made and that they should click on more cards to find another match.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Collegeboard Requirements</th>
      <th>My Video</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input to program</td>
      <td>This is highlighted in the video when we click on the quote repository feature and enter the information. This information (the quote, quote author, and quote opinion) is entered accordingly at the beginning of the video.</td>
    </tr>
    <tr>
      <td>At least one aspect of the functionality of your program</td>
      <td>There is a quote storage where you can view the quotes that you wrote up and look back on some influential quotes and the opinions that you had on them. This showcase is demonstrated in the video.</td>
    </tr>
    <tr>
      <td>Output produced by program</td>
      <td>Once input is entered and submitted, there is an output/popup which lets you know if the quote has been submitted successfully or not. When you redirect to the quote showcase, the input, if successfully entered, will be saved as a result that you can refer back to.</td>
    </tr>
    <tr>
      <td>My video does not have:</td>
      <td>The video does not display any other feature or its code and does not include a background voice narration.</td>
    </tr>
    <tr>
      <td>My video is:</td>
      <td>Exactly 1 minute long in the form of a .mp4 file and 5.60 GB.</td>
    </tr>
  </tbody>
</table>