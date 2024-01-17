from flask import Flask, render_template, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://sergis1:root@localhost/CyberSecWeb'

db = SQLAlchemy(app)
migrate = Migrate(app, db, render_as_batch=True)


class Mensaje(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(50), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

from flask import jsonify

@app.route('/enviar_mensaje', methods=['POST', 'GET'])
def enviar_mensaje():
    if request.method == 'POST':
        data = request.json  # Usa request.json en lugar de request.form
        nombre = data.get('nombre')
        correo = data.get('correo')
        mensaje = data.get('mensaje')

        if nombre is None or correo is None or mensaje is None:
            return jsonify({'status': 'error', 'message': 'Datos inválidos'})

        nuevo_mensaje = Mensaje(nombre=nombre, correo=correo, mensaje=mensaje)
        db.session.add(nuevo_mensaje)
        try:
            db.session.commit()
            return jsonify({'status': 'success'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)})

    return render_template('contacto.html')




if __name__ == '__main__':
    app.run(debug=True)