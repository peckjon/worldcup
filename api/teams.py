from website import app
from models.country import Country
from models.player import Player
from flask import render_template


@app.route('/team/list')
def team_list():
    teams = Country.query.filter(Player.country_id.isnot(None)).all()
    print str(Country.query.filter(Player.country_id.isnot(None)))
    return render_template('teams/list.html', teams=teams)


@app.route('/team/view/<team_code>')
def team_view(team_code):
    team = Country.query.filter_by(code=team_code).first_or_404()
    return render_template('clubs/view.html', team=team)
