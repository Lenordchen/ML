let mobilenet;
let img;

function modelReady() {
  console.log('Model is Ready!!');
  // mobilenet.classify(img, gotResults);
  console.log('Hi');
}

function gotResults(error, results) {
   if (error) {
     console.error(error);
   } else {
     console.log(results);
     const resultText = results[0].label;
     const prob = results[0].confidence;
     select('#result').html(resultText);
     select('#probability').html(nf(results[0].confidence, 0, 2));


   }
}


function setup() {
   const c = createCanvas(640,480);
   background(210);
   // c.drop(gotFile);
   mobilenet = ml5.imageClassifier('MobileNet', modelReady);
   c.drop(gotFile);
}

function draw() {
  fill(250);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas.', width / 2, height / 2);
  noLoop();
}

function gotFile(file) {
  if(file.type === 'image') {
    const img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
    mobilenet.classify(img, gotResults);
  } else {
    console.log("Not an image file!");
  }
}
