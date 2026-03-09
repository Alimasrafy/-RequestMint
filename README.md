# Live Website Development Project

This is a Vite + React + Tailwind project configured to build as a single-page application and to be deployed to GitHub Pages.

## 🚀 Quick Start

1. **Clone this repository**
   ```sh
   git clone https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   cd <REPO-NAME>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [`http://localhost:5173`](http://localhost:5173) in your browser.

4. **Build for production**
   ```sh
   npm run build
   ```
   The optimized files are output to `dist/`.

5. **Preview the production build locally**
   ```sh
   npm run preview
   ```

## 📦 Deploy to GitHub Pages

This project uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package to publish the contents of the `dist/` folder.

1. Set the `homepage` field in `package.json` to:
   ```json
   "homepage": "https://<YOUR-USERNAME>.github.io/<REPO-NAME>"
   ```

2. Make sure the `predeploy` and `deploy` scripts exist in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     // ...other scripts
   }
   ```

3. Install the `gh-pages` dependency (already added to `devDependencies`):
   ```sh
   npm install --save-dev gh-pages
   ```

4. Deploy:
   ```sh
   npm run deploy
   ```

After a successful deploy, your site will be available at the URL specified in `homepage`.

> **Note:** If you're deploying to a repository with a custom domain or using a different branch for GitHub Pages, adjust the settings accordingly in your repository's **Settings → Pages** section.

> **Tip:** For project pages (not user/organization pages) you may need a `<base>` tag in `index.html` pointing to your repo name, e.g. `<base href="/your-repo-name/">`. Vite can also be configured using the `base` option in `vite.config.ts`.

## 🧰 Additional Notes

- The project uses [`vite-plugin-singlefile`](https://github.com/ivanhofer/vite-plugin-singlefile) to generate a single `index.html` file containing all JS/CSS, which can be handy for static hosting.
- Add any other files or configurations (e.g., `.env.example`) as needed before pushing to GitHub.

## ⚙️ Useful Commands

| Command            | Description                    |
|--------------------|--------------------------------|
| `npm run dev`      | Start dev server              |
| `npm run build`    | Create production build       |
| `npm run preview`  | Preview production locally    |
| `npm run deploy`   | Build & publish to GitHub Pages |

---

Feel free to customize this README with screenshots, additional instructions, or other project details.