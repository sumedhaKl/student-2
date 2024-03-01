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

## Overview of my Project

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
      <td><img src="Screenshot (197).png"/> - The code above uses JS code to allow a user to click on a card to reveal the image below it. This allows the user to see whether the images on the two cards match or not.</td>
    </tr>
    <tr>
      <td>Use of at least one list (or other collection type) to represent a collection of data that is stored and used to manage program complexity and help fulfill the user’s purpose.</td>
      <td><img src="Screenshot (198).png"/>- The images on the cards are stored in the list imagePaths in the scripts section of the body of the HTML code. This allows the computer to find the paths to make all the images visible when code is used to refer to the imagePaths list so there won't be unnecessary code for every single image. This helps fulfill the user's purpose by making it easier to see where each pair of matching images are.</td>
    </tr>
    <tr>
      <td>At least one procedure that contributed to the program’s intended purpose where you have defined: the name, return type, one or more parameters.</td>
      <td><img src="Screenshot (197).png"/>-The submitQuote function is a procedure that contributes to the program’s purpose by handling the submission of a quote. It has no return type. No explicit parameters are defined in the function signature. The function relies on accessing the values of the HTML elements with IDs: ‘quote’, ‘quote-author’, and ‘opinion’ to gather user input.</td>
    </tr>
    <tr>
      <td>An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure</td>
      <td><img src="Screenshot (197).png"/> -Here, the code constructs a quoteObject by gathering data from the input fields (quote, quoteAuthor, and opinion). This is a sequential process where the data is organized into an object for further use. <img src="/pb2csp/images/blog5.png" alt="Alt text" />- Before submitting the quote, the code checks if any of the required fields (quote, quoteAuthor, opinion) are empty. This is a selection mechanism that ensures all fields are filled before proceeding with the submission. If any field is empty, it triggers an alert asking the user to fill in all fields. The image below (using fetch function to call to the backend) uses the Fetch API to make an asynchronous HTTP request to the server. It sends the quoteObject to the server for storage. This is Iteration using Fetch API (Asynchronous Iteration).</td>
    </tr>
    <tr>
      <td>Calls to your student-developed procedure</td>
      <td><img src="Screenshot (197).png"/>- This part of the code represents the call to my backend for submitting a quote. The submitQuote function uses the Fetch API to send the quoteObject to the server.</td>
    </tr>
    <tr>
      <td>Instructions for output (tactile, audible, visual, or ) based on input and program functionality</td>
      <td><img src="Screenshot (197).png"/> - This part of the code employs a conditional structure where, if the server response is successful (.then), an alert displays the received message; otherwise (.catch), an error message is alerted, ensuring appropriate user feedback based on the server. Provides visual output in the form of alerts, notifying the user whether the quote submission was successful or if an error occurred.</td>
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