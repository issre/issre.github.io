# ISSRE Conference Portal (Test Deployment)

The official permanent portal for the International Symposium on Software Reliability Engineering (ISSRE).

## Deployment to GitHub Pages

This project is configured to be deployed to **GitHub Pages** at `https://mpvieira.github.io/issre/`.

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys the site whenever you push to the `main` branch.

1.  **Push to GitHub:** Push your code to the `main` branch of your repository.
2.  **Enable Pages:**
    *   Go to your repository on GitHub.
    *   Navigate to **Settings** > **Pages**.
    *   Under **Build and deployment** > **Source**, select **GitHub Actions**.
3.  **Monitor Progress:** Go to the **Actions** tab to see the deployment progress.

### Manual Deployment

If you prefer to deploy manually:

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **Upload the `dist/` folder:** Upload the contents of the `dist/` folder to your GitHub repository's `gh-pages` branch or configure your repository to serve from the `dist` folder.

## Development

To run the project locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Project Structure

- `src/App.tsx`: Main application logic and UI.
- `src/constants.ts`: Conference and award data.
- `src/types.ts`: TypeScript interfaces.
- `src/index.css`: Global styles and Tailwind configuration.
