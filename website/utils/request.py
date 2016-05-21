from .caching import cache


def make_request(arg):
    req_type = arg['type']
    url = ''
    if req_type == 'today':
        url = 'http://worldcup.sfg.io/matches/today'
    elif req_type == 'past':
        url = 'http://worldcup.sfg.io/matches'
    elif req_type == 'future':
        url = 'http://worldcup.sfg.io/matches/tomorrow'

    return cache(arg, url)
