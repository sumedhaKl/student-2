from flask import Flask

app = Flask(__name__)

@app.route("/home/sumi/vscode/student-2/student-2/_posts/bulb_off.png")
def hello_world():
    return "<p>Hello, World!</p>"

