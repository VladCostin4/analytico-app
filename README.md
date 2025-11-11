# Analytico App

React frontend application for Analytico, deployable to GitHub Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:5173`

### Build

To build for production:
```bash
npm run build
```

The build output will be in the `dist` directory.

## 📦 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update the base path** (if needed):
   - If your repository name is different from `analytico-app`, update the `base` property in `vite.config.js`
   - The base path should match your repository name: `/your-repo-name/`

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your app
   - The workflow runs on every push to the `main` branch

### Manual Deployment

You can also manually trigger the deployment:
- Go to Actions tab in your repository
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### Accessing Your Deployed App

Once deployed, your app will be available at:
```
https://your-username.github.io/analytico-app/
```

## 📁 Project Structure

```
analytico-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx     # Landing page component
│   │   └── LandingPage.css     # Landing page styles
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **GitHub Actions** - CI/CD for deployment

## 📝 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 License

MIT
