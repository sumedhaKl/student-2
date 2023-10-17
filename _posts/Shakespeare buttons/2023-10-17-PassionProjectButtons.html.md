<!DOCTYPE html>
<html>
<head>
    <title>Shakespearean Text Printer</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            color: #333;
        }
        h1 {
            color: #009688;
        }
        p {
            font-size: 18px;
        }
        button {
            background-color: #009688;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #007366;
        }
    </style>
</head>
<body>
    <h1>Shakespearean Text</h1>
    <p id="shakespeareText">Click the button to display Shakespearean text here.</p>
    <button id="printButton">Print Shakespeare</button>
    <img id="shakespeare-image" src="shakespeareimage.jpg" alt="Shakespeare" width="300" height="200">
    <script src="script.js"></script>
</body>
</html>
