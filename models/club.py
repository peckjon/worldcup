from website import db


class Club(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'))