from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'seu_secreto_aqui'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# Modelo de dados para o usuário
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    is_barbeiro = db.Column(db.Boolean, default=False)
    horarios_disponiveis = db.Column(db.String(200))  # Isso pode ser uma string que armazena os horários disponíveis

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/barbeiro_admin", methods=['GET', 'POST'])
def barbeiro_admin():
    # Verifique se o usuário está autenticado como barbeiro
    if not current_user.is_authenticated or not current_user.is_barbeiro:
        # Redirecione para uma página de login ou exiba uma mensagem de erro
        flash('Acesso não autorizado. Faça login como barbeiro.', 'danger')
        return redirect(url_for('login'))

    if request.method == 'POST':
        # Receba os horários disponíveis enviados pelo formulário
        horarios_disponiveis = request.form.getlist('horarios_disponiveis')

        # Salve os horários disponíveis no banco de dados associados ao barbeiro
        current_user.horarios_disponiveis = ', '.join(horarios_disponiveis)
        db.session.commit()

        flash('Horários disponíveis atualizados com sucesso!', 'success')
        return redirect(url_for('barbeiro_admin'))

    return render_template('admin.html')

if __name__ == '__main__':
    app.run(debug=True)
