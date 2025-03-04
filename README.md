# 🌐 Personal Academic Website  

🚀 **Built with**: ReactJS, Vite, Tailwind CSS, and GitHub Pages.  
📖 Feel free to explore the **README**, copy, fork, and use it as needed!  

---

## 🎯 Live Demo  

🔗 **Check it out here**: [Live Demo](https://vinkle.github.io/)  

---

## ⚙️ Installation & Local Deployment  

Follow these steps to set up the project on your local machine:  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/vinkle/vinkle.github.io.git academic_website
cd academic_website
git checkout main
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Run the Development Server  
```sh
npm run dev
```
🌍 Open your browser and visit: [http://localhost:5173](http://localhost:5173)  

---

## 🎨 Usage & Customization  

✅ Edit content in the `src/Components` folder.  
🎨 Modify styles to suit your design preferences.  
📝 Add your **news, education, work, publications, skills**, and more!  

---

## 🚀 Deploying on GitHub Pages  

Follow these steps to publish your website using GitHub Pages:  

### 1️⃣ Create a GitHub Pages Repository  
- Visit [GitHub Pages](https://pages.github.com/)  
- Name the repository as `{username}.github.io`  

### 2️⃣ Clone the Repository  
```sh
git clone https://github.com/{username}/{username}.github.io.git
cd {username}.github.io
```

### 3️⃣ Copy Website Files  
```sh
cp -r ../academic_website/* .
```

### 4️⃣ Create & Switch to Deployment Branch  
```sh
git checkout -b gh-pages
```

### 5️⃣ Install `gh-pages` Package  
```sh
npm install gh-pages --save-dev
```

### 6️⃣ Add Deployment Scripts  
Modify your `package.json` file:  

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 7️⃣ Build & Deploy  
```sh
npm run build && npm run deploy
```

### 8️⃣ Configure GitHub Pages  
- Go to your **GitHub Repository → Settings → GitHub Pages**  
- Under **Source**, select the `gh-pages` branch and **Save**  
- Check the **Actions** tab for deployment status  

🌍 Your website is now live at `https://{username}.github.io`  

---


## 🙌 Acknowledgements  

💡 Special thanks to:  
- [Chirag Jain](https://github.com/chiragjain307/Portfolio-Website) for the initial template.  
- **GitHub Pages** for free website hosting.  

---

## 📜 License  

📝 This project is licensed under the **[MIT License](License)**.  
