from flask import Flask, render_template

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/<string:animal>')
@app.route('/')
def index(animal="None"):
    print(animal)
    return render_template('index.html', animal=animal)