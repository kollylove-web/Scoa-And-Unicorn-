# Website Setup and Deployment Instructions

## Setting up the Website
1. Clone the repository:
   ```bash
   git clone https://github.com/kollylove-web/Scoa-And-Unicorn-
   ```
2. Navigate to the project directory:
   ```bash
   cd Scoa-And-Unicorn-
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Running the Website Locally
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to see the website in action.

## Deploying to GitHub Pages
1. Make sure you have the `gh-pages` package installed:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add a deployment script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the website:
   ```bash
   npm run deploy
   ```
4. Your site will be published at `https://<username>.github.io/Scoa-And-Unicorn-` after deployment.