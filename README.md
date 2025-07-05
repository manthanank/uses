# Uses - What I Use

A beautiful, responsive personal website that showcases the tools, apps, and services I use daily for development, productivity, and work. Inspired by [uses.tech](https://uses.tech).

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Hover effects, smooth transitions, and keyboard navigation
- **Accessible**: Built with accessibility in mind (ARIA labels, keyboard support)
- **Fast**: Lightweight and optimized for performance
- **PWA Ready**: Progressive Web App with offline functionality
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for better search visibility
- **Social Media Ready**: Open Graph and Twitter Card meta tags

## 🚀 Live Demo

Visit the live site: [Your Live URL Here]

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with SEO meta tags
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: No frameworks, just pure JS with PWA support
- **Google Fonts**: Inter font family for clean typography
- **PWA**: Service Worker for offline functionality
- **SEO**: Sitemap, robots.txt, and structured meta tags

## 📁 Project Structure

```tree
uses/
├── index.html          # Main HTML file
├── style.css           # Styles and theming
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest file
├── service-worker.js   # Service worker for offline functionality
├── robots.txt          # Search engine crawling rules
├── sitemap.xml         # Site structure for search engines
├── docs/               # Documentation
│   ├── CONTRIBUTING.md # Contribution guidelines
│   ├── CHANGELOG.md    # Version history
│   └── DEPLOYMENT.md   # Deployment instructions
├── assets/             # Static assets
│   ├── icons/          # PWA icons and favicon
│   └── images/         # Screenshots and other images
├── README.md           # This file
└── LICENSE             # License information
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient backgrounds that adapt to theme
- **Glass Morphism**: Modern glass-like card effects with backdrop blur
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **Typography**: Clean, readable typography with proper hierarchy
- **Color Schemes**: Carefully crafted light and dark themes

## 🔧 Customization

### Adding New Categories

To add a new category, add this HTML structure in `index.html`:

```html
<section class="category">
    <h2 class="category-title">🎯 Your Category</h2>
    <div class="items-grid">
        <div class="item" tabindex="0" role="button" aria-label="Item details">
            <h3 class="item-title">Item Name</h3>
            <p class="item-description">Item description</p>
        </div>
        <!-- Add more items as needed -->
    </div>
</section>
```

### Modifying Colors

Update the CSS variables in `style.css`:

```css
:root {
    --bg-primary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
    --text-primary: #your-text-color;
    /* ... other variables */
}
```

### Adding Search Functionality

Uncomment the search functionality in `script.js`:

```javascript
// Uncomment the line below to enable search functionality
addSearchFunctionality();
```

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/manthanank/uses.git
   cd uses
   ```

2. **Open in your browser**:

   - Simply open `index.html` in your web browser
   - Or serve it locally using a local server:

     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Customize**:
   - Edit the content in `index.html` to reflect your own tools and apps
   - Modify colors and styling in `style.css`
   - Add new features in `script.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting a Pull Request.

For detailed information about:
- **Version History**: See [CHANGELOG.md](docs/CHANGELOG.md)
- **Deployment**: See [DEPLOYMENT.md](docs/DEPLOYMENT.md)
- **Asset Management**: See [assets/README.md](assets/README.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [uses.tech](https://uses.tech)
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Contact

- **Website**: [manthanank.github.io](https://manthanank.github.io)
- **Twitter**: [@manthanank](https://twitter.com/manthanank)
- **GitHub**: [@manthanank](https://github.com/manthanank)

---

Made with ❤️ by [manthanank](https://manthanank.github.io)
