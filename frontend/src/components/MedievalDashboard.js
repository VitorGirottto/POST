import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mockData from '../data/mockData';
import './MedievalDashboard.css';

const MedievalDashboard = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  useEffect(() => {
    // Simulate loading from server
    setTimeout(() => {
      setFolders(mockData.folders);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleFolderClick = (folderId) => {
    navigate(`/folder/${folderId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long', 
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="medieval-loading">
        <div className="castle-loading">
          <div className="tower tower-1"></div>
          <div className="tower tower-2"></div>
          <div className="tower tower-3"></div>
          <div className="castle-gate"></div>
        </div>
        <p className="loading-text">Preparando o Reino...</p>
      </div>
    );
  }

  return (
    <div className="medieval-dashboard">
      {/* Medieval Header */}
      <header className="medieval-header">
        <div className="header-decoration">
          <div className="crown-left">👑</div>
          <div className="title-scroll">
            <h1 className="medieval-title">
              <span className="title-ornament">⚔️</span>
              Central de Desenvolvimento
              <span className="title-ornament">⚔️</span>
            </h1>
            <p className="medieval-subtitle">Reino dos Projetos Místicos</p>
          </div>
          <div className="crown-right">👑</div>
        </div>
        <div className="header-border"></div>
      </header>

      {/* Castle Background */}
      <div className="castle-backdrop">
        <div className="castle-silhouette">
          <div className="castle-tower castle-tower-1"></div>
          <div className="castle-tower castle-tower-2"></div>
          <div className="castle-tower castle-tower-3"></div>
          <div className="castle-wall"></div>
        </div>
      </div>

      {/* Folder Grid */}
      <main className="folders-realm">
        <div className="realm-intro">
          <div className="scroll-intro">
            <p className="realm-text">
              <span className="illuminated-letter">B</span>em-vindo ao Reino dos Códigos Sagrados
            </p>
            <div className="scroll-decoration">
              <span className="scroll-ornament">🗡️</span>
              <span className="scroll-ornament">🏰</span>
              <span className="scroll-ornament">🗡️</span>
            </div>
          </div>
        </div>

        <div className="folders-grid">
          {folders.map((folder, index) => (
            <div
              key={folder.id}
              className={`folder-tome ${hoveredFolder === folder.id ? 'tome-active' : ''}`}
              onMouseEnter={() => setHoveredFolder(folder.id)}
              onMouseLeave={() => setHoveredFolder(null)}
              onClick={() => handleFolderClick(folder.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tome-cover">
                <div className="tome-spine"></div>
                <div className="tome-content">
                  <div className="tome-icon">
                    {folder.type === 'project' ? '📜' : 
                     folder.type === 'library' ? '📚' : 
                     folder.type === 'config' ? '⚙️' : '📁'}
                  </div>
                  <div className="tome-title">{folder.name}</div>
                  <div className="tome-description">{folder.description}</div>
                  <div className="tome-metadata">
                    <div className="tome-date">
                      <span className="metadata-icon">🗓️</span>
                      {formatDate(folder.lastModified)}
                    </div>
                    <div className="tome-files">
                      <span className="metadata-icon">📄</span>
                      {folder.fileCount} pergaminhos
                    </div>
                  </div>
                </div>
                <div className="tome-clasp">
                  <div className="clasp-ornament">⚜️</div>
                </div>
              </div>

              {/* Hover effects */}
              <div className="tome-glow"></div>
              <div className="tome-shadow"></div>
            </div>
          ))}
        </div>

        {/* Add new folder section */}
        <div className="new-tome-section">
          <div className="tome-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">➕</div>
              <div className="placeholder-text">Criar Nova Saga</div>
              <div className="placeholder-subtitle">Adicionar novo projeto ao reino</div>
            </div>
          </div>
        </div>
      </main>

      {/* Medieval Footer */}
      <footer className="medieval-footer">
        <div className="footer-scroll">
          <div className="footer-content">
            <p className="footer-text">
              <span className="footer-ornament">⚔️</span>
              Forjado nas Chamas do Desenvolvimento
              <span className="footer-ornament">⚔️</span>
            </p>
            <div className="footer-year">Anno Domini MMXXV</div>
          </div>
        </div>
      </footer>

      {/* Floating medieval elements */}
      <div className="floating-elements">
        <div className="floating-torch torch-1">🔥</div>
        <div className="floating-torch torch-2">🔥</div>
        <div className="floating-shield">🛡️</div>
        <div className="floating-sword">⚔️</div>
      </div>
    </div>
  );
};

export default MedievalDashboard;