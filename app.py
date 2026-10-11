from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("inicio.html")


@app.route("/estudiantes")
def estudiantes():
    lista = ["Ana Pérez", "Luis Gómez", "María Rojas"]
    return render_template("estudiantes.html", estudiantes=lista)


@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


if __name__ == "__main__":
    app.run(debug=True)
