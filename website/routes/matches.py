from flask import render_template
from website import app
from website.utils import request as req
from website.utils.paginate import paginate
from flask import request
from flask.ext.paginate import Pagination

PER_PAGE = 9


@app.route('/previous')
@app.route('/previous/page/<page>')
def previous(page=1):
    page = int(page)
    by_date = request.args.get('by_date')

    order_by = 'asc' if by_date is None else by_date

    data = req.make_request({
        'type': 'past',
        'by_date': order_by
    })

    previous_matches = paginate(data, page, PER_PAGE)

    pagination = Pagination(page=page,
                            total=len(data),
                            per_page=PER_PAGE,
                            record_name='matches',
                            css_framework='bootstrap3')

    return render_template('matches/past.html', pastMatches=previous_matches, pagination=pagination)


@app.route('/tomorrow')
@app.route('/tomorrow/page/<page>')
def tomorrow(page=1):
    page = int(page)
    by_date = request.args.get('by_date')

    order_by = 'asc' if by_date is None else by_date

    data = req.make_request({
        'type': 'future',
        'by_date': order_by
    })

    future_matches = paginate(data, page, PER_PAGE)

    pagination = Pagination(page=page,
                            total=len(data),
                            per_page=PER_PAGE,
                            record_name='matches',
                            css_framework='bootstrap3')

    return render_template('matches/future.html', futureMatches=future_matches, pagination=pagination)
