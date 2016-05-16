import request as req
from flask_paginate import Pagination

PER_PAGE = 9


def paginate(arr, page, offset):
    if page < 0:
        page = 1
    start = (page - 1) * offset
    end = start + offset
    if len(arr) < end:
        end = len(arr) - 1
    return arr[start:end]


def paginate_data(req_type, order_by, page):
    order_by = 'asc' if order_by is None else order_by

    data = req.make_request({
        'type': req_type,
        'by_date': order_by
    })

    matches = paginate(data, page, PER_PAGE)

    pagination = Pagination(page=page,
                            total=len(data),
                            per_page=PER_PAGE,
                            record_name='matches',
                            css_framework='bootstrap3')

    return {
        'matches': matches,
        'pagination': pagination
    }
