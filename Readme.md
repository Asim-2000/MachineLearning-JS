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