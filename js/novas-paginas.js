// JavaScript específico para as novas páginas

document.addEventListener('DOMContentLoaded', function() {
    // Escritos section functionality
    initEscritosSection();
    
    // Copy protection for escritos content
    initCopyProtection();
});

// Initialize Escritos section functionality
function initEscritosSection() {
    const leiaMaisButtons = document.querySelectorAll('.leia-mais');
    
    leiaMaisButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textoItem = this.closest('.texto-item');
            const conteudoCompleto = textoItem.querySelector('.conteudo-completo');
            const isExpanded = conteudoCompleto.style.display !== 'none';
            
            if (isExpanded) {
                // Collapse
                conteudoCompleto.style.display = 'none';
                this.textContent = 'Leia mais →';
                this.innerHTML = 'Leia mais →';
            } else {
                // Expand
                conteudoCompleto.style.display = 'block';
                this.textContent = 'Leia menos ←';
                this.innerHTML = 'Leia menos ←';
                
                // Smooth scroll to the expanded content
                setTimeout(() => {
                    textoItem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    });
}

// Enhanced copy protection
function initCopyProtection() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    
    // Prevent right-click on escritos content
    mainContent.addEventListener('contextmenu', function(e) {
        const target = e.target;
        const conteudoCompleto = target.closest('.conteudo-completo');
        
        if (conteudoCompleto) {
            e.preventDefault();
            return false;
        }
    });
    
    // Prevent copy shortcuts on escritos content
    mainContent.addEventListener('keydown', function(e) {
        const target = e.target;
        const conteudoCompleto = target.closest('.conteudo-completo');
        
        if (conteudoCompleto) {
            // Prevent Ctrl+C, Ctrl+X, Ctrl+A
            if ((e.ctrlKey || e.metaKey) && ['c', 'x', 'a'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                return false;
            }
        }
    });
    
    // Prevent text selection start on escritos content
    mainContent.addEventListener('selectstart', function(e) {
        const target = e.target;
        const conteudoCompleto = target.closest('.conteudo-completo');
        
        if (conteudoCompleto) {
            e.preventDefault();
            return false;
        }
    });
    
    // Prevent drag on escritos content
    mainContent.addEventListener('dragstart', function(e) {
        const target = e.target;
        const conteudoCompleto = target.closest('.conteudo-completo');
        
        if (conteudoCompleto) {
            e.preventDefault();
            return false;
        }
    });
}
