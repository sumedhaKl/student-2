from flask import render_template, request
from flask.cli import AppGroup
from flask_cors import CORS
from __init__ import app, db
from api.user import user_api
from api.player import player_api
from model_users import initUsers
from model_players import initPlayers
from projects.projects import app_projects

# Enable CORS for your app
cors = CORS(app)

# Register URIs
app.register_blueprint(user_api)
app.register_blueprint(player_api)
app.register_blueprint(app_projects)

# Error handler for 404
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# Default route
@app.route('/')
def index():
    return render_template("index.html")

# Table route
@app.route('/table/')
def table():
    return render_template("table.html")

# Before each request, set CORS origins
@app.before_request
def before_request():
    allowed_origin = request.headers.get('Origin')
    if allowed_origin in ['http://localhost:4100', 'http://127.0.0.1:4100', 'https://nighthawkcoders.github.io']:
        CORS(app, origins=allowed_origin)

# Create an AppGroup for custom commands
custom_cli = AppGroup('custom', help='Custom commands')

# Define a command to generate data
@custom_cli.command('generate_data')
def generate_data():
    initUsers()
    initPlayers()

# Register the custom command group with the Flask application
app.cli.add_command(custom_cli)

# Run the application on the development server
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8086)