from flask import Flask
from flask.ext.redis import FlaskRedis
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='static/public')

app.config.from_pyfile('../config/config.cfg')

db = SQLAlchemy(app)
redis = FlaskRedis(app)

import website.routes.index
import website.routes.matches
import website.routes.clubs
import website.routes.teams

import custom_filters

import models.country
import models.club
import models.position
import models.player