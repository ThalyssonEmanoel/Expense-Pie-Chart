from flask import Flask, jsonify, request
from flask_cors import CORS  
import json

app = Flask(__name__)
CORS(app)

banco = r"banco\db.json"

def carregar_dados():
    with open(banco, 'r') as arquivo:
        return json.load(arquivo)

def salvar_dados(dados):
    with open(banco, 'w') as arquivo:
        json.dump(dados, arquivo, indent=4)

@app.route('/gastos', methods=['GET', 'POST', 'DELETE'])
def gastos():
    if request.method == 'POST':
        novo_gasto = request.get_json()
        dados = carregar_dados()
        if 'gastos' not in dados:
            dados['gastos'] = []
        dados['gastos'].append(novo_gasto)
        salvar_dados(dados)
        return jsonify({"message": "Cadastrado!"}), 201
    
    elif request.method == 'DELETE':
        dados = carregar_dados()
        if dados.get('gastos') and len(dados['gastos']) > 0:
            dados['gastos'].pop()  
            salvar_dados(dados)
            return jsonify({"message": "Excluído!"}), 200
        else:
            return jsonify({"message": "Erro!"}), 400

    elif request.method == 'GET':
        dados = carregar_dados()
        return jsonify(dados.get('gastos', []))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3002)
