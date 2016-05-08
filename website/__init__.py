from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.ext.redis import FlaskRedis

app = Flask(__name__, static_folder='static/public')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../data/db.worldcup.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['REDIS_URL'] = 'redis://localhost:6379/0'

db = SQLAlchemy(app)
redis = FlaskRedis(app)

import api.index
import api.matches
import api.clubs
import api.teams

import custom_filters

import models.country
import models.club
import models.position
import models.player