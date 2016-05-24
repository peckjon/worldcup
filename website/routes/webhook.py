import logging
import subprocess
import os
from flask import request
from website import app
from website.utils.webhook import verify_hmac_hash


@app.route("/ci-trigger", methods=['POST'])
def github_payload():
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
    signature = request.headers.get('X-Hub-Signature')
    data = request.data
    if verify_hmac_hash(data, signature):
        if request.headers.get('X-GitHub-Event') == "push":
            payload = request.get_json()
            if payload['commits'][0]['distinct']:
                try:
                    cmd_output = subprocess.call(base_dir + '/build/build.py')
                    # return mail_report(str(cmd_output))
                    logging.info('Pull OK')
                except Exception as error:
                    # return mail_report(str(error.output))
                    logging.error(str(error))
            else:
                return -1

    else:
        return -2
