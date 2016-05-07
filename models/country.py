from website import db


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Text)
    name = db.Column(db.Text)