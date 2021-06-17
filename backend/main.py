from flask import Flask, jsonify
from nepse_scraper import Nepse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = Nepse()

@app.route('/api/shares')
def shares_info():
    return jsonify(data.live_stock())


app.run(debug=True)
