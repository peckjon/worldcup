from flask import render_template
from website import app
from utils import request


@app.route('/')
def index():
    today_matches = request.make_request('today')
    return render_template('index.html', todayMatches=today_matches)
