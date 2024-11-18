import json

banco = r"banco\db.json"

def carregar_dados():
    """Carrega os dados do banco (db.json)."""
    try:
        with open(banco, 'r') as arquivo:
            return json.load(arquivo)
    except FileNotFoundError:
        return {"gastos": []}

def salvar_dados(dados):
    """Salva os dados no arquivo db.json."""
    with open(banco, 'w') as arquivo:
        json.dump(dados, arquivo, indent=4)
