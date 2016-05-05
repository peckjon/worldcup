from flask import Flask

app = Flask(__name__, static_folder='static/public')

import api.index
import api.matches
import custom_filters
