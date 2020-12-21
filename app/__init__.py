from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.visitor_count = 12345

from app import routes