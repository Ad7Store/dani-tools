// ===== CONFIGURATION =====
const API_CONFIGS = {
    categories: [
        { id: 'all', name: 'All Tools', icon: 'fas fa-th', count: 25 },
        { id: 'download', name: 'Download', icon: 'fas fa-download', count: 6 },
        { id: 'image', name: 'Image Tools', icon: 'fas fa-image', count: 7 },
        { id: 'generator', name: 'Generators', icon: 'fas fa-cogs', count: 5 },
        { id: 'text', name: 'Text Tools', icon: 'fas fa-font', count: 4 },
        { id: 'islamic', name: 'Islamic', icon: 'fas fa-mosque', count: 2 },
        { id: 'utility', name: 'Utilities', icon: 'fas fa-tools', count: 1 }
    ],

    apis: [
        // ===== ISLAMIC TOOLS =====
        {
            id: 'quran',
            name: 'Quran Reader',
            description: 'Read the Holy Quran with beautiful Arabic text and translations',
            endpoint: 'https://apis.davidcyriltech.my.id/quran?surah=',
            method: 'GET',
            icon: 'fas fa-book-quran',
            category: 'islamic',
            color: '#10b981',
            inputs: [
                { id: 'surah', label: 'Surah Number (1-114)', type: 'number', min: 1, max: 114, required: true, value: '1' }
            ],
            badges: ['popular']
        },

        // ===== DOWNLOAD TOOLS =====
        {
            id: 'youtube-music',
            name: 'YouTube Music',
            description: 'Search and download music from YouTube with metadata',
            endpoint: 'https://apis.davidcyriltech.my.id/play?query=',
            method: 'GET',
            icon: 'fas fa-music',
            category: 'download',
            color: '#ef4444',
            inputs: [
                { id: 'query', label: 'Song Name', type: 'text', required: true, placeholder: 'Enter song name...' }
            ]
        },
        {
            id: 'youtube-video',
            name: 'YouTube Video',
            description: 'Download YouTube videos in MP4 format',
            endpoint: 'https://apis.davidcyriltech.my.id/download/ytmp4?url=',
            method: 'GET',
            icon: 'fab fa-youtube',
            category: 'download',
            color: '#ef4444',
            inputs: [
                { id: 'url', label: 'YouTube URL', type: 'url', required: true, placeholder: 'https://youtube.com/watch?v=...' }
            ]
        },
        {
            id: 'twitter-dl',
            name: 'Twitter/X Download',
            description: 'Download videos from Twitter/X in multiple qualities',
            endpoint: 'https://apis.davidcyriltech.my.id/twitterV2?url=',
            method: 'GET',
            icon: 'fab fa-twitter',
            category: 'download',
            color: '#1da1f2',
            inputs: [
                { id: 'url', label: 'Twitter/X URL', type: 'url', required: true, placeholder: 'https://x.com/...' }
            ]
        },
        {
            id: 'spotify-dl',
            name: 'Spotify Download',
            description: 'Download MP3 files from Spotify tracks',
            endpoint: 'https://apis.davidcyriltech.my.id/spotifydl2?url=',
            method: 'GET',
            icon: 'fab fa-spotify',
            category: 'download',
            color: '#1db954',
            inputs: [
                { id: 'url', label: 'Spotify Track URL', type: 'url', required: true, placeholder: 'https://open.spotify.com/track/...' }
            ]
        },
        {
            id: 'tiktok-dl',
            name: 'TikTok Download',
            description: 'Download videos from TikTok',
            endpoint: 'https://apis.davidcyriltech.my.id/download/tiktok?url=',
            method: 'GET',
            icon: 'fab fa-tiktok',
            category: 'download',
            color: '#000000',
            inputs: [
                { id: 'url', label: 'TikTok URL', type: 'url', required: true, placeholder: 'https://vm.tiktok.com/...' }
            ],
            badges: ['beta']
        },
        {
            id: 'facebook-dl',
            name: 'Facebook Download',
            description: 'Download videos from Facebook',
            endpoint: 'https://apis.davidcyriltech.my.id/facebook?url=',
            method: 'GET',
            icon: 'fab fa-facebook',
            category: 'download',
            color: '#1877f2',
            inputs: [
                { id: 'url', label: 'Facebook URL', type: 'url', required: true, placeholder: 'https://facebook.com/...' }
            ],
            badges: ['beta']
        },

        // ===== IMAGE TOOLS =====
        {
            id: 'wallpaper',
            name: 'Wallpaper Search',
            description: 'Search and download beautiful wallpapers',
            endpoint: 'https://apis.davidcyriltech.my.id/search/wallpaper?text=',
            method: 'GET',
            icon: 'fas fa-image',
            category: 'image',
            color: '#8b5cf6',
            inputs: [
                { id: 'text', label: 'Search Term', type: 'text', required: true, placeholder: 'naruto, nature, abstract...' }
            ],
            badges: ['new']
        },
        {
            id: 'imgscan',
            name: 'Image Scanner',
            description: 'Scan images for text and metadata',
            endpoint: 'https://apis.davidcyriltech.my.id/imgscan?url=',
            method: 'GET',
            icon: 'fas fa-search',
            category: 'image',
            color: '#3b82f6',
            inputs: [
                { id: 'url', label: 'Image URL', type: 'url', required: true, placeholder: 'https://example.com/image.jpg' }
            ]
        },
        {
            id: 'remini',
            name: 'Image Enhancer',
            description: 'Enhance and upscale image quality',
            endpoint: 'https://apis.davidcyriltech.my.id/remini?url=',
            method: 'GET',
            icon: 'fas fa-magic',
            category: 'image',
            color: '#ec4899',
            inputs: [
                { id: 'url', label: 'Image URL', type: 'url', required: true, placeholder: 'https://example.com/image.jpg' }
            ]
        },
        {
            id: 'removebg',
            name: 'Background Remover',
            description: 'Remove background from images automatically',
            endpoint: 'https://apis.davidcyriltech.my.id/removebg?url=',
            method: 'GET',
            icon: 'fas fa-cut',
            category: 'image',
            color: '#10b981',
            inputs: [
                { id: 'url', label: 'Image URL', type: 'url', required: true, placeholder: 'https://example.com/image.jpg' }
            ]
        },
        {
            id: 'upscale',
            name: 'Image Upscaler',
            description: 'Upscale images to higher resolution',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/upscale?url=',
            method: 'GET',
            icon: 'fas fa-expand-alt',
            category: 'image',
            color: '#f59e0b',
            inputs: [
                { id: 'url', label: 'Image URL', type: 'url', required: true, placeholder: 'https://example.com/image.jpg' },
                { id: 'width', label: 'Width', type: 'number', required: false, placeholder: '1920' },
                { id: 'height', label: 'Height', type: 'number', required: false, placeholder: '1080' }
            ]
        },
        {
            id: 'html2image',
            name: 'HTML to Image',
            description: 'Convert HTML code to images',
            endpoint: 'https://apis.davidcyriltech.my.id/converter/html2image?html=',
            method: 'GET',
            icon: 'fas fa-code',
            category: 'image',
            color: '#6366f1',
            inputs: [
                { id: 'html', label: 'HTML Code', type: 'textarea', required: true, placeholder: '<h1>Hello World</h1>' }
            ]
        },
        {
            id: 'ssweb',
            name: 'Website Screenshot',
            description: 'Take screenshots of any website',
            endpoint: 'https://apis.davidcyriltech.my.id/ssweb?url=',
            method: 'GET',
            icon: 'fas fa-camera',
            category: 'image',
            color: '#8b5cf6',
            inputs: [
                { id: 'url', label: 'Website URL', type: 'url', required: true, placeholder: 'https://example.com' }
            ]
        },

        // ===== GENERATORS =====
        {
            id: 'flux',
            name: 'AI Image Generator',
            description: 'Generate AI images from text prompts',
            endpoint: 'https://apis.davidcyriltech.my.id/flux?prompt=',
            method: 'GET',
            icon: 'fas fa-robot',
            category: 'generator',
            color: '#ec4899',
            inputs: [
                { id: 'prompt', label: 'Image Prompt', type: 'text', required: true, placeholder: 'Describe the image you want...' }
            ],
            badges: ['popular']
        },
        {
            id: 'ccgen',
            name: 'Credit Card Generator',
            description: 'Generate test credit card numbers',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/ccgen?type=',
            method: 'GET',
            icon: 'fas fa-credit-card',
            category: 'generator',
            color: '#6366f1',
            inputs: [
                { id: 'type', label: 'Card Type', type: 'select', required: true, options: ['MasterCard', 'Visa', 'Amex'], value: 'MasterCard' },
                { id: 'amount', label: 'Amount', type: 'number', required: false, min: 1, max: 100, value: '5' }
            ]
        },
        {
            id: 'bookgen',
            name: 'Book Generator',
            description: 'Generate book covers with custom text',
            endpoint: 'https://apis.davidcyriltech.my.id/generate/book?text=',
            method: 'GET',
            icon: 'fas fa-book',
            category: 'generator',
            color: '#f59e0b',
            inputs: [
                { id: 'text', label: 'Book Title', type: 'text', required: true, placeholder: 'Enter book title...' },
                { id: 'size', label: 'Font Size', type: 'number', required: false, min: 10, max: 100, value: '30' }
            ]
        },
        {
            id: 'obfuscate',
            name: 'Code Obfuscator',
            description: 'Obfuscate JavaScript code',
            endpoint: 'https://apis.davidcyriltech.my.id/obfuscate?code=',
            method: 'GET',
            icon: 'fas fa-shield-alt',
            category: 'generator',
            color: '#10b981',
            inputs: [
                { id: 'code', label: 'JavaScript Code', type: 'textarea', required: true, placeholder: 'console.log("Hello World");' },
                { id: 'level', label: 'Obfuscation Level', type: 'select', required: false, options: ['low', 'medium', 'high'], value: 'low' }
            ]
        },

        // ===== TEXT TOOLS =====
        {
            id: 'lyrics',
            name: 'Lyrics Finder',
            description: 'Find song lyrics by title and artist',
            endpoint: 'https://apis.davidcyriltech.my.id/lyrics?t=',
            method: 'GET',
            icon: 'fas fa-microphone-alt',
            category: 'text',
            color: '#8b5cf6',
            inputs: [
                { id: 't', label: 'Song Title', type: 'text', required: true, placeholder: 'Enter song title...' },
                { id: 'a', label: 'Artist Name', type: 'text', required: false, placeholder: 'Enter artist name...' }
            ]
        },
        {
            id: 'tinyurl',
            name: 'URL Shortener',
            description: 'Shorten long URLs to tiny URLs',
            endpoint: 'https://apis.davidcyriltech.my.id/tinyurl?url=',
            method: 'GET',
            icon: 'fas fa-link',
            category: 'text',
            color: '#3b82f6',
            inputs: [
                { id: 'url', label: 'Long URL', type: 'url', required: true, placeholder: 'https://very-long-url.com/...' }
            ]
        },
        {
            id: 'tts',
            name: 'Text to Speech',
            description: 'Convert text to speech with different voices',
            endpoint: 'https://apis.davidcyriltech.my.id/tts?text=',
            method: 'GET',
            icon: 'fas fa-volume-up',
            category: 'text',
            color: '#ec4899',
            inputs: [
                { id: 'text', label: 'Text to Convert', type: 'textarea', required: true, placeholder: 'Enter text to convert to speech...' },
                { id: 'voice', label: 'Voice', type: 'select', required: false, options: ['Bianca', 'David', 'Emma', 'Brian'], value: 'Bianca' }
            ]
        },

        // ===== UTILITIES =====
        {
            id: 'weather',
            name: 'Weather Check',
            description: 'Check current weather for any city',
            endpoint: 'https://apis.davidcyriltech.my.id/weather?city=',
            method: 'GET',
            icon: 'fas fa-cloud-sun',
            category: 'utility',
            color: '#3b82f6',
            inputs: [
                { id: 'city', label: 'City Name', type: 'text', required: true, placeholder: 'Enter city name...' }
            ]
        },
        {
            id: 'calculator',
            name: 'Math Calculator',
            description: 'Calculate mathematical expressions',
            endpoint: 'https://apis.davidcyriltech.my.id/tools/calculate?expr=',
            method: 'GET',
            icon: 'fas fa-calculator',
            category: 'utility',
            color: '#f59e0b',
            inputs: [
                { id: 'expr', label: 'Math Expression', type: 'text', required: true, placeholder: '2+2*3, sqrt(16), sin(30)' }
            ]
        }
    ]
};

