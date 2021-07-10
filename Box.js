class Box
{
   constructor(x,y,w,h)
   {
     var options=
     {
       restitution:0.8,
       friction:1,
       density:0.04
     }  
     this.body= Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.body)
     this.w=w
     this.h=h
   } 
   display()
   {
     var p= this.body.position
     var a= this.body.angle
     push()
     translate(p.x,p.y)
     rotate(a)
     rectMode(CENTER)
     fill("yellow")
     rect(0,0,this.w,this.h)  
     pop()
   }
}