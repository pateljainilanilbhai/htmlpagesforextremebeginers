// JavaScript Document

    var canvas=document.querySelector("canvas");
    
	var c=canvas.getContext('2d');
	
	canvas.height=window.innerHeight;
	canvas.width=window.innerWidth;
	canvas.style.background="aqua";
	canvas.style.border="1px solid black";
	c.fillStyle="rgba(246,120,22,1.00)";
	c.fillRect(50,50,400,100);
	c.fillStyle="#FFFFFF";
	c.fillRect(50,150,400,100);
	c.fillStyle="#1BF355";

	c.fillRect(50,250,400,100);
	c.fillStyle="#ECA453";
c.fillRect(20,50,30,800);
	


	c.strokeStyle = '#000074';
	c.fillStyle="#fff";
	c.beginPath();
	c.arc(250,200,50,0,2*Math.PI);
	c.stroke();


	for (i = 0; i < 2*Math.PI; i=i+(2*Math.PI)/24) {
   c.moveTo(250+50*Math.cos(i),200+50*Math.sin(i));
	c.lineTo(250,200);
	c.stroke();
}

var gradient=c.createLinearGradient(0,0,500,0);
gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.25","yellow");
gradient.addColorStop("0.5","blue");
	gradient.addColorStop("0.75","lightgreen");
gradient.addColorStop("1.0","red");
c.strokeStyle=gradient;
	c.lineWidth=5;
	
		
c.font = "50px Arial";
c.strokeText('PROUD TO BE INDIAN',500,500,500);

function drawHand(c, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}






