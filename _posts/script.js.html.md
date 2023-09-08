---
toc: true
comments: false
layout: post
title: ChatGPT button
description: A button used to instantly access Chat GPT
type: hacks
courses: { compsci: {week: 3} }
---
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.querySelector('a[href="https://chat.openai.com"]');
    
    chatButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert('You clicked the ChatGPT button. For Science Olympiad details, please visit the OpenAI ChatGPT service.');
    });
});