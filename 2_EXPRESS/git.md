# Somente na primeira configuração do computador
git config --global user.name "Seu nome"
git config --global user.email "seu@email"

# Somente no início do projeto
git init

# Sempre que uma atualização for feita no projeto
git add .
git commit -m "mensagem para o commit"
git push

# Sempre que for baixar o projeto em outro computador
git clone sitedoprojeto.git

# Sempre que for atualizar o projeto na máquina com feitas de outro computador
git pull