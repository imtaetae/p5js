let isSaved = false;

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  let isFlashing = (keyIsPressed && (key === ' ' || keyCode === 32)); 
  if (isFlashing) { // 1. 배경 및 플래시 효과
    if (random(10) < 5) {
      background(255, 255, 255);
    } else {
      background(255, 255, 180);
    }
    noStroke();
    fill(255, 255, 100, 180);
    for (let i = 0; i < 40; i++) {
      ellipse(random(width), random(height), random(5, 25));
    }
    fill(255, 255, 100, 80);
    ellipse(300, 325, random(500, 700));
    fill(255, 255, 255, 120);
    ellipse(300, 325, random(100, 200));
  } else {
    background(230, 240, 250);
  }

  noStroke();
  
  if (isFlashing) {
    let colorIndex = floor(frameCount / 5) % 7; 
    if (colorIndex === 0) { fill(255, 100, 100); }
    else if (colorIndex === 1) { fill(255, 180, 100); }
    else if (colorIndex === 2) { fill(255, 255, 150); }
    else if (colorIndex === 3) { fill(150, 255, 150); }
    else if (colorIndex === 4) { fill(70, 100, 130); }
    else if (colorIndex === 5) { fill(100, 100, 200); }
    else if (colorIndex === 6) { fill(180, 150, 255); }
  } else {
    fill(70, 100, 130);
  }
  rect(150, 260, 300, 150, 50, 50, 0, 0);  // 옷 그리기
  noFill(); stroke(30); strokeWeight(6); arc(300, 260, 140, 140, 0, PI); // 스트랩

  // 얼굴 및 신체 구조
  fill(255, 220, 195); noStroke();
  arc(235, 165, 25, 40, HALF_PI, PI + HALF_PI); 
  arc(365, 165, 25, 40, PI + HALF_PI, HALF_PI); 
  noFill(); stroke(220, 180, 160); strokeWeight(2);
  arc(235, 165, 10, 20, HALF_PI, PI + HALF_PI);
  arc(365, 165, 10, 20, PI + HALF_PI, HALF_PI);
  
  noStroke();
  fill(255, 220, 195); rect(280, 230, 40, 50); 
  ellipse(300, 160, 130, 160); 

  // 눈썹
  stroke(50, 35, 25); strokeWeight(4); noFill();
  arc(265, 145, 32, 10, PI+0.2, TWO_PI-0.2); 
  arc(335, 145, 32, 10, PI+0.2, TWO_PI-0.2); 

  // 시선 처리 (마우스 따라 움직임)
  let eyeMoveX = (mouseX - 300) * 0.02;
  let eyeMoveY = (mouseY - 200) * 0.01;
  fill(255); noStroke(); ellipse(265, 160, 30, 10); 
  fill(60, 40, 20); ellipse(265 + eyeMoveX, 160 + eyeMoveY, 14, 14); 
  fill(0); ellipse(265 + eyeMoveX, 160 + eyeMoveY, 7, 7);
  fill(255); ellipse(267 + eyeMoveX, 157 + eyeMoveY, 4, 4);
  
  fill(255); noStroke(); ellipse(335, 160, 30, 10); 
  fill(60, 40, 20); ellipse(335 + eyeMoveX, 160 + eyeMoveY, 14, 14); 
  fill(0); ellipse(335 + eyeMoveX, 160 + eyeMoveY, 7, 7);
  fill(255); ellipse(337 + eyeMoveX, 157 + eyeMoveY, 4, 4);

  // 코 및 입
  noFill(); stroke(180, 140, 120); strokeWeight(2); bezier(300, 155, 290, 180, 290, 200, 300, 210); 
  if (mouseIsPressed) {
    fill(255, 150, 150); stroke(200, 100, 100); arc(300, 215, 40, 25, 0, PI); 
  } else {
    noFill(); stroke(200, 120, 100); arc(300, 220, 30, 10, 0, PI); 
  }

  // 머리카락
  fill(40, 30, 25); noStroke(); 
  arc(300, 135, 140, 130, PI, TWO_PI);
  ellipse(265, 115, 75, 75); ellipse(335, 115, 65, 65);
  fill(255, 220, 195); triangle(295, 140, 315, 140, 305, 90);

  // 카메라
  fill(45); stroke(20); strokeWeight(2); rect(260, 300, 80, 50, 8); 
  fill(25); stroke(180); strokeWeight(3); ellipse(300, 325, 35, 35); 
  fill(5); noStroke(); ellipse(300, 325, 20, 20); 
  
  if (isFlashing) {
    fill(255, 255, 100); stroke(255, 255, 0); strokeWeight(4);
  } else {
    fill(220); stroke(20); strokeWeight(2);
  }
  rect(270, 290, 15, 10); 
  noStroke(); fill(255, 50, 50); ellipse(320, 295, 8, 8); 

  // 'S' 키로 GIF 저장
  if (keyIsPressed && (key === 's' || key === 'S') && !isSaved) {
    saveGif('my_flash_caricature', 3);
    isSaved = true; 
  }
}
