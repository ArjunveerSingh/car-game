//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
gw=75;
gh=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//Set initial position for a car image.
gx=5;
gy=225;
function add() {
	//upload car, and background images on the canvas.
	bit= new Image();
	bit.onload=uploadBackground;
	bit.src=background_image;
	git=new Image();
	git.onload=uploadgreencar;
	git.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bit,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(git,gx,gy,gw,gh);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gy>=0){
		gy=gy-10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
	if(gy<=400){
		gy=gy+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(gx>=0){
		gx=gx-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(gx<=800){
		gx=gx+10;
		uploadBackground();
		uploadgreencar();
	}
}
