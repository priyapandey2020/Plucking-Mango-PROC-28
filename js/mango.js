class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0.4,
            friction :0.0,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
 }
}