// ===== GLOBAL STATE =====
let currentCategory = 'all';
let currentSearch = '';

// ===== DOM ELEMENTS =====
const dom = {
    apiDashboard: document.getElementById('apiDashboard'),
    categoryTabs: document.getElementById('categoryTabs'),
    globalSearch: document.getElementById('globalSearch'),
    apiModal: document.getElementById('apiModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    loadingOverlay: document.getElementById('loadingOverlay')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    renderDashboard();
    setupEventListeners();
    hideLoading();
});

// ===== TAB SYSTEM =====
function initializeTabs() {
    const tabsContainer = dom.categoryTabs;
    
    API_CONFIGS.categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${category.id === 'all' ? 'active' : ''}`;
        tab.innerHTML = `
            <i class="${category.icon}"></i>
            <span>${category.name}</span>
            <span class="badge" style="background: var(--primary-color); color: white; margin-left: 5px;">
                ${category.count}
            </span>
        `;
        tab.onclick = () => switchCategory(category.id);
        tabsContainer.appendChild(tab);
    });
}

function switchCategory(categoryId) {
    currentCategory = categoryId;
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    dom.categoryTabs.children[API_CONFIGS.categories.findIndex(c => c.id === categoryId)].classList.add('active');
    
    // Re-render dashboard
    renderDashboard();
}

// ===== DASHBOARD RENDERER =====
function renderDashboard() {
    dom.apiDashboard.innerHTML = '';
    
    let filteredApis = API_CONFIGS.apis;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredApis = filteredApis.filter(api => api.category === currentCategory);
    }
    
    // Filter by search
    if (currentSearch) {
        const searchTerm = currentSearch.toLowerCase();
        filteredApis = filteredApis.filter(api => 
            api.name.toLowerCase().includes(searchTerm) ||
            api.description.toLowerCase().includes(searchTerm) ||
            api.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort by name
    filteredApis.sort((a, b) => a.name.localeCompare(b.name));
    
    // Render each card
    filteredApis.forEach((api, index) => {
        const card = createApiCard(api, index);
        dom.apiDashboard.appendChild(card);
    });
    
    // Show empty state if no results
    if (filteredApis.length === 0) {
        dom.apiDashboard.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search fa-3x"></i>
                <h3>No tools found</h3>
                <p>Try a different search term or browse all categories</p>
                <button class="card-btn primary" onclick="switchCategory('all')">
                    <i class="fas fa-th"></i> Show All Tools
                </button>
            </div>
        `;
    }
}

