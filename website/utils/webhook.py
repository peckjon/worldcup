import hashlib
import hmac
from website import app
from flask_mail import Mail, Message


def mail_report(body):
    mail = Mail(app)
    msg = Message('Deploy log', recipients=[app.config.get('MAIL_DEFAULT')])
    msg.body = body
    mail.send(msg)


def verify_hmac_hash(data, signature):
    github_secret = bytes(app.config.get('GITHUB_SECRET'), 'UTF-8')
    mac = hmac.new(github_secret, msg=data, digestmod=hashlib.sha1)
    return hmac.compare_digest('sha1=' + mac.hexdigest(), signature)
