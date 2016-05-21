from website import app
from flask import request
from website.utils.webhook import verify_hmac_hash, mail_report
import subprocess, logging
import git, os


@app.route("/ci-trigger")
def github_payload():
    g = git.cmd.Git(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
    signature = request.headers.get('X-Hub-Signature')
    data = request.data
    if verify_hmac_hash(data, signature):
        if request.headers.get('X-GitHub-Event') == "push":
            payload = request.get_json()
            if payload['commits'][0]['distinct']:
                try:
                    g.pull()
                    # return mail_report(str(cmd_output))
                    logging.info('Pull OK')
                except Exception as error:
                    # return mail_report(str(error.output))
                    logging.error(str(error))
            else:
                return -1

    else:
        return -2
