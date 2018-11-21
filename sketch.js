var canvasID;

function preload()
{

}

function setup()
{
	createCanvas(800,600);
	setupPlatforms();
	setupPlayer();

	canvasID = 1;

}

function draw()
{
	if (canvasID == 1)
	{
		background(0,0,0);
		showControls();
		drawWorld();		
	}
	else if (canvasID == 2)
	{
		background(125,125,125);
		fill(255,255,255);
		text("next question",50,50);		
	}
}

