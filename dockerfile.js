# Imagem base Node.js
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor porta usada pela aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/app.js"]
