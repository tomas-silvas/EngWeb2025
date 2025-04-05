import json
import re

# Abrir o arquivo JSON
with open('dataset_inicial.json', 'r') as file:
    data = json.load(file)

# Função para converter strings de listas para listas reais usando regex
def convert_to_list(string):
    # Usar regex para encontrar os itens dentro de colchetes e separá-los por vírgulas
    pattern = r"\[([^\]]*)\]"
    match = re.search(pattern, string)
    if match:
        # Dividir os itens encontrados por vírgulas e remover espaços extras
        return [item.strip().strip("'").strip('"') for item in match.group(1).split(",")]
    return string  # Retornar a string original se não for uma lista válida

# Processar cada item no JSON
for item in data:
    if 'genres' in item and isinstance(item['genres'], str):
        item['genres'] = convert_to_list(item['genres'])
    if 'characters' in item and isinstance(item['characters'], str):
        item['characters'] = convert_to_list(item['characters'])
    if 'awards' in item and isinstance(item['awards'], str):
        item['awards'] = convert_to_list(item['awards'])
    if 'setting' in item and isinstance(item['setting'], str):
        item['setting'] = convert_to_list(item['setting'])
    if 'ratingsByStars' in item and isinstance(item['ratingsByStars'], str):
        item['ratingsByStars'] = convert_to_list(item['ratingsByStars'])
    if 'author' in item and isinstance(item['author'], str):
        # Verificar se há vírgulas no campo autor e separar em uma lista
        if ',' in item['author']:
            item['author'] = [author.strip() for author in item['author'].split(',')]
        else:
            # Caso contrário, converter para uma lista com um único autor
            item['author'] = [item['author']]

# Salvar o JSON atualizado
with open('livros.json', 'w') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

print("Conversão concluída com sucesso!")