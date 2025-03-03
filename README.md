## Personal academic website 
- Built using ReactJS, Vite, tailwind, and GitHub pages.
- You're welcome to review the README file, copy, fork, and use it as needed.

## Demo

Visit the live demo: [Demo](https://vinkle.github.io/)

## Installation and deployment on the local machine

To get started, follow these steps:

1. Clone the repository: `git clone https://github.com/vinkle/vinkle.github.io.git academic_website`
2. Navigate to the project folder: `cd academic_website`
3. Checkout the main branch: `git checkout main`
4. Install dependencies: `npm install`
5. Run the development server: `npm run dev`
6. Open your browser and visit [http://localhost:5173](http://localhost:5173)


## Deployment on the GitHub pages

1. Create a GitHub Pages repository: [GitHub Pages](https://pages.github.com/)
    - Make sure to name the repository as `{username}.github.io`
2. Clone the repository: `git clone https://github.com/{username}/{username}.github.io.git`
3. Navigate to the project folder: `cd {username}.github.io`
4. Copy the contents of the `academic_website` folder to the `{username}.github.io` folder
5. Create a new branch: `git checkout -b gh-pages`
6. Install gh-pages: `npm install gh-pages --save-dev`  
7. Make sure to add the following scripts to your `package.json` file:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

8. Build and deploy the website: `npm run build && npm run deploy`
9. Navigate to the repository page: [GitHub Pages](https://pages.github.com/)
    - Click on the `Settings` tab
    - Scroll down to the `GitHub Pages` section
    - Under `Source`, select the branch you created (`gh-pages`)
    - Click on `Save`
    - You can see the deployment status in the `Actions` tab
    - Your website is now deployed at `https://{username}.github.io`

## Usage & Customization

1. Replace content with different information in the `src/Components` folder.
2. Customize the styles to match your preferences.
3. Add your news, education, work, publications, skills, and other relevant information in the appropriate sections.

## Acknowledgements

- Thanks to [Chirag Jain](https://github.com/chiragjain307/Portfolio-Website) for providing the initial template.
- Thanks to GitHub Pages for providing free hosting of the website.

## License

This project is licensed under the [MIT License](License).
