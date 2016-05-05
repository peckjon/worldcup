from flask import Flask
from routes import index as front

app = Flask(__name__, static_folder='static/public')

@app.route('/')
def index():
    return front.index()

def run():
    app.debug = True
    app.run(port=3000)
