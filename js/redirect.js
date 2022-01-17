var i = 3;
var delay = 1000;
function time() 
{
	document.getElementById("time").innerHTML = i;// Visual counter
	i--;
	if (i<0) document.location.href = "index.html";
}
time();
setInterval(time, delay);