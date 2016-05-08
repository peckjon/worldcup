from . import app
from arrow import get


@app.template_filter('date')
def date(string, format):
    return get(string).format(format)
