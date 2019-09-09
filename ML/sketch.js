let mobilenet;
let img;

function modelReady() {
  console.log('Model is Ready!!');
  mobilenet.predict(img, gotResults);
  console.log('Hi');
}

function gotResults(error, results) {
   if (error) {
     console.error(error);
   } else {
     console.log(results);
   }
}


function setup() {
   const c = createCanvas(640,480);
   background(0);
   // c.drop(gotFile);
   mobilenet = ml5.imageClassifier('MobileNet', modelReady);
   c.drop(gotFile);
}

function gotFile(file) {
  if(file.type === 'image') {
    const img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
  } else {
    console.log("Not an image file!");
  }
}
