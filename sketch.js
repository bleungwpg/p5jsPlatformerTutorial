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
		drawWorld(0);		
	}
	else if (canvasID == 2)
	{
		background(100,0,0);
		showControls();
		drawWorld(1);		
	}
	else
	{
		background(0,100,0);
		showControls();
		drawWorld(0);
	}
}

