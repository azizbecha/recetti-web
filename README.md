# Recetti

<p align="center">
  <img src="https://user-images.githubusercontent.com/63454940/126222387-9987ef4f-aae6-4656-b3aa-6ab575775f80.png" width="350" />
  <h3 align="center">Votre meilleur espace de découvrir et partager des recettes.</h3>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/azizbecha/recetti-web?color=f64152" />
  <img src="https://img.shields.io/github/contributors/azizbecha/recetti-web?color=f64152" />
  <img src="https://img.shields.io/github/last-commit/azizbecha/recetti-web?color=f64152" />
  <img src="https://visitor-badge.laobi.icu/badge?page_id=azizbecha.recetti-web&color=f64152" />
  <img src="https://img.shields.io/github/languages/count/azizbecha/recetti-web?color=f64152" />
  <img src="https://img.shields.io/github/languages/top/azizbecha/recetti-web?color=f64152" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?color=f64152" />
  <img src="https://img.shields.io/github/issues/azizbecha/recetti-web?color=f64152" />
  <img src="https://img.shields.io/github/issues-pr/azizbecha/recetti-web?color=f64152" />
</p>

## TO-DO

- Add FAQ
- Customize SEO tags
- Improve the UI of See Recipe components
- Add share buttons
- Add feature users can add profile picture and update their infos

## About
### Recetti is a platform used to share recipes with others.

## Development & Contributing
### 1 - To install the project & develop:

- Clone the project (git clone https://github.com/azizbecha/recetti-web.git)
- Go to the project folder (cd recetti-web)
- Create config.js file inside src/components/auth and add your firebase credentials: 

```javascript
const config = {
    apiKey: "xxxxxxx",
    authDomain: "xxxxxxx",
    databaseURL: "xxxxxxx",
    projectId: "xxxxxxx",
    storageBucket: "xxxxxxx",
    messagingSenderId: "xxxxxxx",
    appId: "xxxxxxx",
    measurementId: "xxxxxxx"
};

export default config
```

- Set up the development environment (npm install)
- Start developing (npm start)
- To build a stable & optimized release (npm run build)

### 2 - To contribute:

- Add/Make/Suggest reasonable features and/or fixes
- Send Pull Request with a good commit message & clear description
- You can also report bugs/issues in the issues section
