from flask import Blueprint, jsonify
from models.banco import carregar_dados, salvar_dados

gastos_bp = Blueprint('gastos', __name__)

@gastos_bp.route('/gastos', methods=['DELETE'])
def excluir_gastos():
    """Exclui o último item da lista de 'gastos'."""
    dados = carregar_dados()

    print("Dados antes da exclusão:", dados)  
    
    if dados.get('gastos') and len(dados['gastos']) > 0:
        dados['gastos'].pop()  
        salvar_dados(dados)
        print("Dados após a exclusão:", dados)  
        return jsonify({"message": "Último item de 'gastos' foi excluído!"}), 200
    else:
        print("Nenhum item encontrado para exclusão.")
        return jsonify({"message": "Não há itens para excluir em 'gastos'!"}), 400
