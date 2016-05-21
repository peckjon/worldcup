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
import website.routes.error_handlers

import website.custom_filters

import website.models.country
import website.models.club
import website.models.position
import website.models.player
