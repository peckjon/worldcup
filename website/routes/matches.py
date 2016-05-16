from flask import render_template
from website import app
from website.utils import request as req
from website.utils.paginate import paginate
from flask import request
from flask.ext.paginate import Pagination

PER_PAGE = 9


@app.route('/previous')
def previous():
    try:
        page = int(request.args.get('page', 1))
    except ValueError:
        page = 1

    data = req.make_request('past')

    previous_matches = paginate(data, page, PER_PAGE)

    pagination = Pagination(page=page,
                            total=len(data) - PER_PAGE,  # off by one, how does it work
                            per_page=PER_PAGE,
                            record_name='matches',
                            css_framework='bootstrap3')

    return render_template('matches/past.html', pastMatches=previous_matches, pagination=pagination)


@app.route('/tomorrow')
def tomorrow():
    try:
        page = int(request.args.get('page', 1))
    except ValueError:
        page = 1

    data = req.make_request('future')

    future_matches = paginate(data, page, PER_PAGE)

    pagination = Pagination(page=page,
                            total=len(data) - PER_PAGE,  # off by one, how does it work
                            per_page=PER_PAGE,
                            record_name='matches',
                            css_framework='bootstrap3')

    return render_template('matches/future.html', futureMatches=future_matches, pagination=pagination)
