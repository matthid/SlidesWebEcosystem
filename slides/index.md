- title : HTML & JavaScript Ecosystem
- description : A brief introduction into the JavaScript ecosystem (NPM, Webpack, React)
- author : Matthias Dittrich, Johannes Baeurle
- theme : league
- transition : default

***

## Javascript Ecosystem

<img style="border-style: none" border="0" src="images/AIT-Logo_small.jpg" />

### **Matthias Dittrich & Johannes Baeurle**, AIT GmbH <br /> [@matthi\_\_d](http://twitter.com/matthi__d) [@JoBaeurle](http://twitter.com/JoBaeurle) | [github matthid](https://github.com/matthid) [github JohBa](https://github.com/JohBa) | [aitgmbh.de](http://www.aitgmbh.de/)

***

### Roadmap

 - **JavaScript**
 - NPM
 - Webpack

---

### In the beginning was...

```html
<html>
<head>
  <title>xyz</title>
  <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
  <script type='text/javascript' src='index.js'></script>
</head>
<body>

</body>
```

```js
console.log("hiho");
```

' einfaches javascript
' Einbindung File in HTML File

---

### Oldschool Way

```html 
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>xyz</title>
  <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
  <link rel='stylesheet' id='wpfb-css'  href='wp-filebase.css' type='text/css' media='all' />
  <script type='text/javascript' src='jquery.js?ver=1.12.4'></script>
  <script type='text/javascript' src='jquery-migrate.min.js?ver=1.4.1'></script>
  <script type='text/javascript' src='jquery.easing.min.js?ver=1.4.1'></script>
  <script type='text/javascript' src='jquery.mousewheel.min.js?ver=3.1.13'></script>
  <script type='text/javascript' src='wp-embed.min.js?ver=4.9.6'></script>
  <script type='text/javascript' src='moment.min.js'></script>
  .
  .
  .
  <script type='text/javascript' src='index.js'></script>
</head>
```
' Vorgehen: neue library ziehen, einbinden (bei jedem update!)
' Javascript früher: vielleicht ein paar Events, Button Clicks, kleine Änderungen am Dom
' Javascript heute: macht fast "alles", dynamisch content nachladen, etc.

---

### Managing dependencies?

- Referencing other servers?
- Downloading and adding .js files by hand?
- Scale?

<img src="images/dependency_hell.jpg" style="background: white;" width=400 />

***

### Roadmap

 - JavaScript
 - **NPM**
 - Webpack

---

### NPM (node package manager)!

- Part of a nodejs installation
- **No longer required to manually download `*.js` files**
- `packages.json`, `node_modules`

<img src="images/nodejs_npm.png" style="background: white;" width=700 />

---

### First steps with npm
```
npm init
npm install react --save
npm install webpack --save-dev
```

' init erzeugt ein einfaches packages.json file mit infos für npm
' --save installiert dependency für production
' --save-dev für development

---

### Growing ecosystem?

- Lots of small javascript files
- Speed issues (loading lots of javascript files)

---

### Import packages

```js
var react = require('react');

console.log("hiho");
```

' node löst abhängigkeit auf, kennt richtigen pfad
' funktioniert so aber erstmal nicht
' browser hat keinen zugriff zum filesystem
' module bundler, gleich. Webpack

***

### Roadmap

 - JavaScript
 - NPM
 - **Webpack**

---

### Webpack!

"bundle" the javascript application into a single file an minimize download.

tree shaking

"build system"

<img src="images/what-is-webpack.png" style="background: white;" width=600 />

---

### Managing code bases?

- No compiler, no types
- no refactoring

-> Not possible to manage huge code bases

---

### TypeScript!

- Superset of JavaScript
- Typed, feels like working with C#
- Refactoring
- Transpiles to plain JavaScript in the version you choose (ES5 is compatible with most browsers)

<img src="images/typescript.png" style="background: white;" width=200 />

---

### Modern UI Development: React and redux.js

- Separate application state from drawing
- all parts of the application are testable
- not a lot of hidden "magic"
- prevent side-effects

<img src="images/react_redux.png" style="background: white;" width=700 />

' just look at the state

---

### Demo (simple-client):

- npm
- webpack
- typescript
- React & redux.js

***

### Thank you!

* Too many sources, see Sources.txt
* Johannes, Matthias
