// Medieval Development Center JavaScript

// Mock data for folders (replace with PHP later)
const mockFolders = [
    {
        id: 'projeto-webapp',
        name: 'Reino WebApp',
        description: 'Aplicação web principal do reino, construída com React e magia JavaScript.',
        type: 'project',
        lastModified: '2025-01-15T10:30:00Z',
        fileCount: 47,
        path: './projeto-webapp/'
    },
    {
        id: 'biblioteca-componentes',
        name: 'Biblioteca dos Componentes',
        description: 'Coleção sagrada de componentes reutilizáveis e encantamentos de UI.',
        type: 'library',
        lastModified: '2025-01-12T14:20:00Z',
        fileCount: 23,
        path: './biblioteca-componentes/'
    },
    {
        id: 'api-servidor',
        name: 'Torre do Servidor',
        description: 'Fortaleza backend com APIs robustas e segurança de castelo medieval.',
        type: 'project',
        lastModified: '2025-01-14T16:45:00Z',
        fileCount: 34,
        path: './api-servidor/'
    },
    {
        id: 'configuracoes',
        name: 'Pergaminhos de Configuração',
        description: 'Documentos místicos com configurações do reino e variáveis de ambiente.',
        type: 'config',
        lastModified: '2025-01-10T11:15:00Z',
        fileCount: 12,
        path: './configuracoes/'
    },
    {
        id: 'assets-multimidia',
        name: 'Tesouro de Imagens',
        description: 'Cofre com imagens, ícones e recursos visuais do reino.',
        type: 'library',
        lastModified: '2025-01-13T09:30:00Z',
        fileCount: 68,
        path: './assets-multimidia/'
    },
    {
        id: 'documentacao',
        name: 'Crônicas do Reino',
        description: 'Documentação completa das lendas e histórias do desenvolvimento.',
        type: 'project',
        lastModified: '2025-01-11T13:45:00Z',
        fileCount: 15,
        path: './documentacao/'
    }
];

let currentFolderId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        renderFolders();
        addEventListeners();
    }, 1500);
});

// Loading screen functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Render folders function
function renderFolders() {
    const foldersGrid = document.getElementById('foldersList');
    foldersGrid.innerHTML = '';

    mockFolders.forEach((folder, index) => {
        const folderElement = createFolderElement(folder, index);
        foldersGrid.appendChild(folderElement);
    });

    // Animate folders entrance
    setTimeout(() => {
        const folderElements = document.querySelectorAll('.folder-tome');
        folderElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) perspective(1000px) rotateY(-5deg)';
            }, index * 100);
        });
    }, 100);
}

// Create folder element
function createFolderElement(folder, index) {
    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder-tome';
    folderDiv.style.animationDelay = `${index * 0.1}s`;
    folderDiv.onclick = () => openFolderModal(folder);

    const icon = getFolderIcon(folder.type);
    const formattedDate = formatDate(folder.lastModified);

    folderDiv.innerHTML = `
        <div class="tome-cover">
            <div class="tome-spine"></div>
            <div class="tome-content">
                <div class="tome-icon">${icon}</div>
                <div class="tome-title">${folder.name}</div>
                <div class="tome-description">${folder.description}</div>
                <div class="tome-metadata">
                    <div class="tome-date">
                        <span class="metadata-icon">🗓️</span>
                        ${formattedDate}
                    </div>
                    <div class="tome-files">
                        <span class="metadata-icon">📄</span>
                        ${folder.fileCount} pergaminhos
                    </div>
                </div>
            </div>
            <div class="tome-clasp">
                <div class="clasp-ornament">⚜️</div>
            </div>
            <div class="tome-glow"></div>
            <div class="tome-shadow"></div>
        </div>
    `;

    return folderDiv;
}

// Get folder icon based on type
function getFolderIcon(type) {
    const icons = {
        'project': '📜',
        'library': '📚',
        'config': '⚙️',
        'default': '📁'
    };
    return icons[type] || icons.default;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    };
    return date.toLocaleDateString('pt-BR', options);
}

// Modal functions
function openFolderModal(folder) {
    currentFolderId = folder.id;
    
    document.getElementById('modalTitle').textContent = folder.name;
    document.getElementById('modalDescription').textContent = folder.description;
    document.getElementById('modalDate').textContent = formatDate(folder.lastModified);
    document.getElementById('modalFiles').textContent = `${folder.fileCount} pergaminhos`;
    
    const modal = document.getElementById('folderModal');
    modal.classList.add('active');
    
    // Add entrance sound effect (you can add actual audio here)
    playSound('parchment');
}

function closeModal() {
    const modal = document.getElementById('folderModal');
    modal.classList.remove('active');
    currentFolderId = null;
}

// Folder actions
function openFolder() {
    if (!currentFolderId) return;
    
    const folder = mockFolders.find(f => f.id === currentFolderId);
    if (folder && folder.path) {
        // In a real scenario, this would navigate to the folder
        // For now, we'll show an alert
        showNotification(`Abrindo pasta: ${folder.name}`, 'success');
        
        // You can replace this with actual navigation
        // window.location.href = folder.path;
        
        closeModal();
    }
}

function editFolder() {
    if (!currentFolderId) return;
    
    const folder = mockFolders.find(f => f.id === currentFolderId);
    if (folder) {
        showNotification(`Editando: ${folder.name}`, 'info');
        closeModal();
        // Add edit functionality here
    }
}

function createNewFolder() {
    const folderName = prompt('Digite o nome da nova saga:');
    if (folderName && folderName.trim()) {
        const newFolder = {
            id: generateId(),
            name: folderName.trim(),
            description: 'Nova saga criada no reino dos códigos',
            type: 'project',
            lastModified: new Date().toISOString(),
            fileCount: 0,
            path: `./${folderName.toLowerCase().replace(/\s+/g, '-')}/`
        };
        
        mockFolders.push(newFolder);
        renderFolders();
        showNotification(`Nova saga "${folderName}" foi criada!`, 'success');
    }
}

// Utility functions
function generateId() {
    return 'folder-' + Math.random().toString(36).substr(2, 9);
}

function playSound(type) {
    // Placeholder for sound effects
    // You can add actual audio elements here
    console.log(`Playing ${type} sound effect`);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #f5deb3, #daa520);
        color: #2c1810;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        border: 2px solid #8b4513;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-family: 'Cinzel', serif;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners
function addEventListeners() {
    // Close modal when clicking outside
    document.getElementById('folderModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Add hover effects to folder tomes
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.folder-tome')) {
            const tome = e.target.closest('.folder-tome');
            tome.classList.add('tome-active');
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.folder-tome')) {
            const tome = e.target.closest('.folder-tome');
            tome.classList.remove('tome-active');
        }
    });

    // Add parallax effect to floating elements
    document.addEventListener('mousemove', function(e) {
        const floatingElements = document.querySelectorAll('.floating-torch, .floating-shield, .floating-sword');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize tooltips (optional enhancement)
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(139, 69, 19, 0.9);
                color: #f5deb3;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-size: 0.8rem;
                font-family: 'Cinzel', serif;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
                border: 1px solid #8b4513;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                document.body.removeChild(tooltip);
            }
        });
    });
}

// Performance optimization: Lazy load animations
function observeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate when in view
    const animatedElements = document.querySelectorAll('.folder-tome, .scroll-intro, .footer-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeTooltips();
        observeAnimations();
    }, 2000);
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}