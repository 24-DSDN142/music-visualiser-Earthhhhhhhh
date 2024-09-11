
// vocal, drum, bass, and other are volumes ranging from 0 to 100
// Particle x values
let particleOne = 1;
let particleTwo = 1;
let particleThree = 1;
let particleFour = 1;
let particleFive = 1;
let particleSix = 1;

let cloudOne = 1;
let cloudTwo = 1;
let cloudThree = 1;
let cloudFour = 1;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(9, 12, 36)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  // Stars
  stroke(255);
  strokeWeight(3);
  point(20, 50);
  point(300, 50);
  point(400, 70);
  point(800, 200);
  point(120, 90);
  point(700, 70);
  point(1100, 20);
  point(950, 150);
  point(500, 40);
  point(1000, 180);
  point(50, 290);
  point(70, 170);
  point(100, 100);
  point(900, 280);
  point(1200, 100);
  point(1100, 200);
  point(1070, 120);
  point(500, 100);
  point(600, 250);
  point(550, 190);
  point(800, 150);
  point(900, 30);
  point(400, 200);
  point(250, 150);
  

  noStroke();

  // Clouds
  // Cloud 1
  fill(230, 230, 230, 100);
  ellipse(cloudOne + 150, 100, 200, 50);

  cloudOne = cloudOne + .3;
  if(cloudOne > 1130){ 
    cloudOne = -150;
  }

  // Cloud 2
  fill(230, 230, 230, 100);
  ellipse(cloudTwo + 400, 50, 400, 80);

  cloudTwo = cloudTwo + .3;
  if(cloudTwo > 880){ 
    cloudTwo = -400;
  }

  // Cloud 3
  fill(230, 230, 230, 100);
  ellipse(cloudThree + 900, 100, 200, 50);

  cloudThree = cloudThree + .3;
  if(cloudThree > 380){ 
    cloudThree = -900;
  }

  // Cloud 4
  fill(230, 230, 230, 100);
  ellipse(cloudFour + 1100, 30, 200, 50);

  cloudFour = cloudFour + .3;
  if(cloudFour > 180){ 
    cloudFour = -1100;
  }



  // Vocal - ellipse
  let vocalMapOne = map(vocal, 0 , 100, 700, 1200);
  fill(252, 90, 148, 113);
  ellipse(640, 580, 1280, vocalMapOne);
  let vocalMapTwo = map(vocal, 0 , 100, 300, 900);
  fill(254, 207, 115, 150);
  ellipse(640, 580, 1280, vocalMapTwo);

  //drum 
  let drumMap = map(drum, 0, 100, 20, 32);

  for (let i = 1; i <= drumMap; i++) {
    let rectRiseOne = 600 - i * 18;

    fill(28, 31, 28);
    rect(200, rectRiseOne, 150, drumMap);
    rect(900, rectRiseOne, 200, drumMap);

    stroke(28, 31, 28);
    strokeWeight(5);
    fill(184, 204, 53);
    rect(165, rectRiseOne, 23, drumMap);
    rect(235, rectRiseOne, 23, drumMap);

    rect(840, rectRiseOne, 23, drumMap);
    rect(900, rectRiseOne, 23, drumMap);
    rect(960, rectRiseOne, 23, drumMap);
    noStroke();
  }

  for (let i = 1; i <= drumMap; i++) {
    let rectRiseTwo = 690 - i * 18;
    fill(28, 31, 28);
    rect(380, rectRiseTwo, 170, drumMap);
    rect(730, rectRiseTwo, 100, drumMap);
    
    stroke(28, 31, 28);
    strokeWeight(5);
    fill(184, 204, 53);
    rect(340, rectRiseTwo, 23, drumMap);
    rect(420, rectRiseTwo, 23, drumMap);

    rect(710, rectRiseTwo, 23, drumMap);
    rect(750, rectRiseTwo, 23, drumMap);
    noStroke();
  }

  for (let i = 1; i <= drumMap; i++) {
    let rectRiseThree = 600 - i * 18;
    fill(28, 31, 28);
    rect(1100, rectRiseThree, 100, drumMap);

    stroke(28, 31, 28);
    strokeWeight(5);
    fill(184, 204, 53);
    rect(1080, rectRiseThree, 23, drumMap);
    rect(1120, rectRiseThree, 23, drumMap);
    noStroke();
  }



  // Floor
  //fill(20);
  //rect(0, 750, 2560, 750); // 2560x x 1260
  // Path
  fill(9, 33, 9);
  rect(0, 645, 2560, 150);

  let otherMap = map(other, 0, 100, 50, 130);
  
  //Lamp expanding ellipse
  fill(207, 219, 127, 100);
  ellipse(100, 415, otherMap, otherMap);
  ellipse(300, 415, otherMap, otherMap);
  ellipse(500, 415, otherMap, otherMap);
  ellipse(700, 415, otherMap, otherMap);
  ellipse(900, 415, otherMap, otherMap);
  ellipse(1100, 415, otherMap, otherMap);

  // Lamp lights
  fill(235, 226, 70)
  rect(100, 415, 18, 30);
  rect(300, 415, 18, 30);
  rect(500, 415, 18, 30);
  rect(700, 415, 18, 30);
  rect(900, 415, 18, 30);
  rect(1100, 415, 18, 30);

  // Lamp 1
  fill(20);
  rect(100, 550, 20, 40);
  rect(100, 480, 10, 100);
  rect(100, 430, 20, 10);
  triangle(80, 400, 120, 400, 100, 380)

  // lamp 2
  rect(300, 550, 20, 40);
  rect(300, 480, 10, 100);
  rect(300, 430, 20, 10);
  triangle(280, 400, 320, 400, 300, 380)

  // lamp 3
  rect(500, 550, 20, 40);
  rect(500, 480, 10, 100);
  rect(500, 430, 20, 10);
  triangle(480, 400, 520, 400, 500, 380)

  // lamp 4
  rect(700, 550, 20, 40);
  rect(700, 480, 10, 100);
  rect(700, 430, 20, 10);
  triangle(680, 400, 720, 400, 700, 380)
  
  //lamp 5
  rect(900, 550, 20, 40);
  rect(900, 480, 10, 100);
  rect(900, 430, 20, 10);
  triangle(880, 400, 920, 400, 900, 380)

  //lamp 6
  rect(1100, 550, 20, 40);
  rect(1100, 480, 10, 100);
  rect(1100, 430, 20, 10);
  triangle(1080, 400, 1120, 400, 1100, 380)

  //Bass
  let bassMap = map(bass, 0 ,100, 30, 60);
  
  // Particle 1
  // Expanding ellipse  
  fill(207, 207, 89, 100); // alpha transperency
  ellipse(particleOne + 200, 75, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleOne + 200, 75, 30, 30);

  particleOne = particleOne + 1;
  if(particleOne > 1080){ 
    particleOne = -200;
  }

  // particle 2
  // Expanding ellipse  
  fill(207, 207, 89, 100);
  ellipse(particleTwo + 800, 220, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleTwo + 800, 220, 30, 30);

  particleTwo = particleTwo + 1;
  if(particleTwo > 480){ 
    particleTwo = -800;
  }
  
  // Particle 3
  // Expanding ellipse  
  fill(207, 207, 89, 100);
  ellipse(particleThree + 700, 50, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleThree + 700, 50, 30, 30);

  particleThree = particleThree + 1;
  if(particleThree > 580){ 
    particleThree = -700;
  }

  // Particle 4
  // Expanding ellipse  
  fill(207, 207, 89, 100);
  ellipse(particleFour + 1050, 80, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleFour + 1050, 80, 30, 30);

  particleFour = particleFour + 1;
  if(particleFour > 280){ 
    particleFour = -1050;
  }

  // Particle 5
  // Expanding ellipse  
  fill(207, 207, 89, 100);
  ellipse(particleFive + 20, 250, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleFive + 20, 250, 30, 30);

  particleFive = particleFive + 1;
  if(particleFive > 1260){ 
    particleFive = -20;
  }

  // Particle 6
  // Expanding ellipse  
  fill(207, 207, 89, 100);
  ellipse(particleSix + 500, 175, bassMap, bassMap);
  // static ellipse
  fill(243, 210, 32);
  ellipse(particleSix + 500, 175, 30, 30);

  particleSix = particleSix + 1;
  if(particleSix > 780){ 
    particleSix = -500;
  }

}