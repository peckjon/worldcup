from website import db


class Position(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.Text)
    name = db.Column(db.Text)
