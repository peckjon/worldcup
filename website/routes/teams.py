from website.models.player import Player
from website.models.country import Country

from flask import render_template
from website import app


@app.route('/team/list')
def team_list():
    subq = Player.query.with_entities(Player.country_id).subquery()
    teams = Country.query.order_by(Country.name).filter(Country.id.in_(subq)).all()
    return render_template('teams/list.html', teams=teams)


@app.route('/team/<team_code>')
def team_view(team_code):
    team = Country.query.filter_by(code=team_code).first_or_404()
    return render_template('teams/view.html', team=team)
