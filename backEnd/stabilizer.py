from flask import Flask, jsonify
from flask_cors import CORS  
import json

app = Flask(__name__)
CORS(app) 

banco = r"\banco\db.json"

def carregar_dados():
    with open(banco, 'r') as arquivo:
        return json.load(arquivo)

def salvar_dados(dados):
    with open(banco, 'w') as arquivo:
        json.dump(dados, arquivo, indent=4)

@app.route('/gastos', methods=['DELETE'])
def excluir_gastos():
    dados = carregar_dados()

    if dados.get('gastos') and len(dados['gastos']) > 0:
        dados['gastos'].pop() 
        salvar_dados(dados)
        return jsonify({"message": "Último item de 'gastos' foi excluído!"}), 200
    else:
        return jsonify({"message": "Não há itens para excluir em 'gastos'!"}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
