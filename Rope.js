class Rope
{
   constructor(bodyA,pointB)
   {
     var options=
     {
       bodyA:bodyA,
       pointB:pointB,
       stiffness:1,
       length:200
     }  
     this.body= Constraint.create(options)
     World.add(world,this.body)
   }
   display()
   {
      if(this.body.bodyA) 
      {
      var pA= this.body.bodyA.position
      var pB= this.body.pointB
      strokeWeight(4)
      line(pB.x,pB.y,pA.x,pA.y)
      }
   }

   fly()
   {
      this.body.bodyA=null; 
   }
}