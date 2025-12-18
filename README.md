# Portfolio

A modern, interactive portfolio website built with React and Vite, featuring smooth animations, a twinkling background effect, and a clean, responsive design.

## ✨ Features

- **Smooth Scrolling**: Implemented using Lenis for buttery-smooth scroll experience
- **Twinkling Background**: Dynamic animated background with twinkling stars effect
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Project Showcase**: Interactive project cards with filtering and detailed views
- **Visitor Tracking**: Integrated with Supabase for visitor analytics
- **Modern UI/UX**: Clean and minimalist design with Tailwind CSS
- **Social Media Integration**: Quick access to social profiles
- **Coffee Support**: Built-in support link for coffee donations

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 5.4.11
- **Styling**: Tailwind CSS 4.1.16
- **Routing**: React Router DOM 7.10.1
- **Icons**: React Icons 5.5.0
- **Smooth Scrolling**: Lenis 1.3.15
- **Backend/Analytics**: Supabase 2.86.2
- **Linting**: ESLint 9.36.0

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-org/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the frontend directory with:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PAY_LINK=your_coffee_payment_link
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── bio.jsx
│   │   ├── Footer.jsx
│   │   ├── hero.jsx
│   │   ├── Projects.jsx
│   │   ├── skills.jsx
│   │   ├── SocialMedia.jsx
│   │   └── TwinklingBackground.jsx
│   ├── config/         # Configuration files
│   ├── data/           # JSON data files
│   │   └── projects.json
│   ├── pages/          # Page components
│   │   └── AllProjects.jsx
│   ├── utils/          # Utility functions
│   │   └── visitorTracking.js
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Components

- **Hero**: Landing section with profile picture and location
- **Bio**: Personal introduction and background
- **Skills**: Technical skills showcase
- **Projects**: Featured projects with live links and GitHub repositories
- **SocialMedia**: Links to social media profiles
- **TwinklingBackground**: Animated starfield background
- **Footer**: Contact information and copyright

## 🌐 Deployment

The project is configured for deployment on Vercel. See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

For Supabase setup, refer to [SUPABASE_SETUP.md](./SUPABASE_SETUP.md).

## 📊 Projects Featured

The portfolio showcases various projects including:
- **BlogZone-CLG**: Modern blogging platform
- **Rixn Tweaks UI**: Customizable UI design system
- **Critic Score**: Rating and review application
- **CityCare**: Cleanliness awareness project
- **Eshoply**: E-commerce platform
- **Shorrtly**: URL shortening service

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Manpreet**
- Location: Hoshiarpur, Punjab, India

---

Built with ❤️ using React and Vite
