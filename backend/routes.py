from flask import Flask,jsonify,request
from controllers import chat_controller

app = Flask(__name__)


#to generate a viral thread
@app.route("/getThread")
def get_thread():
    return jsonify(chat_controller)



app.run(debug=True)