let cntr;
let xx;
let yy;
let w;
let h;
let size;

function setup() {
    /*let sz = window.innerWidth || document.body.clientWidth;
    if (sz < 900) {
    sz = sz;
    } else {
        sz = 900;
    }*/
    let sz=900;
  let c = createCanvas(sz,sz);
  c.parent("canvas-container");
  stroke(0);
  frameRate(20);
  noLoop();
  strokeWeight(1);
  cntr=width/2;
  w=width;
  h=width;
  xx=w/8.5;
  yy=h/8.5;

  sizeOptions = createRadio();
  sizeOptions.parent('#size');

  sizeOptions.option("large", "Large");
  sizeOptions.option("medium", "Med");
  sizeOptions.option("small", "Small");

  sizeOptions.selected('large');
  sizeOptions.value("large"); //set init value


}

class Design {
  constructor() {

  }

 update() {

      // ears
   let ea=int(random(0,5));
   if(ea==0) {
     ellipse(xx,h/2,xx*2,xx*2);
     ellipse(xx,h/2,xx*1.8,xx*1.8);

     ellipse(w-xx,h/2,xx*2,xx*2)
     ellipse(w-xx,h/2,xx*1.8,xx*1.8)

   } else if (ea==1) {
     triangle(0,h/2-yy*2,0,h/2,xx*2,h/2);
     triangle(10,h/2-yy*2+25,10,h/2-10,xx*2-25,h/2-10);
     triangle(w,h/2-yy*2,w,h/2,w-xx*2,h/2);
     triangle(w-10,h/2-yy*2+25,w-10,h/2-10,w-xx*2+25,h/2-10);

   } else if (ea==2) {
     fill(255);
     arc(0,h/2,xx*3,xx*3,PI+HALF_PI,TWO_PI,PIE);
     arc(0,h/2,xx*2.8,xx*2.8,PI+HALF_PI, TWO_PI, PIE);
     arc(w,h/2,xx*3,xx*3,PI, PI+HALF_PI,PIE);
     arc(w,h/2,xx*2.8,xx*2.8,PI, PI+HALF_PI,PIE);
   } else if (ea==3) {
     triangle(xx,yy,0,h/2,xx*2,h/2);
     triangle(xx,yy+25,15,h/2-10,xx*2-15,h/2-10);
     triangle(w-xx,yy,w,h/2,w-xx*2,h/2);
     triangle(w-xx,yy+25,w-15,h/2-10,w-xx*2+15,h/2-10);

   } else if (ea==4) {
     ellipse(xx,h/2,xx*2,yy*8);
     ellipse(xx,h/2,xx*1.8,yy*7.8);
     ellipse(w-xx,h/2,xx*2,yy*8);
     ellipse(w-xx,h/2,xx*1.8,yy*7.8);

   }

   // horns
   let hn=int(random(0,9));
   if(hn==0) {
     // 1 big triangle horn

     let hs=int(random(1,4));
     for(let i=70;i>-70;i-=5) {
     triangle(cntr,h/2-yy-i*2,cntr-xx-i*2,h/2,cntr+xx+i*2,h/2);
       }
   } else if (hn==1) {
     // 2 horns
     for(let i=50;i>-100;i-=10) {
     triangle(cntr-xx*2,h/2-yy-i,cntr-xx*2-xx-i,h/2,cntr-xx*2+xx+i,h/2);
     triangle(cntr+xx*2,h/2-yy-i,cntr+xx*2-xx-i,h/2,cntr+xx*2+xx+i,h/2);
     }
   } else if(hn==2) {
     // 3 horns
     for(let i=50;i>-100;i-=10) {
     triangle(cntr-xx*2,h/2-yy-i,cntr-xx*2-xx-i,h/2,cntr-xx*2+xx+i,h/2);
     triangle(cntr+xx*2,h/2-yy-i,cntr+xx*2-xx-i,h/2,cntr+xx*2+xx+i,h/2);
     triangle(cntr,h/2-yy-i*2,cntr-xx-i*2,h/2,cntr+xx+i*2,h/2);

     }
   } else if (hn==3) {
     for (let i=5;i>0;i-=0.25) {
       ellipse(cntr,h/2,i*xx*1.25,i*xx*1.25);
   }
   } else if (hn==4) {
     for(let v=xx*2.5;v<=xx*3.5;v+=xx/8) {
       line(v,h/2,v-w/16,h/2-yy);
      line(v-w/16,h/2-yy,v,h/2-2*yy);
        line(v,h/2-yy*2,v-w/16,h/2-3*yy);
     }

     for(let s=w-xx*2.5;s>=w-xx*3.5;s-=xx/8) {
       line(s,h/2,s+w/16,h/2-yy);
      line(s+w/16,h/2-yy,s,h/2-2*yy);
        line(s,h/2-yy*2,s+w/16,h/2-3*yy);
     }
       line(xx*2.5-w/16,h/2-3*yy,xx*2.5+(7*xx/8)-w/16,h/2-3*yy);
       line(w-xx*2.5+w/16,h/2-3*yy,w-xx*2.5-(7*xx/8)+w/16,h/2-3*yy);

   } else if (hn==5) {
    for (let i=4;i>0;i-=0.5) {
       arc(cntr,h/2,i*xx/2,i*xx/2, PI,TWO_PI,PIE);
       arc(cntr,h/2-xx,i*xx/2,i*xx/2, PI,TWO_PI,PIE);
       arc(cntr,h/2-2*xx,i*xx/2,i*xx/2, PI,TWO_PI,PIE);
    }
   } else if(hn==6) {
     for(let p=cntr-xx;p<=cntr+xx;p+=xx/6) {
       line(p,h/2,p,h/2-yy*2);
       line(p,h/2-yy*2,cntr,h/2-yy*2.5);
     }
   } else if(hn==7) {
     for(let p=w/4;p<=w/4+xx;p+=xx/6) {
       line(p,h/2,p,h/2-yy*2.5);
       line(p,h/2-yy*2.5,w/4+xx/2,h/2-yy*3);
     }
     for(let p=w-w/4;p>=w-w/4-xx;p-=xx/6) {
       line(p,h/2,p,h/2-yy*2.5);
       line(p,h/2-yy*2.5,w-w/4-xx/2,h/2-yy*3);
     }
   } else if(hn==8) {
      for(let v=xx*2.5;v<=xx*3.5;v+=xx/8) {
      line(v,h/2,v,h/2-(yy*2));
      }
     for(let i=7;i>=1;i-=2) {
       arc(xx*2.5+(3.5*xx/8),h/2-yy*2,i*xx/8,i*xx/8,PI,TWO_PI);
     }
      for(let s=w-xx*2.5;s>=w-xx*3.5;s-=xx/8) {
      line(s,h/2,s,h/2-yy*2);
      }
      for(let i=7;i>=1;i-=2) {
       arc(w-xx*2.5-(3.5*xx/8),h/2-yy*2,i*xx/8,i*xx/8,PI,TWO_PI);
     }
   }
   rectMode(CORNER);
   fill(255);
   noStroke();
   rect(0, h/2, w, h);

   ellipseMode(CENTER);
   stroke(0);

   // head top

   let fc=int(random(0,6));
     if(fc==0) {
       line(0,h/2,w,h/2);
   } else if(fc==1) {
     for(let k=-0.25*xx;k<w;k+=xx/2) {
       triangle(k,h/2-yy/4,k-xx/4,h/2,k+xx/4,h/2);
     }
     push();
     stroke(255);
     line(0,h/2,w,h/2);
     pop();
   } else if(fc==2) {
     for(let m=-0.25*xx;m<w;m+=xx/2) {
       arc(m,h/2,xx/2,xx/2,PI,TWO_PI,CHORD);
     }
   } else if (fc==3) {
     arc(cntr,h/2,w,yy,PI,TWO_PI,CHORD);
   } else if (fc==4) {
     arc(cntr,h/2,w/3,yy/2,PI,TWO_PI,CHORD);
     arc(w/6,h/2,w/3,yy/2,PI,TWO_PI,CHORD);
     arc(w-w/6,h/2,w/3,yy/2,PI,TWO_PI,CHORD);
   } else if (fc==5) {
       for (let s=0;s<w;s+=xx) {
         rect(s,h/2-yy/4,xx/2,xx/4);
       }
     line(0,h/2,w,h/2);
   }

   // face design
   let fn = int(random(0,8));
     if(fn==0) {
       for (let i=h/2;i<h;i+=yy/2) {
         line(0,i,w,i);
     line(0,h/2,0,h);
     line(w,h/2,w,h);
     }
     }else if (fn==1) {
       for (let j=-xx;j<=w;j+=xx/2) {
         line(j,h/2,j,h);
       }
       line(w,h/2,w,h);
   } else if(fn==2) {
       for (let i=h/2;i<h;i+=yy/2) {
         line(0,i,w,i);
     line(0,h/2,0,h);
     line(w,h/2,w,h);
     }
      for (let j=-xx;j<w;j+=xx/2) {
         line(j,h/2,j,h);
       }
   } else if (fn==3) {
        for (let l=h/2;l<h;l+=yy/2) {
         line(0,l,w,l);
      line(0,h/2,0,h);
     line(w,h/2,w,h);
   }
   } else if (fn==4) {
        for (let l=h/2;l<h;l+=yy/4) {
         line(0,l,w,l);
     line(0,h/2,0,h);
     line(w,h/2,w,h);
   }
   } else if (fn==5) {
     line(0,h/2,cntr,h);
     line(0,h-h/4,cntr,h);
     line(w,h/2,cntr,h);
     line(w,h-h/4,cntr,h);
     line(cntr,h/2,cntr,h);
     line(0,h/2,0,h);
     line(w/4,h/2,cntr,h);
     line(w-w/4,h/2,cntr,h)
     line(w,h/2,w,h);
     line(0,h/2,w,h/2)
   } else if (fn == 6) {
     for(let xi=xx/4;xi<w;xi+=xx/2) {
       for(let yi=h/2+yy/4;yi<h-yy/4;yi+=yy/2) {
         ellipse(xi,yi,xx/4,xx/4);
       }
     }
          line(0,h/2,0,h);
     line(w,h/2,w,h);
   } else if (fn ==7) {
     for(let xi=xx/4;xi<w;xi+=xx/2) {
       for(let yi=h/2+yy/4;yi<h-yy/4;yi+=yy/2) {
         rectMode(CENTER);
         rect(xi,yi,xx/4,xx/4);
       }
     }
      line(0,h/2,0,h);
     line(w,h/2,w,h);
   }
   fill(255);
rectMode(CORNER);
   // bottom
   let b=int(random(0,9));
     if(b==0) {
       fill(255);
       noStroke();
       triangle(-2,h-yy*1.5,cntr-xx,h+2,-2,h+2);
       triangle(w+2,h-yy*1.5,cntr+xx,h+2,w+2,h+2);
       stroke(0);
       line(0,h-yy*1.5,cntr-xx,h);
       line(w,h-yy*1.5,cntr+xx,h);
     } else if (b==1) {
       line(0,h,w,h);
       let diameterX=w-xx*2.5;
       let diameterY=yy*2.5;
       arc(0,h,diameterX,diameterY,PI+HALF_PI,TWO_PI);
       arc(w,h,diameterX,diameterY,PI,PI+HALF_PI);
        push();
       stroke(255);
       strokeWeight(3);
       line(0,h+1,diameterX/2-2,h+1);
       line(w,h+1,w-diameterX/2+2,h+1);
       line(w+1,h-(diameterY/2)+2,w+1,h);
       line(-1,h-(diameterY/2)+2,-1,h);
      pop();
     } else if (b==2) {
       fill(255);
         stroke(255);
         rectMode(CORNER);
         rect(-2,h-yy/4,w+4,h+2);
       for(let x=0;x<cntr-xx;x+=xx/2) {
         stroke(0);
         triangle(x,h-yy/4,x+xx/4,h,x+xx/2,h-yy/4);
       }
       for(let x=cntr+xx/4;x<w;x+=xx/2) {
         stroke(0);
         triangle(x,h-yy/4,x+xx/4,h,x+xx/2,h-yy/4);
       }
     } else if (b==3) {
       stroke(255);
       fill(255);
       rectMode(CORNER);
       rect(-2,h-yy/4,w+4,h+2);
       stroke(0);
     for(let m=-0.25*xx;m<w;m+=xx/2) {
       arc(m,h-xx/4,xx/2,xx/2,0,PI);
     }line(0,h-yy/4,w,h-yy/4);


     } else if(b==4) {
       for (let t=0;t<w;t+=xx) {
         rect(t,h-yy/4,xx/2,xx/4);
       } line(0,h-yy/4,w,h-yy/4);
     } else if (b==5) {
       fill(255);
       beginShape();
       vertex(-2,h+2);
       vertex(-2,h-1.5*yy);
       vertex(xx,h-1.5*yy);
       vertex(xx,h-yy);
       vertex(xx*2,h-yy);
       vertex(xx*2,h-yy/2);
       vertex(xx*3,h-yy/2);
       vertex(xx*3,h+2);
       endShape();
       line(xx*3,h,cntr,h);
       push();
       stroke(255);
       line(0,h-1.5*yy+3,0,h+4);
       pop();

       beginShape();
       vertex(w,h+2);
       vertex(w,h-1.5*yy);
       vertex(w-xx,h-1.5*yy);
       vertex(w-xx,h-yy);
       vertex(w-xx*2,h-yy);
       vertex(w-xx*2,h-yy/2);
       vertex(w-xx*3,h-yy/2);
       vertex(w-xx*3,h+2);
       endShape();
       line(w-xx*3,h,cntr,h);
       push();
       stroke(255);
       strokeWeight(3);
       line(w,h-1.5*yy+3,w,h+4);
       pop();

     } else if (b==6) {
     fill(255);
         noStroke();
         rect(0,h-yy/4,w,h);
       for(let x=xx*2;x<cntr;x+=xx/2) {

         stroke(0);
         triangle(x,h-yy/4,x+xx/4,h,x+xx/2,h-yy/4);
       }
       for(let x=w-(xx*2)-xx/2;x>cntr;x-=xx/2) {
         stroke(0);
         triangle(x,h-yy/4,x+xx/4,h,x+xx/2,h-yy/4);
       }
       noStroke();
       triangle(-2,h-yy*1.5,xx*2,h-yy/4,-2,h+2);
       triangle(w+2,h-yy*1.5,w-xx*2,h-yy/4,w+2,h+2);

       stroke(0);
       line(0,h-yy*1.5,xx*2,h-yy/4);
       line(w,h-yy*1.5,w-xx*2,h-yy/4);

     } else if (b==7) {
       noStroke();
       rectMode(CORNER);
       rect(0,h-xx/4,w,h);
       stroke(0);
     for(let m=2*xx+xx/4;m<w-2*xx+xx/4;m+=xx/2) {
       arc(m,h-xx/4,xx/2,xx/2,0,PI);
     } line(xx*2,h-yy/4,w-xx*2,h-yy/4);
        noStroke();
        triangle(-2,h-yy*1.5,xx*2,h-yy/4,-2,h+2);
        triangle(w+2,h-yy*1.5,w-xx*2,h-yy/4,w+2,h+2);

       stroke(0);
       line(0,h-yy*1.5,xx*2,h-yy/4);
       line(w,h-yy*1.5,w-xx*2,h-yy/4);
     } else if (b==8) {
       noStroke();
       rectMode(CORNER);
       rect(0,h-xx/4,w,h);
       stroke(0);
      for (let t=xx*2;t<w-xx*2;t+=xx) {
         rect(t,h-yy/4,xx/2,xx/4);
       } line(xx*2,h-yy/4,w-xx*2,h-yy/4);
         noStroke();
         triangle(-2,h-yy*1.5,xx*2,h-yy/4,-2,h+2);
         triangle(w+2,h-yy*1.5,w-xx*2,h-yy/4,w+2,h+2);

       stroke(0);
       line(0,h-yy*1.5,xx*2,h-yy/4);
       line(w,h-yy*1.5,w-xx*2,h-yy/4);
     }

   // eyes
   stroke(0);
   let e=int(random(0,6));
   if(e==0) {
   ellipse(cntr-xx*1.5,h-yy*2,xx*1.7,xx*1.7);
   ellipse(cntr-xx*1.5,h-yy*2,xx*1.5,xx*1.5);
   ellipse(cntr+xx*1.5,h-yy*2,xx*1.7,xx*1.7);
   ellipse(cntr+xx*1.5,h-yy*2,xx*1.5,xx*1.5);
} else if (e==1) {
   rectMode(CENTER);
   rect(cntr-xx*1.5,h-yy*2,xx*1.5,xx*1.5);
  rect(cntr-xx*1.5,h-yy*2,xx*1.25,xx*1.25);
  rect(cntr+xx*1.5,h-yy*2,xx*1.5,xx*1.5);
  rect(cntr+xx*1.5,h-yy*2,xx*1.25,xx*1.25);
} else if (e==2) {
   triangle(cntr-xx+xx/10,h-yy*1.5+yy/6,cntr-xx+xx/10,h-yy*2.5-yy/10,cntr-xx*3-xx/2.5,h-yy*2.5-yy/10);
  triangle(cntr-xx,h-yy*1.5,cntr-xx,h-yy*2.5,cntr-xx*3,h-yy*2.5);
   triangle(cntr+xx-xx/10,h-yy*1.5+yy/6,cntr+xx-xx/10,h-yy*2.5-yy/10,cntr+xx*3+xx/2.5,h-yy*2.5-yy/10);
  triangle(cntr+xx,h-yy*1.5,cntr+xx,h-yy*2.5,cntr+xx*3,h-yy*2.5);
} else if (e==3) {
   arc(cntr-xx*1.5,h-yy*1.75,xx*1.7,xx*1.7,PI,TWO_PI,CHORD);
   arc(cntr-xx*1.5,h-yy*1.75,xx*1.5,xx*1.5,PI,TWO_PI,CHORD);
   arc(cntr+xx*1.5,h-yy*1.75,xx*1.7,xx*1.7,PI,TWO_PI,CHORD);
   arc(cntr+xx*1.5,h-yy*1.75,xx*1.5,xx*1.5,PI,TWO_PI,CHORD);
} else if (e==4) {
   arc(cntr-xx*1.5,h-yy*2.5,xx*1.7,xx*1.7,0,PI,CHORD);
  arc(cntr-xx*1.5,h-yy*2.5,xx*1.5,xx*1.5,0,PI,CHORD);
   arc(cntr+xx*1.5,h-yy*2.5,xx*1.7,xx*1.7,0,PI,CHORD);
  arc(cntr+xx*1.5,h-yy*2.5,xx*1.5,xx*1.5,0,PI,CHORD);
} else if (e==5) {
  triangle(cntr-xx*1.5,h-yy*1.5+yy/8,cntr-xx*2.5-xx/4,h-yy*2.5-yy/10,cntr-xx/2+xx/4,h-yy*2.5-yy/10);
  triangle(cntr-xx*1.5,h-yy*1.5,cntr-xx*2.5,h-yy*2.5,cntr-xx/2,h-yy*2.5);
  triangle(cntr+xx*1.5,h-yy*1.5+yy/8,cntr+xx*2.5+xx/4,h-yy*2.5-yy/10,cntr+xx/2-xx/4,h-yy*2.5-yy/10);
  triangle(cntr+xx*1.5,h-yy*1.5,cntr+xx*2.5,h-yy*2.5,cntr+xx/2,h-yy*2.5);
}

   // nose
   let ns=int(random(0,3));
   if (ns==0) {
     noStroke();
     fill(255);
     triangle(cntr,h-yy*1.5,cntr+xx,h+2,cntr-xx,h+2);
     stroke(0);
     line(cntr,h-yy*1.5,cntr+xx,h);
     line(cntr,h-yy*1.5,cntr-xx,h);
   } else if (ns==1){
     arc(cntr,h,xx*2,xx*2.5,PI,TWO_PI);
     stroke(255);
     line(cntr-xx,h+1,cntr+xx,h+1);
     stroke(0);
   } else if (ns==2) {
     beginShape();
     vertex(cntr-xx,h);
     vertex(cntr-xx*.75,h-yy*.75);
     vertex(cntr,h-yy*1.5);
     vertex(cntr+xx*.75,h-yy*.75);
     vertex(cntr+xx,h);
     endShape();
     stroke(255);
     line(cntr-xx+3,h+1,cntr+xx-3,h+1);
     stroke(0);
   }
   fill(0);
   noStroke();
    ellipse(xx/4,h/2+yy*1.75,xx/8,xx/8);
   ellipse(width-xx/4,h/2+yy*1.75,xx/8,xx/8);
   fill(255);
   }
}

function draw() {

  background(255);
    strokeWeight(2);
  stroke(0);

  switch (sizeOptions.value()) {
    //radio value is always a string
    case "large":
      size=.98;
      break;
      case "medium":
        size=.9;
        break;
    case "small":
      size=.8;
      break;
  }
  push();
scale(size);
translate(1,0);
  let design = new Design();
  design.update();
  pop();

}
