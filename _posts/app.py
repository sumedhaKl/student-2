from flask import Flask, flash, redirect, render_template, request, session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from tabledef import User

engine = create_engine('sqlite:///tutorial.db', echo=True)

app = Flask(__name__)
app.secret_key = os.urandom(12)

@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "Hello Boss! <a href='/logout'>Logout</a>"

@app.route('/login', methods=['POST'])
def do_admin_login():
    POST_USERNAME = str(request.form['username'])
    POST_PASSWORD = str(request.form['password'])

    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.username == POST_USERNAME, User.password == POST_PASSWORD)
    result = query.first()

    if result:
        session['logged_in'] = True
    else:
        flash('Wrong password!')

    return home()

@app.route("/logout")
def logout():
    session['logged_in'] = False
    return home()

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=4000)