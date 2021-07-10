class Ball
{
   constructor(x,y,r)
   {
     var options=
     {
       restitution:0.8,
       frictionAir:0.005,
       density:0.04
     }  
     this.body= Bodies.circle(x,y,r,options)
     World.add(world,this.body)
     this.r=r
   } 
   display()
   {
     var p= this.body.position
     var a= this.body.angle
     push()
     translate(p.x,p.y)
     rotate(a)
     ellipseMode(CENTER)
     fill("brown")
     ellipse(0,0,this.r)  
     pop()
   }
}