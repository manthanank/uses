// Theme management
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

document.addEventListener('DOMContentLoaded', function() {
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            this.style.transform = 'scale(0.9) rotate(180deg)';
            setTimeout(() => { this.style.transform = 'scale(1) rotate(0deg)'; }, 150);
        });
    }

    // Share functionality
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'My Setup - What I Use',
                        text: 'Check out my tools, apps, and hardware setup!',
                        url: window.location.href,
                    });
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                // Fallback: Copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                const originalText = shareBtn.querySelector('span').textContent;
                shareBtn.querySelector('span').textContent = 'Link Copied!';
                setTimeout(() => {
                    shareBtn.querySelector('span').textContent = originalText;
                }, 2000);
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial Search Setup (placeholder, will be fully initialized after data load)
    let searchInput;

    // Fetch and Render Data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderContent(data);
            initSearch();
            updateCopyright();
        })
        .catch(err => console.error('Error loading tools:', err));

    function renderContent(data) {
        const container = document.getElementById('categoryContainer');
        if (!container) return;

        container.innerHTML = ''; // Clear loading state

        data.categories.forEach((category, catIndex) => {
            const section = document.createElement('section');
            section.className = 'category';
            section.style.animationDelay = `${catIndex * 0.1}s`;
            
            section.innerHTML = `
                <h2 class="category-title">${category.title}</h2>
                <div class="items-grid"></div>
            `;

            const grid = section.querySelector('.items-grid');
            category.items.forEach((item, itemIndex) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'item';
                itemEl.tabIndex = 0;
                itemEl.setAttribute('role', 'button');
                itemEl.setAttribute('aria-label', `${item.title} details`);
                itemEl.style.animationDelay = `${(itemIndex * 0.1) + 0.2}s`;
                
                itemEl.innerHTML = `
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-glint"></div>
                `;

                // Add 3D Tilt Effect
                addItemInteractions(itemEl);
                
                grid.appendChild(itemEl);
                observer.observe(itemEl);
            });

            container.appendChild(section);
            observer.observe(section);
        });

        // Initialize Typewriter after content load
        initTypewriter();
    }

    function addItemInteractions(item) {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-5px)`;
            this.style.setProperty('--x', `${(x / rect.width) * 100}%`);
            this.style.setProperty('--y', `${(y / rect.height) * 100}%`);
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateY(0)';
        });

        item.addEventListener('mousedown', function() { this.style.transform += ' scale(0.98)'; });
        item.addEventListener('mouseup', function() { this.style.transform = this.style.transform.replace(' scale(0.98)', ''); });
    }

    function initSearch() {
        const headerContent = document.querySelector('.header .header-content');
        if (!headerContent || document.querySelector('.search-container')) return;

        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-input-wrapper">
                <input type="text" placeholder="Search tools..." class="search-input" id="searchInput">
                <kbd class="search-kbd">/</kbd>
            </div>
        `;

        const themeToggle = document.getElementById('themeToggle');
        themeToggle.parentNode.insertBefore(searchContainer, themeToggle);

        searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const items = document.querySelectorAll('.item');
            const categories = document.querySelectorAll('.category');

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(term)) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            categories.forEach(cat => {
                const hasVisible = cat.querySelectorAll('.item[style*="display: block"]').length > 0;
                cat.style.display = (hasVisible || term === '') ? 'block' : 'none';
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
                if (document.activeElement !== searchInput) {
                    e.preventDefault();
                    searchInput.focus();
                }
            }
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        });
    }

    function initTypewriter() {
        const title = document.querySelector('.title');
        if (title && !title.getAttribute('data-typed')) {
            const text = title.textContent;
            title.textContent = '';
            title.setAttribute('data-typed', 'true');
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            };
            setTimeout(type, 500);
        }
    }

    function updateCopyright() {
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
});

// PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(err => console.error(err));
    });
}