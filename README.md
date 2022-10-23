# DeMystify 
![0](https://user-images.githubusercontent.com/73429989/197376959-332cc585-c1b4-4d90-8b61-7a52e2517574.png)

## Abstract 
Deepfakes may be used maliciously as a source of misinformation, manipulation, harassment, and persuasion. Identifying manipulated media is a technically demanding and rapidly evolving challenge that requires collaborations across the entire tech industry and beyond.

## What it does
DeMystify uses deep learning to assist in determining if a face is real or not. In the desired field, the user must enter the input picture. After the user inputs the image, the googlenet model processes it and delivers the results as real and fake confidence. Fastapi sends the result to the browser as a response, displaying both real and fake confidence in a progress bar. In order to aid in identification, DeMystify helps to forecast the real and fake face.

![3](https://user-images.githubusercontent.com/73429989/197376943-81f35a15-af11-4689-ad4c-7cd657ab6343.png) 
![1](https://user-images.githubusercontent.com/73429989/197376938-623215a9-ac97-4a86-8d2c-0f8fe1450726.png)
![2](https://user-images.githubusercontent.com/73429989/197376941-8d9737be-fdf4-4c93-9447-97e7b964dcdc.png)


## How we built it
We had 3 phase in our project . 
- The first phase is brainstorming where we went across various articles , research papers and real life incidents . Its where we came across this idea. 
- The second phase is planning where we decided our techstack for frontend , backend , dataset to train the model and the neural network model to be used for this project. 
- The third phase is the implementation where we created our GUI using React JS , API using Fastapi and Deep learning model was trained using deep fake dataset in Pytorch. 

## Architecture of DeMystify
![architecture](https://user-images.githubusercontent.com/73429989/197374896-a9467f9c-3639-4ea9-be95-d9a3ceabc710.png)

## Deep Learning Model Phase 
![Screenshot from 2022-10-23 09-44-04](https://user-images.githubusercontent.com/73429989/197374897-3033ad35-7409-4d4d-a3a8-013b6f155fe0.png)

## GoogleNet :
![architecture](https://production-media.paperswithcode.com/models/googlenet_eq5hRP7.png)
 
Paper : [https://arxiv.org/pdf/1409.4842v1.pdf](https://arxiv.org/pdf/1409.4842v1.pdf)

## Challenges we ran into
The deep learning model we decided was GoogleNet. We had to customize some of the GoogleNet features according to our product. Creating API using FastAPI framework to handle request response for the Deep Learning Model. Making API calls using Axios library from React . Processing the desired request by the model within less time span .

## Accomplishments that we're proud of
Using Googlenet model for identifying deep fake faces. Customizing the Googlenet model according to our project . Adjust parameters to bring a better accuracy for the model. Creating a desired GUI . Building an API using Fastapi to handle request response cycle . 

## What we learned
Using pretrained Neural Network models. Customizing the pretrained neural network according to our product.  Usage of FastAPI . Creating GUI using React JS .

## What's next for DeMystify
Implement DeMystify in various platforms such as mobile application . Introduce as browser extension such that various users can find fake and real faces within a single click . Improving accuracy of the Deep Learning by tuning.
