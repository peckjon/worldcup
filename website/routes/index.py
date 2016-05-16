from flask import render_template
from website import app
from website.utils import request


@app.route('/')
def index():
    today_matches = request.make_request({
        'type': 'today',
        'by_date': 'asc'
    })
    return render_template('index.html', todayMatches=today_matches)
