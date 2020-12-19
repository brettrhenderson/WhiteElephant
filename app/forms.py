from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField, SelectMultipleField, FloatField
from wtforms.validators import InputRequired, ValidationError
from flask_wtf.file import FileRequired, FileField
from flask import url_for