# Imagem base leve
FROM alpine:3.18

# Diretório de trabalho
WORKDIR /app

# Criar arquivo de build simulado
RUN echo "Aplicação simulada - build em $(date)" > build.txt

# Expor porta apenas para fins de teste
EXPOSE 3000

# Comando para manter o container rodando
CMD ["sh", "-c", "while true; do sleep 3600; done"]
