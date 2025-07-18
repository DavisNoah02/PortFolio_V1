

# Noah Dave - Personal Portfolio v1.0


A modern, responsive personal portfolio website built with React and Vite, showcasing my skills, projects, and professional experience as a web developer.

<img width="1783" height="950" alt="image" src="https://github.com/user-attachments/assets/c4b2d979-0786-42d0-88a6-56d4064ff1fe" />


## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Interactive Elements**: Engaging animations using Framer Motion
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Contact Integration**: EmailJS integration for seamless contact form functionality
- **Analytics**: Vercel Analytics and Speed Insights for performance monitoring
- **PWA Ready**: Progressive Web App capabilities with service worker
- **Loading Experience**: Custom loading screen with smooth transitions
- **Welcome Modal**: Interactive welcome experience for visitors

## 🚀 Live Demo

Visit my portfolio: [https://noa-dave.vercel.app/](https://noa-dave.vercel.app/)

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router DOM** - Client-side routing

### UI/UX Libraries
- **React Icons** - Icon library
- **Lucide React** - Beautiful icons
- **FontAwesome** - Additional icon support
- **React Tooltip** - Tooltip components
- **React Toastify** - Toast notifications

### Animation & Effects
- **Anime.js** - JavaScript animation library
- **React TSParticles** - Particle effects
- **React Simple Typewriter** - Typewriter effect
- **Chart.js & React Chart.js 2** - Data visualization

### Backend Integration
- **EmailJS** - Email service integration
- **React Google ReCaptcha** - Form protection

### Deployment & Analytics
- **Vercel** - Hosting and deployment
- **Vercel Analytics** - Website analytics
- **Vercel Speed Insights** - Performance monitoring

## 📁 Project Structure

```
PortFolio_V1/
├── public/                 # Static assets
│   ├── images/            # Project images and assets
│   ├── manifest.json      # PWA manifest
│   └── service-worker.js  # Service worker for PWA
├── src/
│   ├── components/        # React components
│   │   ├── sections/      # Main page sections
│   │   │   ├── about.jsx
│   │   │   ├── certifications.jsx
│   │   │   ├── contact.jsx
│   │   │   ├── education.jsx
│   │   │   ├── projects.jsx
│   │   │   ├── services.jsx
│   │   │   ├── skills.jsx
│   │   │   └── skills2.jsx
│   │   ├── CalModal.jsx
│   │   ├── footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── RevealOnScroll.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── socials.jsx
│   │   ├── Spotlight.jsx
│   │   ├── WelcomeModal.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/              # Data files
│   │   ├── certifications.jsx
│   │   ├── educatiuon.jsx
│   │   ├── projectsData.jsx
│   │   └── Xp.jsx
│   ├── utils/             # Utility functions
│   │   └── Particles.jsx
│   ├── App.jsx           # Main App component
│   ├── App.css           # App styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎯 Key Sections

### 1. **About Section**
- Personal introduction and background
- Professional summary
- Key highlights and achievements

### 2. **Skills Section**
- Technical skills with visual representations
- Proficiency levels using charts
- Categorized skill sets (Frontend, Backend, Tools, etc.)

### 3. **Services Section**
- Professional services offered
- Service descriptions and benefits
- Call-to-action elements

### 4. **Projects Section**
- Featured projects showcase
- Project categories (Web, Design, Others)
- Live demos and source code links
- Technology stack for each project

### 5. **Certifications Section**
- Professional certifications
- Achievement badges and credentials
- Issuing organizations and dates

### 6. **Education Section**
- Academic background
- Relevant coursework and achievements
- Educational timeline

### 7. **Contact Section**
- Contact form with EmailJS integration
- Social media links
- Professional contact information

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DavisNoah02/PortFolio_V1.git
   cd PortFolio_V1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Adding New Projects
Edit `src/data/projectsData.jsx` to add new projects:

```javascript
{
  id: 9,
  title: "Your Project",
  img: "/images/your-project.png",
  desc: "Project description",
  tech: ["React", "Node.js"],
  live: "https://your-project.com",
  code: "https://github.com/your-repo",
  category: "Web",
  status: "live",
  featured: true
}
```

### Updating Personal Information
- Edit section components in `src/components/sections/`
- Update data files in `src/data/`
- Modify styling in component files or `src/index.css`

### Changing Theme
- Modify TailwindCSS classes in components
- Update color scheme in `src/index.css`
- Customize animations in component files

## 🔧 Configuration

### EmailJS Setup
1. Create an EmailJS account
2. Configure email templates
3. Update EmailJS configuration in contact component

### Analytics Setup
- Vercel Analytics is automatically configured
- Speed Insights are enabled for performance monitoring

### PWA Configuration
- Update `public/manifest.json` for PWA settings
- Modify `public/service-worker.js` for offline functionality

## 📊 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Assets**: Compressed images and optimized bundles
- **Caching**: Service worker for offline functionality
- **Analytics**: Performance monitoring with Vercel

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **GitHub Pages**: Requires additional configuration
- **Firebase Hosting**: Configure for static site hosting

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [https://noa-dave.vercel.app/](https://noa-dave.vercel.app/)
- **GitHub**: [@DavisNoah02](https://github.com/DavisNoah02)
- **Email**: [m.davenoa@gmail.com]

---

⭐ **Star this repository if you found it helpful!**
