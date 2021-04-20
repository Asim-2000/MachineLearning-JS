const tf = require('@tensorflow/tfjs');
require("@tensorflow/tfjs-node");
const KMeans = require("tf-kmeans");

// console.log(tf.version)

// tf.ready().then(() => {
//     console.log(tf.getBackend())
// })

//

const kmeans = new KMeans.default({
        k: 7,
        maxIter: 100,
        distanceFunction: KMeans.default.EuclideanDistance
});

const dataset = tf.tensor([[2, 2, 2], [5, 5, 5], [3, 3, 3], [4, 4, 4], [7, 8, 7],[9, 10, 1],[7, 8, 7],[7, 8, 7],[7, 8, 7],[71, 84, 74],[70, 80, 7],[10, 8, 7],]);
 
//ASYNC

console.log('\n\nAsyncrhonous Training');

console.log("\n\nAsync Test");


    const predictions =  kmeans.TrainAsync(
        dataset,
        // Called At End of Every Iteration
        // This function is Asynchronous
        async(iter, centroid, preds)=>{
            console.log("===");
            console.log("Iteration Count", iter);
            console.log("Centroid ", await centroid.array());
            console.log("Prediction ", await preds.array());
            console.log("===");
            // You could instead use TFVIS for Plotting Here
        }

    );

//SYNC

// console.log('\n\nSynchronous Training\n\n');

//     const predictions2 = kmeans.Train(
//         dataset
//     );
 
//     console.log("Assigned To ", predictions2.arraySync());
//     console.log("Centroids Used are ", kmeans.Centroids().arraySync());
//     console.log("Prediction for Given Value is");
//     kmeans.Predict(tf.tensor([2, 3, 2])).print();

