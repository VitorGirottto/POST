const mockData = {
  folders: [
    {
      id: 'projeto-webapp',
      name: 'Reino WebApp',
      description: 'Aplicação web principal do reino, construída com React e magia JavaScript.',
      type: 'project',
      lastModified: '2025-01-15T10:30:00Z',
      fileCount: 47,
      files: [
        { name: 'App.js', type: 'javascript', size: '2.3 KB', lastModified: '2025-01-15T10:30:00Z' },
        { name: 'index.html', type: 'html', size: '1.8 KB', lastModified: '2025-01-14T16:45:00Z' },
        { name: 'style.css', type: 'css', size: '5.2 KB', lastModified: '2025-01-15T09:15:00Z' },
        { name: 'components/', type: 'folder', size: '12 itens', lastModified: '2025-01-15T08:20:00Z' },
        { name: 'utils/', type: 'folder', size: '8 itens', lastModified: '2025-01-13T14:30:00Z' }
      ]
    },
    {
      id: 'biblioteca-componentes',
      name: 'Biblioteca dos Componentes',
      description: 'Coleção sagrada de componentes reutilizáveis e encantamentos de UI.',
      type: 'library',
      lastModified: '2025-01-12T14:20:00Z',
      fileCount: 23,
      files: [
        { name: 'Button.jsx', type: 'javascript', size: '1.5 KB', lastModified: '2025-01-12T14:20:00Z' },
        { name: 'Modal.jsx', type: 'javascript', size: '3.2 KB', lastModified: '2025-01-11T11:30:00Z' },
        { name: 'Form.jsx', type: 'javascript', size: '2.8 KB', lastModified: '2025-01-12T09:45:00Z' },
        { name: 'styles/', type: 'folder', size: '15 itens', lastModified: '2025-01-10T16:00:00Z' }
      ]
    },
    {
      id: 'api-servidor',
      name: 'Torre do Servidor',
      description: 'Fortaleza backend com APIs robustas e segurança de castelo medieval.',
      type: 'project',
      lastModified: '2025-01-14T16:45:00Z',
      fileCount: 34,
      files: [
        { name: 'server.js', type: 'javascript', size: '4.1 KB', lastModified: '2025-01-14T16:45:00Z' },
        { name: 'routes/', type: 'folder', size: '12 itens', lastModified: '2025-01-14T15:30:00Z' },
        { name: 'middleware/', type: 'folder', size: '6 itens', lastModified: '2025-01-13T10:20:00Z' },
        { name: 'models/', type: 'folder', size: '9 itens', lastModified: '2025-01-14T14:15:00Z' },
        { name: 'package.json', type: 'json', size: '1.2 KB', lastModified: '2025-01-12T12:00:00Z' }
      ]
    },
    {
      id: 'configuracoes',
      name: 'Pergaminhos de Configuração',
      description: 'Documentos místicos com configurações do reino e variáveis de ambiente.',
      type: 'config',
      lastModified: '2025-01-10T11:15:00Z',
      fileCount: 12,
      files: [
        { name: '.env', type: 'env', size: '0.8 KB', lastModified: '2025-01-10T11:15:00Z' },
        { name: 'config.json', type: 'json', size: '1.5 KB', lastModified: '2025-01-09T14:30:00Z' },
        { name: 'webpack.config.js', type: 'javascript', size: '3.2 KB', lastModified: '2025-01-08T16:45:00Z' },
        { name: 'babel.config.js', type: 'javascript', size: '0.9 KB', lastModified: '2025-01-07T10:20:00Z' }
      ]
    },
    {
      id: 'assets-multimidia',
      name: 'Tesouro de Imagens',
      description: 'Cofre com imagens, ícones e recursos visuais do reino.',
      type: 'library',
      lastModified: '2025-01-13T09:30:00Z',
      fileCount: 68,
      files: [
        { name: 'logo.svg', type: 'svg', size: '2.1 KB', lastModified: '2025-01-13T09:30:00Z' },
        { name: 'icons/', type: 'folder', size: '24 itens', lastModified: '2025-01-12T15:20:00Z' },
        { name: 'images/', type: 'folder', size: '35 itens', lastModified: '2025-01-11T14:10:00Z' },
        { name: 'fonts/', type: 'folder', size: '8 itens', lastModified: '2025-01-10T12:45:00Z' }
      ]
    },
    {
      id: 'documentacao',
      name: 'Crônicas do Reino',
      description: 'Documentação completa das lendas e histórias do desenvolvimento.',
      type: 'project',
      lastModified: '2025-01-11T13:45:00Z',
      fileCount: 15,
      files: [
        { name: 'README.md', type: 'markdown', size: '3.5 KB', lastModified: '2025-01-11T13:45:00Z' },
        { name: 'API.md', type: 'markdown', size: '8.2 KB', lastModified: '2025-01-10T16:30:00Z' },
        { name: 'CHANGELOG.md', type: 'markdown', size: '2.1 KB', lastModified: '2025-01-09T11:20:00Z' },
        { name: 'CONTRIBUTING.md', type: 'markdown', size: '1.8 KB', lastModified: '2025-01-08T14:15:00Z' }
      ]
    }
  ],

  // Estatísticas do reino
  stats: {
    totalProjects: 6,
    totalFiles: 199,
    lastActivity: '2025-01-15T10:30:00Z',
    activeProjects: 4
  },

  // Atividades recentes
  recentActivity: [
    {
      id: 1,
      action: 'updated',
      target: 'Reino WebApp',
      timestamp: '2025-01-15T10:30:00Z',
      description: 'Componente principal atualizado com novas funcionalidades'
    },
    {
      id: 2,
      action: 'created',
      target: 'Torre do Servidor',
      timestamp: '2025-01-14T16:45:00Z',
      description: 'Nova rota de API adicionada para autenticação'
    },
    {
      id: 3,
      action: 'modified',
      target: 'Biblioteca dos Componentes',
      timestamp: '2025-01-12T14:20:00Z',
      description: 'Componente Button recebeu novos estilos medievais'
    }
  ]
};

export default mockData;