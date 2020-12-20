from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField, BooleanField
from flask import url_for

class GuestsForm(FlaskForm):
    num = IntegerField('Units', validators=[], description='Concentration Units to use for axes/legend.', id='units')
    gavin = BooleanField('Is Gavin Playing?', id='gavin')
    name = StringField('name', description="Add Legend to plot.", id='legend')