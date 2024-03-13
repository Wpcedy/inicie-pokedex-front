# inicie-pokedex-front
Desafio Inicie - Pokedex - front

# Requisitos
- Node 20.11.0
- Docker

## Configurando

```sh
docker-compose build app
docker-compose up -d
```

Após configura você conseguirar testar o sistema chamando o localhost na porta 8001

```sh
http://localhost:8001
```

Caso o [back end](https://github.com/Wpcedy/inicie-pokedex-back/tree/main) seja iniciado em uma porta diferente do esperado
será necessario mudar no arquivo "src\app\service\api.service.ts" também.
