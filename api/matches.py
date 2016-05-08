from flask import render_template
from website import app
from utils import request


@app.route('/previous')
def previous():
    previous_matches = request.make_request('past')
    return render_template('matches/past.html', pastMatches=previous_matches)


@app.route('/tomorrow')
def tomorrow():
    future_matches = request.make_request('future')
    return render_template('matches/future.html', futureMatches=future_matches)