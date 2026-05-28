function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('animation', 3);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // ── 배경 ──────────────────────────────────────────────
  background(20, 20, 35);
  noStroke();

  // ── 달: 크기 변화 + 색상 변화 ────────────────────────
  let glowSize = 100 + sin(frameCount * 0.03) * 15;
  let t = (sin(frameCount * 0.01) + 1) / 2;
  let cA = color(255, 255, 200);
  let cB = color(180, 210, 255);
  let glowCol = lerpColor(cA, cB, t);

  fill(red(glowCol), green(glowCol), blue(glowCol), 50);
  circle(500, 80, glowSize);
  fill(240, 240, 180, 50);
  circle(500, 80, 70);
  fill(255, 250, 190, 255);
  circle(500, 80, 50);

  // ── 지면 + 수평선 ─────────────────────────────────────
  fill(15, 20, 35);
  rect(0, 200, 600, 200);
  stroke(255, 200, 100, 100);
  strokeWeight(2);
  line(0, 200, 600, 200);
  noStroke();

  // ── 건물 ──────────────────────────────────────────────
  fill(255, 195, 40, 210);
  rect(230, 140, 140, 40);
  fill(250, 190, 40, 190);
  rect(260, 90, 80, 30);
  fill(40, 30, 30);
  rect(220, 180, 160, 20);
  rect(230, 140, 10, 40);
  rect(270, 140, 10, 40);
  rect(320, 140, 10, 40);
  rect(360, 140, 10, 40);
  fill(50, 40, 45);
  quad(190, 140, 410, 140, 370, 120, 230, 120);
  quad(240, 90, 360, 90, 330, 60, 270, 60);

  // ── 나무 ──────────────────────────────────────────────
  fill(30, 40, 30);
  triangle(50, 200, 150, 200, 100, 120);
  circle(100, 140, 60);
  fill(25, 35, 25);
  triangle(450, 200, 580, 200, 515, 100);

  // ── 왼쪽 배 + 사람 ───────────────────────────────────
  fill(60, 40, 30);
  quad(100, 320, 180, 320, 170, 350, 110, 350);
  fill(40, 50, 70);
  rect(130, 290, 20, 30);
  fill(255);
  circle(140, 280, 15);
  fill(255, 100, 50);
  rect(135, 300, 20, 2);
  noFill();
  stroke(255, 100, 50);
  strokeWeight(3);
  arc(145, 300, 20, 40, radians(-90), radians(90));
  noStroke();

  // ── 오른쪽 배 + 사람 ─────────────────────────────────
  fill(60, 40, 30);
  quad(420, 320, 500, 320, 490, 350, 430, 350);
  fill(40, 50, 70);
  rect(450, 290, 20, 30);
  fill(255);
  circle(460, 280, 15);
  fill(255, 100, 50);
  rect(455, 300, 20, 2);
  noFill();
  stroke(255, 100, 50);
  strokeWeight(3);
  arc(455, 300, 20, 40, radians(90), radians(270));
  noStroke();

  // ── 활 (정적) ─────────────────────────────────────────
  fill(255);
  rect(145, 299, 25, 2);
  fill(255, 50, 50);
  triangle(170, 296, 170, 304, 176, 300);
  fill(255);
  rect(430, 299, 25, 2);
  fill(255, 50, 50);
  triangle(430, 296, 430, 304, 424, 300);

  // ── 날아가는 화살: 기본 애니메이션 ──────────────────
  let cycle = frameCount % 240;
  let prog, sx, sy, ex, ey;

  if (cycle < 120) {
    prog = cycle / 120.0;
    sx = 176; sy = 300; ex = 424; ey = 300;
  } else {
    prog = (cycle - 120) / 120.0;
    sx = 424; sy = 300; ex = 176; ey = 300;
  }

  let ax = lerp(sx, ex, prog);
  let ay = lerp(sy, ey, prog) - sin(prog * PI) * 25;
  let angle = atan2((ey - sy) - sin(prog * PI) * 25 * cos(prog * PI), ex - sx);

  push();
  translate(ax, ay);
  rotate(angle);
  fill(255, 230, 120);
  noStroke();
  rect(-8, -1, 16, 2);
  fill(180, 230, 255);
  triangle(-8, -3, -8, 3, -14, 0);
  fill(200, 200, 200);
  triangle(8, -2, 8, 2, 14, 0);
  pop();

  // ── 물 반사 건물: 색상 일렁임 ─────────────────────────
  let shimmer = sin(frameCount * 0.05) * 12;
  fill(255, 200, 50, 80 + shimmer);
  rect(230, 220, 140, 40);
  rect(260, 280, 80, 30);
  fill(40, 30, 30, 120);
  rect(220, 200, 160, 20);
  rect(230, 220, 10, 40);
  rect(270, 220, 10, 40);
  rect(320, 220, 10, 40);
  rect(360, 220, 10, 40);
  fill(50, 40, 45, 120);
  quad(190, 260, 410, 260, 370, 280, 230, 280);
  quad(240, 310, 360, 310, 330, 340, 270, 340);
}
