function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(230, 240, 250); 
  noStroke();
  fill(180, 210, 240);
  fill(70, 100, 130); //옷
  rect(150, 260, 300, 150, 50, 50, 0, 0); 
  noFill(); stroke(30); strokeWeight(6);
  arc(300, 260, 140, 140, 0, PI); 

  fill(255, 220, 195); 
  noStroke();
  arc(235, 165, 25, 40, HALF_PI, PI + HALF_PI); // 왼쪽 귀
  arc(365, 165, 25, 40, PI + HALF_PI, HALF_PI); // 오른쪽 귀

  noFill(); 
  stroke(220, 180, 160); 
  strokeWeight(2);
  arc(235, 165, 10, 20, HALF_PI, PI + HALF_PI); 
  arc(365, 165, 10, 20, PI + HALF_PI, HALF_PI); 

  noStroke(); 
  fill(255, 220, 195); //목 얼굴
  rect(280, 230, 40, 50); 
  ellipse(300, 160, 130, 160); //  얼굴

  stroke(50, 35, 25); 
  strokeWeight(4); 
  noFill();
  arc(265, 145, 32, 10, PI+0.2, TWO_PI-0.2); // 왼쪽 눈썹
  arc(335, 145, 32, 10, PI+0.2, TWO_PI-0.2); // 오른쪽 눈썹
 
  fill(255);//왼쪽 눈
  noStroke();
  ellipse(265, 160, 30, 10); 
  stroke(150, 100, 80); 
  strokeWeight(2); 
  noFill();
  arc(265, 160, 30, 14, PI, TWO_PI); 
  strokeWeight(1); 
  arc(265, 160, 30, 12, 0, PI); 
  fill(60, 40, 20); noStroke();
  ellipse(265, 160, 14, 14); 
  fill(0); 
  ellipse(265, 160, 7, 7); 
  fill(255); 
  ellipse(267, 157, 4, 4); 
  
  fill(255); // 오른쪽 눈
  noStroke(); 
  ellipse(335, 160, 30, 10);
  stroke(150, 100, 80); 
  strokeWeight(2); 
  noFill();
  arc(335, 160, 30, 14, PI, TWO_PI); 
  strokeWeight(1); 
  arc(335, 160, 30, 12, 0, PI); 
  fill(60, 40, 20); 
  noStroke(); 
  ellipse(335, 160, 14, 14); 
  fill(0); ellipse(335, 160, 7, 7); 
  fill(255); ellipse(337, 157, 4, 4); 
  
  noFill(); // 코
  stroke(180, 140, 120);
  strokeWeight(2);
  bezier(300, 155, 290, 180, 290, 200, 300, 210); 
  
  stroke(200, 120, 100);  // 입
  strokeWeight(3);
  arc(300, 220, 30, 10, 0, PI); 
  fill(40, 30, 25); //머리카락
  noStroke();  
  arc(300, 135, 140, 130, PI, TWO_PI); 
  ellipse(265, 115, 75, 75);
  ellipse(335, 115, 65, 65);
  fill(255, 220, 195);
  triangle(295, 140, 315, 140, 305, 90); 

  fill(45); 
  stroke(20); 
  strokeWeight(2);
  rect(260, 300, 80, 50, 8); // 카메라
  fill(25); 
  stroke(180); 
  strokeWeight(3);
  ellipse(300, 325, 35, 35); 
  fill(5); 
  noStroke();
  ellipse(300, 325, 20, 20); 
  fill(220); 
  rect(270, 290, 15, 10); 
  fill(255, 50, 50); 
  ellipse(320, 295, 8, 8); 
}
