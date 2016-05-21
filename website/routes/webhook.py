from website import app
from flask import request, jsonify
from website.utils.webhook import verify_hmac_hash, mail_report
import subprocess


@app.route("/ci-trigger", methods=['POST'])
def github_payload():
    signature = request.headers.get('X-Hub-Signature')
    data = request.data
    if verify_hmac_hash(data, signature):
        if request.headers.get('X-GitHub-Event') == "push":
            payload = request.get_json()
            if payload['commits'][0]['distinct']:
                try:
                    cmd_output = subprocess.check_output(
                        ['git', 'pull', 'origin', 'master'],)
                    return mail_report(str(cmd_output))
                except subprocess.CalledProcessError as error:
                    return mail_report(str(error.output))
            else:
                return -1

    else:
        return -2