function createApiCard(api, index) {
    const card = document.createElement('div');
    card.className = 'api-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const badges = api.badges ? api.badges.map(badge => 
        `<span class="badge badge-${badge}">${badge.toUpperCase()}</span>`
    ).join('') : '';
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon" style="background: linear-gradient(135deg, ${api.color}33, ${api.color}99); color: ${api.color}">
                <i class="${api.icon}"></i>
            </div>
            <div>
                <h3 class="card-title">${api.name} ${badges}</h3>
                <span class="card-category">${api.category.toUpperCase()}</span>
            </div>
        </div>
        <p class="card-description">${api.description}</p>
        <div class="card-actions">
            <button class="card-btn primary" onclick="openApiModal('${api.id}')">
                <i class="fas fa-play"></i> Use Now
            </button>
            <button class="card-btn secondary" onclick="quickAction('${api.id}')">
                <i class="fas fa-bolt"></i> Quick Action
            </button>
        </div>
        <div class="card-stats">
            <span><i class="fas fa-bolt"></i> Fast & Free</span>
            <span><i class="fas fa-check-circle"></i> API Status: Online</span>
        </div>
    `;
    
    return card;
}

// ===== MODAL SYSTEM =====
function openApiModal(apiId) {
    const api = API_CONFIGS.apis.find(a => a.id === apiId);
    if (!api) return;
    
    showLoading();
    
    // Set modal title
    dom.modalTitle.innerHTML = `
        <i class="${api.icon}" style="color: ${api.color}; margin-right: 10px;"></i>
        ${api.name}
    `;
    
    // Create form inputs
    let inputsHtml = '';
    api.inputs.forEach(input => {
        if (input.type === 'textarea') {
            inputsHtml += `
                <div class="input-group">
                    <label for="${input.id}">${input.label}${input.required ? ' *' : ''}</label>
                    <textarea 
                        id="modal-${input.id}" 
                        placeholder="${input.placeholder || ''}"
                        ${input.required ? 'required' : ''}
                        rows="4"
                    >${input.value || ''}</textarea>
                </div>
            `;
        } else if (input.type === 'select') {
            const options = input.options.map(opt => 
                `<option value="${opt}" ${opt === input.value ? 'selected' : ''}>${opt}</option>`
            ).join('');
            inputsHtml += `
                <div class="input-group">
                    <label for="${input.id}">${input.label}${input.required ? ' *' : ''}</label>
                    <select id="modal-${input.id}" ${input.required ? 'required' : ''}>
                        ${options}
                    </select>
                </div>
            `;
        } else {
            inputsHtml += `
                <div class="input-group">
                    <label for="${input.id}">${input.label}${input.required ? ' *' : ''}</label>
                    <input 
                        type="${input.type}" 
                        id="modal-${input.id}" 
                        placeholder="${input.placeholder || ''}"
                        ${input.min ? `min="${input.min}"` : ''}
                        ${input.max ? `max="${input.max}"` : ''}
                        ${input.required ? 'required' : ''}
                        value="${input.value || ''}"
                    >
                </div>
            `;
        }
    });
    
    // Create modal content
    dom.modalBody.innerHTML = `
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${api.description}</p>
        <form id="api-form" onsubmit="handleApiSubmit('${apiId}', event)">
            ${inputsHtml}
            <div class="input-row">
                <button type="submit" class="card-btn primary" style="flex: 2;">
                    <i class="fas fa-paper-plane"></i> Submit Request
                </button>
                <button type="button" class="card-btn secondary" onclick="closeModal()" style="flex: 1;">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </form>
        <div id="api-result"></div>
    `;
    
    // Show modal
    dom.apiModal.classList.add('active');
    hideLoading();
}

function closeModal() {
    dom.apiModal.classList.remove('active');
    dom.modalBody.innerHTML = '';
}

async function handleApiSubmit(apiId, event) {
    event.preventDefault();
    
    const api = API_CONFIGS.apis.find(a => a.id === apiId);
    if (!api) return;
    
    showLoading();
    
    // Build URL with parameters
    let url = api.endpoint;
    const params = [];
    
    api.inputs.forEach(input => {
        const element = document.getElementById(`modal-${input.id}`);
        if (element && element.value) {
            const value = encodeURIComponent(element.value);
            if (api.endpoint.includes(`?${input.id}=`)) {
                // Replace placeholder in URL
                url = url.replace(`?${input.id}=`, `?${input.id}=${value}`);
            } else if (api.endpoint.includes(`&${input.id}=`)) {
                // Replace placeholder in query string
                url = url.replace(`&${input.id}=`, `&${input.id}=${value}`);
            } else {
                params.push(`${input.id}=${value}`);
            }
        }
    });
    
    // Add remaining parameters
    if (params.length > 0) {
        if (url.includes('?')) {
            url += '&' + params.join('&');
        } else {
            url += '?' + params.join('&');
        }
    }
    
    // Add API key if needed
    if (api.endpoint.includes('apikey=')) {
        url += '&apikey=';
    }
    
    try {
        const response = await fetch(url, { method: api.method });
        const data = await response.json();
        
        displayApiResult(api, data);
    } catch (error) {
        displayApiResult(api, { error: error.message });
    } finally {
        hideLoading();
    }
}

function displayApiResult(api, data) {
    const resultContainer = document.getElementById('api-result');
    
    if (data.error) {
        resultContainer.innerHTML = `
            <div class="status-message status-error">
                <i class="fas fa-exclamation-circle"></i>
                <h4>Error Occurred</h4>
                <p>${data.error}</p>
            </div>
        `;
        return;
    }
    
    let resultHtml = '<div class="result-container">';
    resultHtml += `<h4 class="result-title">Results from ${api.name}</h4>`;
    
    // Handle different API responses
    switch (api.id) {
        case 'quran':
            resultHtml += renderQuranResults(data);
            break;
        case 'wallpaper':
            resultHtml += renderWallpaperResults(data);
            break;
        case 'weather':
            resultHtml += renderWeatherResults(data);
            break;
        case 'flux':
        case 'imgscan':
        case 'remini':
        case 'removebg':
        case 'upscale':
        case 'html2image':
        case 'ssweb':
            resultHtml += renderImageResults(data);
            break;
        case 'lyrics':
            resultHtml += renderLyricsResults(data);
            break;
        case 'tts':
            resultHtml += renderAudioResults(data);
            break;
        default:
            resultHtml += renderJsonResults(data);
    }
    
    resultHtml += '</div>';
    resultContainer.innerHTML = resultHtml;
    
    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// ===== RESULT RENDERERS =====
function renderQuranResults(data) {
    if (!data.surah) return '<p class="status-message status-error">No surah data found</p>';
    
    let html = `
        <div class="quran-container">
            <div class="quran-header">
                <h4>Surah ${data.surah.name} (${data.surah.englishName})</h4>
                <p>${data.surah.englishNameTranslation} • ${data.surah.revelationType}</p>
            </div>
    `;
    
    if (data.surah.ayahs) {
        data.surah.ayahs.forEach(ayah => {
            html += `
                <div class="ayah">
                    <div class="ayah-arabic">${ayah.text}</div>
                    <div class="ayah-translation">
                        <strong>${ayah.numberInSurah}.</strong> ${ayah.translation}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    return html;
}

