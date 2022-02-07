class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            density:0.2,
            friction:0

			}

            this.r=r

		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);
            this.image = loadImage("paper.png")
	}
	display()
	{
			
			var paperPos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(paperPos.x, paperPos.y);
            rotate(angle)
			imageMode(CENTER)
			//strokeWeight(4);
			//fill(128,128,128)
			//ellipse(0,0,this.r, this.r);
            image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}