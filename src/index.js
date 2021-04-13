import * as tf from "@tensorflow/tfjs";


console.log(tf.version)
// tf.setBackend('cpu')
tf.ready().then(() => {

    console.log(tf.getBackend());

});


