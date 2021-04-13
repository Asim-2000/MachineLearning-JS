# Available JS Libraries for ML

## 1. Tensorflow.js

### Setting up Tensorflow.js

1. Create a directory and open terminal in that directory
2. Run 
```bash
npm init
```
3. Choose defaults
4. Now Install tensorflow.

```bash
npm i @tensorflow/tfjs
```
5. In order to execute code in browser you need a bundler as well.(Parcel is recommended for that purpose). Run

```bash
npm install -g parcel-bundler --save-dev
```
This will include parcel as a dev dependency

6. Now Add the following in your scripts section in package.json

```javascript
"dev": "parcel <your entry file>",
"build": "parcel build <your entry file>"
```

You can check if your bowser supports WebGL by going on [WebGL](https://get.webgl.org/) and checking if the cube spins. 

By default, if your browser supports WEBGL, then you can check the backend using following code.

```javascript
console.log(tf.version)

tf.ready().then(() => {

    console.log(tf.getBackend());

});
```
### What is WebGL?

WebGL is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is fully integrated with other web standards, allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas.

## WASM Backend 

In order to set wasm backend i.e WebAssembly, then you need to follow following steps

1. Run following command in cmd

```bash
npm i @tensorflow/tfjs-backend-wasm
```

2. Import it in index.js file

```javascript
import '@tensorflow/tfjs-backend-wasm';
```
3. Now set the backend as wasm.

```javascript
tf.setBackend('wasm');
```

4. Now, you need a parcel plugin to copy the staic files inside its node_modules directory to the dist folder of application

```bash
npm i -D parcel-plugin-static-files-copy
```
This will include static-files-copy as your dev dependency

5. Now you need to add the following code in package.json file

```javascript
"staticFiles": {
    "staticPath": "./node_modules/@tensorflow/tfjs-backend-wasm/dist",
    "excludeGlob": ["**/!(*.wasm)"]
  },
```

WASM is good option if you want too target low end devices with no GPU and less processing power.

## Server Side Tensorflow

If your use case demands running your models on server side, then you can use nodeJS for that.

Run the following command on cmd

```bash
npm i @tensorflow/tfjs-node
```
Now that we have server side bindings for tensorflow, we can test it out.

1. Create a file server.js
2. Paste following code🥇

```javascript
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

console.log(tf.version);
tf.ready().then(() => {
  console.log(tf.getBackend());
});
```
*In windows, you will run into errors as it will ask for for dependencies, However in Mac Big Sur it worked perfectly fine.*