function renderWallpaperResults(data) {
    if (!data.wallpapers || data.wallpapers.length === 0) {
        return '<p class="status-message status-error">No wallpapers found</p>';
    }
    
    let html = '<div class="wallpaper-grid">';
    data.wallpapers.forEach((wallpaper, index) => {
        html += `
            <div class="wallpaper-item">
                <img src="${wallpaper.url}" alt="Wallpaper ${index + 1}" loading="lazy">
                <div class="wallpaper-overlay">
                    <a href="${wallpaper.url}" class="wallpaper-download" download>
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderWeatherResults(data) {
    if (!data.main) return '<p class="status-message status-error">No weather data found</p>';
    
    const icon = data.weather?.[0]?.main || 'cloud';
    const temp = Math.round(data.main.temp);
    const desc = data.weather?.[0]?.description || 'Unknown';
    
    return `
        <div class="weather-display">
            <div class="weather-icon">
                <i class="fas fa-${getWeatherIcon(icon)}"></i>
            </div>
            <div class="weather-temp">${temp}°C</div>
            <div class="weather-desc">${desc}</div>
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    Wind Speed
                    <span>${data.wind?.speed || 0} m/s</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    Humidity
                    <span>${data.main.humidity}%</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-compress-alt"></i>
                    Pressure
                    <span>${data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    `;
}

function renderImageResults(data) {
    if (!data.url) return '<p class="status-message status-error">No image data found</p>';
    
    return `
        <div style="text-align: center;">
            <img src="${data.url}" alt="Result Image" class="image-preview">
            <div style="margin-top: 20px;">
                <a href="${data.url}" class="download-btn" download>
                    <i class="fas fa-download"></i> Download Image
                </a>
            </div>
        </div>
    `;
}

function renderLyricsResults(data) {
    if (!data.lyrics) return '<p class="status-message status-error">No lyrics found</p>';
    
    return `
        <div class="lyrics-container">
            <h4>${data.title || 'Unknown Song'}</h4>
            ${data.artist ? `<p><strong>Artist:</strong> ${data.artist}</p>` : ''}
            <pre style="white-space: pre-wrap; font-family: inherit; margin-top: 15px;">${data.lyrics}</pre>
        </div>
    `;
}

function renderAudioResults(data) {
    if (!data.url) return '<p class="status-message status-error">No audio generated</p>';
    
    return `
        <div style="text-align: center;">
            <audio controls style="width: 100%; margin: 20px 0;">
                <source src="${data.url}" type="audio/mpeg">
                Your browser does not support audio playback.
            </audio>
            <div>
                <a href="${data.url}" class="download-btn" download>
                    <i class="fas fa-download"></i> Download Audio
                </a>
            </div>
        </div>
    `;
}

function renderJsonResults(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const htmlStr = jsonStr
        .replace(/"(.*?)":/g, '<span class="json-key">"$1":</span>')
        .replace(/: "(.*?)"/g, ': <span class="json-string">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="json-number">$1</span>')
        .replace(/: (true|false)/g, ': <span class="json-boolean">$1</span>')
        .replace(/: null/g, ': <span class="json-null">null</span>');
    
    return `
        <div class="json-viewer">
            <pre>${htmlStr}</pre>
        </div>
        <div style="margin-top: 15px;">
            <button class="card-btn secondary" onclick="copyToClipboard('${escapeJson(jsonStr)}')">
                <i class="fas fa-copy"></i> Copy JSON
            </button>
        </div>
    `;
}

// ===== HELPER FUNCTIONS =====
function getWeatherIcon(condition) {
    const icons = {
        'Clear': 'sun',
        'Clouds': 'cloud',
        'Rain': 'cloud-rain',
        'Snow': 'snowflake',
        'Thunderstorm': 'bolt',
        'Drizzle': 'cloud-rain',
        'Mist': 'smog',
        'Fog': 'smog'
    };
    return icons[condition] || 'cloud';
}

function escapeJson(str) {
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy', 'error');
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== QUICK ACTIONS =====
function openQuickTool(toolId) {
    const tool = API_CONFIGS.apis.find(a => a.id === toolId);
    if (tool) {
        openApiModal(toolId);
    }
}

function quickAction(apiId) {
    const api = API_CONFIGS.apis.find(a => a.id === apiId);
    if (!api) return;
    
    // For quick actions, use default values
    switch (apiId) {
        case 'weather':
            document.getElementById('modal-city').value = 'London';
            break;
        case 'calculator':
            document.getElementById('modal-expr').value = '2+2*3';
            break;
        case 'tts':
            document.getElementById('modal-text').value = 'Hello from Zaid Explorer!';
            break;
        case 'quran':
            document.getElementById('modal-surah').value = '1';
            break;
    }
    
    // Trigger form submit
    document.getElementById('api-form').dispatchEvent(new Event('submit'));
}

// ===== SEARCH FUNCTIONALITY =====
function searchTools() {
    currentSearch = dom.globalSearch.value.trim().toLowerCase();
    renderDashboard();
}

function filterByCategory(category) {
    switchCategory(category);
}

// ===== LOADING STATES =====
function showLoading() {
    dom.loadingOverlay.classList.add('active');
}

function hideLoading() {
    dom.loadingOverlay.classList.remove('active');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Search on Enter key
    dom.globalSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchTools();
    });
    
    // Real-time search
    dom.globalSearch.addEventListener('input', () => {
        currentSearch = dom.globalSearch.value.trim().toLowerCase();
        renderDashboard();
    });
    
    // Close modal on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Close modal on background click
    dom.apiModal.addEventListener('click', (e) => {
        if (e.target === dom.apiModal) closeModal();
    });
}

// ===== NOTIFICATION STYLES (Add to CSS) =====
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 12px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        z-index: 10000;
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-lg);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid var(--success-color);
    }
    
    .notification-error {
        border-left: 4px solid var(--danger-color);
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification-success i {
        color: var(--success-color);
    }
    
    .notification-error i {
        color: var(--danger-color);
    }
`;

document.head.appendChild(notificationStyles);

// ===== EMPTY STATE STYLES =====
const emptyStateStyles = document.createElement('style');
emptyStateStyles.textContent = `
    .empty-state {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        background: var(--card-bg);
        border-radius: 20px;
        border: 2px dashed var(--card-border);
    }
    
    .empty-state i {
        color: var(--text-secondary);
        margin-bottom: 20px;
    }
    
    .empty-state h3 {
        color: var(--text-primary);
        margin-bottom: 10px;
    }
    
    .empty-state p {
        color: var(--text-secondary);
        margin-bottom: 20px;
    }
`;

document.head.appendChild(emptyStateStyles);
