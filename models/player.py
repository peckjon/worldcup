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
    club_id = db.Column(db.Integer, db.ForeignKey('club.id'))
    position_id = db.Column(db.Integer, db.ForeignKey('position.id'))

    country = db.relationship('Country', backref='players')
    club = db.relationship('Club', backref='players', lazy='joined')
    position = db.relationship('Position', lazy='joined', order_by=position_id)