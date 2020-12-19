from flask import render_template, request, jsonify, make_response, url_for
from app import app
import logging
import os

log = logging.getLogger(__name__)
log.setLevel(logging.DEBUG)

@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html', title="Home")