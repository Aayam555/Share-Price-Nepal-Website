from flask import Flask, jsonify
from share_price_nepal import get_price
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

share_price = get_price()


@app.route('/api/shares')
def shares_info():
    return jsonify(share_price)


app.run(debug=True)
