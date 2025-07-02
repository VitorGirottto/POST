# ⚔️ Central de Desenvolvimento Medieval

Uma interface medieval elegante para gerenciar projetos de desenvolvimento, com visual inspirado em castelos, pergaminhos e elementos góticos.

## 🏰 Características

- **Tema Medieval Completo**: Design inspirado em castelos, pergaminhos, brasões e elementos góticos
- **Responsivo**: Layout que se adapta perfeitamente a desktop e mobile  
- **Animações Suaves**: Efeitos visuais como tochas piscando, pergaminhos flutuando e elementos brilhantes
- **Código Puro**: Apenas HTML, CSS e JavaScript vanilla - sem dependências externas
- **GitHub Pages Ready**: Totalmente compatível com hospedagem estática
- **Funcionalidade Completa**: Modal de detalhes, criação de pastas, notificações

## 🎨 Visual

- **Texturas**: Fundos com texturas de pedra e pergaminho
- **Tipografia**: Fontes góticas (Cinzel, Uncial Antiqua, MedievalSharp)
- **Ícones**: Emojis temáticos (📜, 📚, ⚙️, 🏰, ⚔️, 🛡️)
- **Cores**: Paleta medieval com tons de marrom, dourado e creme
- **Elementos**: Tochas animadas, escudos brilhantes, castelos ao fundo

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Página principal
├── style.css           # Estilos medievais
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🚀 Como Usar

### Hospedagem no GitHub Pages

1. **Criar Repositório**:
   - Crie um novo repositório no GitHub
   - Faça upload dos arquivos: `index.html`, `style.css`, `script.js`

2. **Ativar GitHub Pages**:
   - Vá em Settings > Pages
   - Selecione "Deploy from a branch"
   - Escolha "main" branch
   - Clique "Save"

3. **Acessar o Site**:
   - Seu site estará disponível em `https://seuusuario.github.io/nome-do-repo`

### Integração com PHP (Opcional)

Para integrar com PHP e listar pastas reais do servidor:

1. **Substituir dados mock**:
   ```javascript
   // Em script.js, substitua mockFolders por uma chamada AJAX:
   fetch('list_folders.php')
       .then(response => response.json())
       .then(folders => renderFolders(folders));
   ```

2. **Criar list_folders.php**:
   ```php
   <?php
   $directory = './';
   $folders = [];
   
   if ($handle = opendir($directory)) {
       while (false !== ($entry = readdir($handle))) {
           if ($entry != "." && $entry != ".." && is_dir($directory . $entry)) {
               $folders[] = [
                   'id' => $entry,
                   'name' => ucfirst(str_replace('-', ' ', $entry)),
                   'description' => 'Pasta do projeto',
                   'type' => 'project',
                   'lastModified' => date('c', filemtime($directory . $entry)),
                   'fileCount' => count(scandir($directory . $entry)) - 2,
                   'path' => $directory . $entry . '/'
               ];
           }
       }
       closedir($handle);
   }
   
   header('Content-Type: application/json');
   echo json_encode($folders);
   ?>
   ```

## ⚙️ Funcionalidades

### Interface Principal
- ✅ Header medieval com título decorativo
- ✅ Grid de pastas com visual de tomo/pergaminho
- ✅ Animações de entrada suaves
- ✅ Elementos flutuantes (tochas, escudos, espadas)
- ✅ Footer temático

### Interações
- ✅ Modal de detalhes da pasta
- ✅ Botão de criar nova pasta
- ✅ Notificações estilizadas
- ✅ Efeitos de hover e clique
- ✅ Navegação por teclado (ESC para fechar modal)

### Responsividade
- ✅ Layout adaptável para mobile
- ✅ Tipografia escalável
- ✅ Grid responsivo
- ✅ Elementos flutuantes desabilitados em mobile

## 🎯 Personalização

### Cores
Edite as variáveis CSS em `style.css`:
```css
/* Cores principais */
--medieval-brown: #8b4513;
--parchment: #f5deb3;
--gold: #daa520;
--dark-brown: #2c1810;
```

### Fontes
Adicione novas fontes medievais no `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=NomeDaFonte&display=swap" rel="stylesheet">
```

### Dados das Pastas
Modifique o array `mockFolders` em `script.js`:
```javascript
const mockFolders = [
    {
        id: 'meu-projeto',
        name: 'Meu Projeto',
        description: 'Descrição do projeto',
        type: 'project', // project, library, config
        lastModified: '2025-01-15T10:30:00Z',
        fileCount: 25,
        path: './meu-projeto/'
    }
];
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com animações
- **JavaScript ES6+**: Funcionalidades interativas
- **Google Fonts**: Tipografia medieval
- **CSS Grid & Flexbox**: Layout responsivo

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móveis (iOS/Android)

## 🎨 Inspiração Visual

O design foi inspirado em:
- 🏰 Arquitetura medieval européia
- 📜 Manuscritos iluminados
- 🗡️ Heráldica e brasões
- 🔥 Ambiente de castelo com tochas
- 📚 Bibliotecas monásticas antigas

## 📄 Licença

Este projeto é open source e pode ser usado livremente para projetos pessoais e comerciais.

---

**Forjado nas Chamas do Desenvolvimento** ⚔️  
*Anno Domini MMXXV*