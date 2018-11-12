var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;


function preload()
{

}

function setup()
{
	createCanvas(800,600);

	playerX = 30;
	playerY = 180;

	falling = true;

	jump = 0;
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
		platforms[0][c] -= 2;
	}		

	// draw player
	fill(255,0,0);
	ellipse(playerX,playerY,10,10);


	// character jump
	if (jump == 1)
	{
		// up movement
		if (jumpCounter == 0)
		{
			maxHeight = playerY - 50;
			jumpCounter = 1;
		}

		if (jumpCounter == 1)
		{
			// rate of up movement
			playerY -= 5;

			// maximum jump height
			if (playerY < maxHeight)
			{
				falling = true;
				jump = 2;
			}
		}
	}

	if (falling == true)
	{
		// rate of down movement
		playerY += 3;
		playerOnPlatform();	
	}

}


function playerOnPlatform()
{
	// check if character is on platform
	for (var c = 0; c < 10; c++)
	{
		if (playerY > platforms[1][c] - 5 && playerY < (platforms[1][c] + 5) && playerX > platforms[0][c] && playerX < platforms[0][c] + 75)
		{
			playerY = platforms[1][c] - 5;
			jump = 0;
			jumpCounter = 0;
			break;
		}
	}
}

function keyPressed()
{
	if (key == 'w' || key == 'W' && jump == 0 && playerY < 210)
	{
		jump = 1;
		falling = false;
	}
}

