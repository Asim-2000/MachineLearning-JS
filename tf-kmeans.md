# Guide to tf-kmeans

## Functions

### Constructor

Takes 3 Optional parameters
    k:- Number of Clusters
    maxIter:- Max Iterations
    distanceFunction:- The Distance function Used Currently only Eucledian Distance Provided

### Train

Takes Dataset as Parameter

Performs Training on This Dataset

Sync callback function is optional

### TrainAsync

Takes Dataset as Parameter

Performs Training on This Dataset

Also takes async callback function called at the end of every iteration

### Centroids

Returns the Centroids found for the dataset on which KMeans was Trained

### Predict

Performs Predictions on the data Provided as Input

## PEER DEPENDENCIES

TensorFlow.JS

 ## Typings

As the code is originally written in TypeScript, Type Support is provided out of the box
