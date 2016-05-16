from flask import render_template
from website import app
from website.utils import request as req
from website.utils.paginate import paginate_data
from flask import request
from flask.ext.paginate import Pagination

PER_PAGE = 9


@app.route('/previous')
@app.route('/previous/page/<page>')
def previous(page=1):
    page = int(page)
    by_date = request.args.get('by_date')

    data = paginate_data('past', by_date, page)

    return render_template('matches/past.html', pastMatches=data['matches'], pagination=data['pagination'])


@app.route('/tomorrow')
@app.route('/tomorrow/page/<page>')
def tomorrow(page=1):
    page = int(page)
    by_date = request.args.get('by_date')

    data = paginate_data('future', by_date, page)

    return render_template('matches/future.html', futureMatches=data['matches'], pagination=data['pagination'])
