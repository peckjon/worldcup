import requests

def make_request(arg):
    url = ''
    if arg == 'today':
        url = 'http://worldcup.sfg.io/matches/today'
    elif arg == 'past':
        url = 'http://worldcup.sfg.io/matches'
    elif arg == 'future':
        url = 'http://worldcup.sfg.io/matches/tomorrow'

    return requests.get(url, params={'json': True}).json()