import time
from flask import Flask #there is an issue with my flask installation

app = Flask(__name__)
@app.route('/api/time')
def get_current_time():
	return {'time': time.time()}