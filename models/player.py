from website import db


class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fifaDisplayName = db.Column(db.Text)
    firstName = db.Column(db.Text)
    lastName = db.Column(db.Text)
    shirtName = db.Column(db.Text)
    dateOfBirth = db.Column(db.Text)
    number = db.Column(db.Integer)
    height = db.Column(db.Integer)

    country_id = db.Column(db.Integer, db.ForeignKey('country.id'))
    position_id = db.Column(db.Integer, db.ForeignKey('position.id'))
    club_id = db.Column(db.Integer, db.ForeignKey('club.id'))
