from flask import Flask

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index(animal="None"):
    print(animal)
    return app.send_static_file('index.html')

# TODO: Handle other potential paths, making sure we always return index.html
