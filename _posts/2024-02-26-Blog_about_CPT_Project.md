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
For our passion project, we made a mental health site for people to learn more about their mental health. 

### Overview of my Project

I made a memory game to test focus, memory, and recall. Users can flip cards to see if they match. Once the cards match, their image freezes and the user can continue to look for more matches.

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

<h1 id="component-b-video">Component B: Video</h1>
<p><a href="https://drive.google.com/file/d/18ltuPQsnjjsf6luTT-Vge0XbNTPG9IMV/view" class="button">Click here to view the video</a></p>

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
      <td>This is shown in the video when the cards are clicked which triggers code to check if they are a match.</td>
    </tr>
    <tr>
      <td>At least one aspect of the functionality of your program</td>
      <td>The card match can be identified quickly and the cards that do not match are flipped back in a short time. </td>
    </tr>
    <tr>
      <td>Output produced by program</td>
      <td>Once the cards are matched, then they remain frozen for the rest of the game while the user experiments with the remaining cards.</td>
    </tr>
    <tr>
      <td>My video does not have:</td>
      <td>The video does not include audio.</td>
    </tr>
    <tr>
      <td>My video is:</td>
      <td>Exactly 39 seconds long in the form of a .mp4 file and 8200 KB.</td>
    </tr>
  </tbody>
</table>