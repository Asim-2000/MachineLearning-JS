const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

console.log(tf.version);
tf.ready().then(() => {
  console.log(tf.getBackend());
});



