class Ground
{
   constructor(x,y,w,h)
   {
     var options=
     {
       isStatic:true  
     }  
     this.body= Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.body)
     this.w=w
     this.h=h
   } 
   display()
   {
     var p= this.body.position
     rectMode(CENTER)
     fill("brown")
     rect(p.x,p.y,this.w,this.h)  
   }
}