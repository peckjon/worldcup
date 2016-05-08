from website import redis
import requests
import json


def cache(key, url):
    if redis.get(key) is None:
        result = requests.get(url, params={'json': True}).json()
        redis.set(key, json.dumps(result))

        return result
    else:
        return json.loads(redis.get(key))
