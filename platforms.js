var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;


/*
the 0 array location is the x coordinate of the platform

the 1st array location is the y coordinate of the platform

the 2nd array location is the length coordinate of the platform

the 3rd array location is the height coordinate of the platform

the 4th array location determines where the player can hit the platform
platforms[c][4] = 0; - top
platforms[c][4] = 1; - top+bottom


the 5th array location determines which box is the correct one
platforms[c][5] = 0; - incorrect question
platforms[c][5] = 1; - correct question


the 6th array location is whether the platform exists or not
0 - does NOT exist
1 - does exist
*/



function preloadPlatforms()
{

}

function setupPlatforms()
{
	// setup the platforms
	// --------------------------------------
	maxPlatforms = 7;
	platforms = new Array(maxPlatforms);
	for (var r = 0; r < maxPlatforms; r++)
	{
		platforms[r] = new Array(4);
	}

	for (var c = 0; c < maxPlatforms; c++)
	{
		for (var r = 0; r < 7; r++)
		{
			platforms[c][r] = 0;
		}
	}


	// big platform on the bottom
	platforms[0][0] = 1;
	platforms[0][1] = 500;
	platforms[0][2] = 800;
	platforms[0][3] = 50;
	platforms[0][4] = 0;
	platforms[0][6] = 1;


	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 1; c < maxPlatforms; c++)
	{
		// x coordinates
		platforms[c][0] = c*100+50;
		// y coordinates
		platforms[c][1] = 400;				
		// length
		platforms[c][2] = 75;
		// height
		platforms[c][3] = 20;				
		// hit location
		platforms[c][4] = 1;
		// correct/incorrect
		platforms[c][5] = 0;
		// correct/incorrect
		platforms[c][6] = 1;

	}

	platforms[2][5] = 1;

	// --------------------------------------

}

function showPlatforms()
{
	// show platform values
	for (var r = 0; r < maxPlatforms; r++)
	{

		for (var c = 0; c < maxPlatforms; c++)
		{
			text("x: "+platforms[c][0],50+r*100,50*c*50);
			text("y: "+platforms[c][1],100+r*100,50*c*50);
			text("length: "+platforms[c][1],150+r*100,50*c*50);
			text("height: "+platforms[c][1],200+r*100,50*c*50);

		}		
	}


	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][6] == 1)
		{
			fill(125,125,125);
			rect(platforms[c][0],platforms[c][1],platforms[c][2],platforms[c][3]);			
		}
	}		

}

function movePlatforms()
{
	// show platform values
	for (var r = 0; r < maxPlatforms; r++)
	{

		for (var c = 0; c < maxPlatforms; c++)
		{
			text("x: "+platforms[c][0],50+r*100,50*c*50);
			text("y: "+platforms[c][1],100+r*100,50*c*50);
			text("length: "+platforms[c][1],150+r*100,50*c*50);
			text("height: "+platforms[c][1],200+r*100,50*c*50);

		}		
	}


	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][6] == 1)
		{
			fill(125,125,125);
			rect(platforms[c][0],platforms[c][1],platforms[c][2],platforms[c][3]);			

			// this affects the speed of movement
			// comment this if the platforms are not moving
			platforms[c][0] -= 2;

		}

	}		

}

function drawWorld()
{
	showPlatforms();

	drawPlayer();

	manageJumpAndFall();

	manageMoveLR();

	initiateNextQuestion();

}


