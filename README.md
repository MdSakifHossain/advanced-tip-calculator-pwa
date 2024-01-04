# Advanced-Tip-Calculator-PWA 📱💰💸

## Overview️ 🪐✨🎉

This is a Progressive Web App (PWA) built with Vite vanilla js template.⚡ It serves a `Advanced-Tip-Calculator-PWA` with a sleek user interface. 🎨

## Key Features 🚀

-   Responsive design (not sure) 😝😜
-   Installable as a PWA 💾
-   Fully Customizable ⚙️

## Technology Stack 💪

-   HTML 🌐
-   CSS 🎨
-   Vanilla JavaScript 🧠
-   Vite ⚡

## How to Use 🤐✨

```sh
git clone <this_repo_link>
cd <this_repo>
npm install
npm run dev
```

## Customization ⚙️🛠️

<details>
    <summary>Changing Icons</summary>

## Changing Icons

> You have to change in 2 places manually.

<details>
    <summary>Favicon</summary>

### Favicon

Open `/src/js/constants/index.js`
```js
const icon_path = "path/to/your/icon.svg";
```

</details>

<details>
    <summary>Manifest</summary>

### Manifest 

Open `/manifest.json`

```json
{
    "icons": [
        {
            "src": "path/to/your/icon.svg",
            "type": "image/svg+xml",
            "sizes": "any"
        }
    ]
}
```

</details>

</details>

<details>
    <summary>Modifying Title</summary>
    
### Modifying Title

> You have to change in 2 places manually.


<details>
    <summary>Website title</summary>

### Website title 

Open `/src/js/constants/index.js`

```js
const new_title = "Your desired title";
```

</details>

<details>
    <summary>App Name</summary>

### App Name 

Open `/manifest.json` 

```json
{
	"name": "Your desired app name",
    "short_name": "Your desired app name",
}
```

</details>

</details>


<details>
    <summary>Adjusting Colors</summary>

> You have to change in 2 places manually in:


<details>
    <summary>Change website theme Color</summary>

### Change website theme Color 

Open `/src/js/constants/index.js`

```js
const theme_color = "#YourDesiredColor";
```

</details>


<details>
    <summary>Adjusting App Theme Color</summary>

### Adjusting App Theme Color

> To change the theme color, You have to change in 2 places manually.

### Change app theme Color 

Open `/manifest.json`

```json
{
    "background_color": "#YourDesiredColor",
    "theme_color": "#YourDesiredColor",
}
```

</details>


</details>

## Useful Links 🔗🔗
-   [About PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
-   [About Vite](https://vitejs.dev/)


## Contribution 👨‍💻👩‍💻🧑‍💻

Contributions are welcome! Feel free to open issues or submit pull requests.

## License 📜

This project is licensed under the MIT License.
