from models.banco import carregar_dados, salvar_dados

"""
Exclui o último item da lista de 'gastos'.
"""
def excluir_ultimo_gasto():
    dados = carregar_dados()

    if dados.get('gastos') and len(dados['gastos']) > 0:
        dados['gastos'].pop()  
        salvar_dados(dados)
        return {"message": "Último item de 'gastos' foi excluído!"}, 200
    else:
        return {"message": "Não há itens para excluir em 'gastos'!"}, 400
