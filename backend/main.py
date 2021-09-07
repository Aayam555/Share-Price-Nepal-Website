from flask import Flask, jsonify
from share_scraper import Share
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = Share()

@app.route("/api/livestock")
def live_stock():
    return jsonify(data.live_stock())

@app.route("/api/todayshareprice")
def today_share_price():
    return jsonify(data.today_share_price())

@app.route("/api/events")
def events():
    return jsonify(data.events())

app.run(host="0.0.0.0")
