# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React, showcasing my professional experience, projects, hobby, and skills. Designed with a LinkedIn-inspired aesthetic and deployed on Vercel.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://www.sathwik.dev)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🌟 Features

### 📱 Fully Responsive Design

- Optimized for mobile, tablet, and desktop devices
- Smooth animations and transitions
- Professional LinkedIn-inspired UI

### 🎯 Sections

- **Home** - Introduction and quick navigation
- **About** - Personal story and technical skills
- **Education** - Academic background and certifications
- **Experience** - Professional work history with detailed achievements and certifications
- **Projects** - Portfolio of technical projects
- **Hobby** - Photography showcase with image viewer modal
- **Contact** - Functional contact form with email integration

### ✨ Key Highlights

- 🎨 Modern, clean design with Tailwind CSS
- 🔄 Smooth page transitions with React Router
- 📧 Working contact form with EmailJS integration
- 🖼️ Interactive photo gallery with full-screen viewer
- 📊 Scrollable cards for experiences, projects, and photos
- 🏆 Awards and certifications showcase
- 📱 Mobile-first responsive design
- ⚡ Fast loading with Vite build system

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Vite** - Build tool and dev server

### Services

- **EmailJS** - Contact form email delivery
- **Vercel** - Hosting and deployment
- **GitHub** - Version control
- **Porkbun** - Domain Registration

## 📦 Installation

### Prerequisites

- Node.js (v20.17.0 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Sathwik-Bharadwaj/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_TO_EMAIL=your.email@gmail.com
```

4. **Add your images**
   Place your photos in `src/assets/` folder and update imports in components.

5. **Run development server**

```bash
npm run dev
```

6. **Build for production**

```bash
npm run build
```

7. **Preview production build**

```bash
npm run preview
```

## 🔧 Configuration

### EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service (Gmail recommended)
3. Create email template with variables: `from_name`, `from_email`, `subject`, `message`, `how_found`
4. Get Service ID, Template ID, and Public Key
5. Add to `.env` file

### Vercel Deployment

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Custom Domain

1. Add domain in Vercel project settings
2. Configure DNS records as per Vercel instructions
3. SSL certificate auto-generated

## 📁 Project Structure

```
portfolio/
├── public/              # Static files
├── src/
│   ├── assets/         # Images and media files
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   ├── Components/     # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollableCards.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Photography.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (gitignored)
├── .gitignore
├── vercel.json         # Vercel configuration for SPA routing
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Update in `src/pages/Contact.jsx`
2. **Experience**: Modify experiences array in `src/pages/Experience.jsx`
3. **Projects**: Update projects array in `src/pages/Projects.jsx`
4. **Education**: Edit education data in `src/pages/Education.jsx`
5. **Photography**: Replace photos in `src/assets/` and update imports

### Styling

- **Colors**: Modify in `tailwind.config.js`
- **Fonts**: Update in `src/index.css`
- **Layout**: Adjust component styling in respective files

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. Push to GitHub
2. Vercel auto-deploys on every push to main branch

### Manual Deployment

```bash
npm run build
vercel --prod
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ on all metrics
- 📦 **Bundle Size**: Optimized with Vite
- 🖼️ **Image Optimization**: Responsive images with proper sizing
- 🔒 **Security**: Environment variables for sensitive data

## 🐛 Troubleshooting

### Issue: Routes return 404 on direct access

**Solution**: Ensure `vercel.json` is present in root directory with SPA rewrites configuration.

### Issue: Images not loading in production

**Solution**: Verify images are imported correctly and placed in `src/assets/` folder.

### Issue: Contact form not sending emails

**Solution**: Check EmailJS credentials in environment variables and verify template configuration.

### Issue: Build fails

**Solution**:

- Check Node.js version (v20.17.0+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Verify all dependencies are installed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sathwik Bharadwaj Udupi**

- Website: [www.sath-wik.dev](https://www.sath-wik.dev)
- LinkedIn: [sathwik-bharadwaj](https://linkedin.com/in/sathwik-bharadwaj)
- GitHub: [@Sathwik-Bharadwaj](https://github.com/Sathwik-Bharadwaj)
- Email: u.sathwik1@gmail.com

## 🙏 Acknowledgments

- Design inspiration from LinkedIn
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/) (for placeholders in Projects section)
- Built with guidance from [React Documentation](https://react.dev/)

## 📈 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add animations with Framer Motion
- [ ] Integrate Google Analytics
- [ ] Add testimonials section
- [ ] Add project case studies with detailed write-ups

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Contact

Have questions or want to collaborate? Reach out through:

- Portfolio contact form: [www.sath-wik.dev/contact](https://www.sath-wik.dev/contact)
- Email: u.sathwik1@gmail.com

---

⭐ **If you found this helpful, please give it a star!**

Made with ❤️ by [Sathwik Bharadwaj]
