from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index ():
    return render_template("sitio/index.html")

@app.route('/opusto.html')
def opusto ():
    return render_template("sitio/opusto.html")

if __name__ == "__main__":    
    app.run(debug=True)

