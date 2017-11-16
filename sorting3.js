circles = [];
var array = [5,15,45,30,55,25,80,70,90,11,24,20,10,40,100];
var length = 0;
function setup()
{
    
  canvas = createCanvas(innerWidth, innerHeight);
    canvas.position(0,0);
    for(i = 0; i < array.length; i++)
        circles[i] = new Circle(width/2, 50+20*i,i);
  
}
function draw()
{
   
    background(250);
    s = "This sketch demonstrate visual representation of Bubble sort algorithm; you can see how the bigger bubbles swap places with smaller ones, each time the loop executes. The sketch resets after you refresh the page.";
    t = "array = [5,20,45,30,50,25,80,70,90,11,24,15,10,40,100] is the array used to represent the size of the bubbles in this skecth";
    textSize(15);
    noStroke();
    text(s, 100,200,width/3);
    text(t, 100,280,width/3);
    for (i = 0; i < circles.length; i++)
        {
            circles[i].display(array[i]);
        //    circles[i].move(array[i]);
        }
        
    if(length <= array.length+4)
       {
            for (var i = 0; i <length; i++) {
            //Number of passes
            if (array[i] < array[i + 1]) {
                    //Swap the numbers
                    var tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                }
            }
       }
      if(frameCount%50==0)
        {
            length++;
           
        }  
}

function Circle(x,y,i)
    {
        this.x = x;
        this.y = y;
        this.i = i;
        this.velocity = 1;
        this.display = function (j)
        {
            noStroke();
            fill(0,0,j*2.5,100);
            ellipse(this.x,100+this.y,j);
            print(j);
        }
        this.move = function(j)
        {
            this.x = this.x + this.velocity*j/30;
            
            if(this.x < width/2-50)
            this.velocity *= -1;
            else if(this.x > width/2+100)
           this.velocity *= -1;
        }
    }

