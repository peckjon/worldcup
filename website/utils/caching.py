from website import redis
import requests
import json


def cache(args, url):
    key = args['type'] + '_' + args['by_date']
    req_params = {
        'json': True,
        'by_date': args['by_date']
    }

    if redis.get(key) is None:
        result = requests.get(url, params=req_params).json()
        redis.set(key, json.dumps(result))

        return result
    else:
        return json.loads(redis.get(key).decode())  # Decode byte sequence into a string then parse it into json
