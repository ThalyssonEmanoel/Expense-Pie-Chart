import json

banco = r"backEnd\banco\db.json"

def carregar_dados():
    with open(banco, 'r') as arquivo:
        return json.load(arquivo)

def salvar_dados(dados):
    with open(banco, 'w') as arquivo:
        json.dump(dados, arquivo, indent=4)

def verificar_e_apagar_gastos():
    dados = carregar_dados()

    dados['gastos'] = []

    salvar_dados(dados)
    print("Todos os itens de 'gastos' foram apagados.")

if __name__ == "__main__":
    verificar_e_apagar_gastos()
