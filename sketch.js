var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;


function preload()
{

}

function setup()
{
	createCanvas(800,600);

	playerX = 30;
	playerY = 180;

	jump = false;
	jumpCounter = 0;


	// setup the platforms
	// --------------------------------------
	maxPlatforms = 10;
	platforms = new Array(2);
	for (var r = 0; r < 2; r++)
	{
		platforms[r] = new Array(maxPlatforms);
	}

	for (var r = 0; r < 2; r++)
	{
		for (var c = 0; c < maxPlatforms; c++)
		{
			if (r == 0)
			{
				// x coordinates
				platforms[r][c] = c*100;
			}
			else
			{
				// y coordinates
				platforms[r][c] = 200;				
			}
		}		
	}
	// --------------------------------------

}

function draw()
{
	background(0,0,0);


	// show platform values
	for (var r = 0; r < 2; r++)
	{
		for (var c = 0; c < maxPlatforms; c++)
		{
			text(platforms[r][c],100*r,c*50);
		}		
	}	

	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		fill(125,125,125);
		rect(platforms[0][c],platforms[1][c],75,25);

		// this affects the speed of movement
		platforms[0][c] -= 5;
	}		

	// draw player
	fill(255,0,0);
	ellipse(playerX,playerY,10,10);

	playerOnPlatform();

	// character jump
	if (jump == true)
	{
		// up movement
		if (jumpCounter == 0)
		{
			// rate of up movement
			playerY -= 5;

			// maximum jump height
			if (playerY < 150)
			{
				jumpCounter = 1;
			}
		}
		// down movement
		else if (jumpCounter == 1)
		{
			// rate of down movement
			playerY += 3;

			// falling back down
			if (playerY > 180)
			{
				jumpCounter = 0;
				playerY = 180;
				jump = false;
			}			
		}
	}


}


function playerOnPlatform()
{
//	if (playerY)
}

function keyPressed()
{
	if (key == 'w' || key == 'W')
	{
		jump = true;
	}
}

