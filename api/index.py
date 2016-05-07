from flask import render_template
from website import app
from utils import request
from models.country import Country


@app.route('/')
def index():
    today_matches = request.make_request('today')
    users = Country.query.all()
    print users
    return render_template('index.html', todayMatches=today_matches)
