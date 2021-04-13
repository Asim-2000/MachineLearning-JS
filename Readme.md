# Available JS Libraries for ML

## 1. Tensorflow.js

### Setting up Tensorflow.js

1. Create a directory and open terminal in that directory
2. Run 
```
npm init

```
3. Choose defaults
4. Now Install tensorflow.

```
npm i @tensorflow/tfjs
```
5. In order to execute code in browser you need a bundler as well.(Parcel is recommended for that purpose). Run

```
npm install -g parcel-bundler --save-dev

```
This will include parcel as a dev dependency

6. Now Add the following in your scripts section in package.json

```
"dev": "parcel <your entry file>",
"build": "parcel build <your entry file>"

```

