let d = [1];


function setup() {
    let size = window.innerWidth || document.body.clientWidth;
    if (size < 600) {
    size = size*0.96;
    } else {
        size = 600;
    }
  let c = createCanvas(size,size*(1.5));
  c.parent("canvas-container");
  stroke(0);
  frameRate(20);
  noLoop();
  strokeWeight(width / 200);
}

class Design {
  constructor(style, shape, bg, ff) {
    this.s = style;
    this.h = shape;
    this.b = bg;
    this.f = ff;
  }

  update() {

    fill(255);
    rect(0, 0, width, height);
    stroke(0);

    rectMode(CENTER);
    ellipseMode(CENTER);
    
    // background

    if (this.b == 0) {
      //vertical lines
      for (var b = 0; b < width; b += width / 40) {
        line(b, 0, b, height);
      }
    } else if (this.b == 1) {
      // grid
      for (var c = 0; c < width + 20; c += width / 20) {
        for (var d = 0; d < height + 20; d += width / 20) {
          rect(c, d, width / 20, width / 20);
        }
      }
    } else if (this.b == 2) {
      //diagonal lines
      for (var e = -width / 2; e < width + width / 2; e += width / 40) {
        line(e, 0, e + width / 2, height);
      }
    } else if (this.b == 3) {
      // horizontal lines
      for (var f = 0; f < height; f += height / 60) {
        line(0, f, width, f);
      }
    } else if (this.b == 4) {
      // concentric circles
      for (f = height + height / 3; f > height / 20; f -= height / 20) {
        ellipse(width / 2, height / 2, f, f);
      }
    } else if (this.b == 5) {
      // concentric rects
      for (f = height + height / 3; f > height / 20; f -= height / 20) {
        rect(width / 2, height / 2, f * 2 / 3, f);
      }
    }
    else if (this.b == 6) {
      // arcs
      var w=width/8;
      for (i=-w;i<width+w;i+=w) {
  for (p=0-w;p<height+w;p+=height/20) {
  arc(i, p, w, w, -PI, 0);
  }
}
      
      
    }
    
    // big element in center
    if (this.s == 0) {
      var t = width - width / 3;
      push();
      fill(255);
      if (this.h == 0) {
        ellipse(width / 2, height / 2, t, t);
      }
      if (this.h == 1) {
        rect(width / 2, height / 2, t, t);
      }

      if (this.h == 2) {
        triangle(width / 2, height / 2 - (t / 2), width / 2 - (t / 2), height / 2 + (t / 2), width / 2 + (t / 2), height / 2 + (t / 2));
      }
      pop();
    }
    // grid design, small objects
    else if (this.s == 1) {
      for (var x = 0; x < width + width / 4; x += width / 4) {
        for (var y = 0; y < height + height / 6; y += height / 6) {
          var f3 = (random(0, 20));
          if (f3 == 6 || f3 == 17) {
            fill(0);
          } else {
            fill(255);
          }
          if (this.h == 0) {
            ellipse(x + width / 8, y + height / 12, width / 3.75, width / 3.75);
          } else if (this.h == 1) {
            rect(x + width / 8, y + height / 12, width / 5, width / 5);
          } else if (this.h == 2) {
            triangle(x, y, x - width / 5.3, y + height / 5.7, x + width / 5.3, y + height / 5.7);
          }
        }
      }

      // chaos
    } else if (this.s == 2) {
      for (c = 0; c < random(20, 30); c++) {
        var w = (random(width / 4, width / 3));
        var f3 = (random(0, 20));
        if (f3 == 6 || f3 == 17) {
          fill(0);
        } else {
          fill(255);
        }
        if (this.h == 0) {
          ellipse(random(-100, width + 100), random(-100, height + 100), w, w);
        } else if (this.h == 1) {
          rect(random(-100, width + 100), random(-100, height + 100), w, w);
        } else if (this.h == 2) {
          var x2 = random(-100, width + 100);
          var y2 = random(-100, width + 100);
          triangle(x2, y2, x2 - (w / 2), y2 + (w / 2), x2 + (w / 2), y2 + (w / 2));
        }
      }
    }

    // face
    else if (this.s == 3) {
      var y = (random(width / 4, width / 3)); //eye height
      var e = (random(width / 8, width / 3)); //eye diameter
      var n = (random(y - (y / 8), y + (y / 8))); //nose size
      var m = (random(width / 4, width / 3)); //mouth placement    
      push();
      fill(255);
      if (this.h == 0) {
        for (var p = 0; p <= 1; p++) {
          ellipse(width / 4, y, e, e);
          ellipse(width - (width / 4), y, e, e);
          fill(0);
          ellipse(width / 4, y, e / 3, e / 3);
          ellipse(width - (width / 4), y, e / 3, e / 3);
          fill(255);
        }
        triangle(width / 2, e + random(width / 4, width / 3), width / 2 - n, e + width / 1.6, width / 2 + n, e + width / 1.6);
        rect(width / 2, height - height / 6, width - width / 4, random(height / 20, height / 6));
      } else if (this.h == 1) {
        rect(width / 4, y, e, e);
        rect(width - (width / 4), y, e, e);
        fill(0);
        rect(width / 4, y, e / 3, e / 3);
        rect(width - (width / 4), y, e / 3, e / 3);
        fill(255);
        ellipse(width / 2, height / 2, n, n);
        triangle(width / 2, height - m, width / 2 - (n), height - (m - height / 12), width / 2 + (n), height - (m - height / 12));
      } else if (this.h == 2) {
        triangle(width / 4, y - (e / 2), width / 4 - (e / 2), y + (e / 2), width / 4 + (e / 2), y + (e / 2));
        triangle(width - (width / 4), y - (e / 2), width - (width / 4) - (e / 2), y + (e / 2), width - (width / 4) + (e / 2), y + (e / 2));
        fill(0);
        triangle(width / 4, y - (e / 10), width / 4 - (e / 4), y + (e / 2), width / 4 + (e / 4), y + (e / 2));
        triangle(width - (width / 4), y - (e / 10), width - (width / 4) - (e / 4), y + (e / 2), width - (width / 4) + (e / 4), y + (e / 2));
        fill(255);
        rect(width / 2, height / 2, n, n);
        ellipse(width / 2, height - height / 6, m, m);
      }

      pop();
    }

    // mandala
    else if (this.s == 4) {
      if (this.h == 0) {
        let t = 0;
        var spacing = int(random(height / 30, height / 10));
        let d = random(0.8, 1.25);
        let o = random(0.005, 10);
        for (var k = 0; k < width / 2; k++) {
          for (var i = 0; i < width / 2.25; i += spacing) {
            fill(255);
            ellipse(cos(t) * i + width / 2, sin(t) * i + height / 2, spacing * d, spacing * d);
            t += o;
          }
        }
      } else if (this.h == 1) {
        t = 0;
        let spacing = int(random(height / 30, height / 10));
        let o = random(0.005, 1.5);
        let d = random(0.8, 1.25);
        for (let k = 0; k < width / 2; k++) {
          for (let i = 0; i < width / 2.25; i += spacing) {
            fill(255);

            x = cos(t) * i + width / 2;
            y = sin(t) * i + height / 2;
            rect(x, y, spacing * d, spacing * d);
            t += o;
          }
        }
      } else if (this.h == 2) {
        let t = 0;
        let spacing = int(random(width / 20, width / 5));
        let o = random(0.005, 1.5);
        let d = random(1, 3);
        for (let k = 0; k < width / 2; k++) {
          for (let i = 0; i < width /2; i += spacing) {
            fill(255);
            let x = cos(t) * i + width/2;
            let y = sin(t) * i + height/2-((spacing * .866)/2);
            triangle(x, y, x - spacing/2, y + (spacing * .866), x + spacing/2, y + (spacing * .866));
            t += o;
          }
        }
      }
    }

    rectMode(CORNER);
    noStroke();
    fill(0);
    rect(0, 0, width, 3);
    rect(0, 0, 3, height);
    rect(width - 3, 0, 3, height);
    rect(0, height - 3, width, height);
  }
}


function draw() {
    if(started){
        noLoop();
    background(255);
  for (let i = 0; i < d.length; i++) {
    d[i] = new Design(int(random(0, 5)), int(random(0, 3)), int(random(0, 7)), int(random(0, 2)));
    d[i].update();
  }
    }
}

function start(){
   started = true;
   loop();
}

/*function windowResized() {
    if (windowWidth < 600) {
    let w = windowWidth*.96;
  resizeCanvas(w, w*(4/3));
} else {
  resizeCanvas(600,900);
}
}*/