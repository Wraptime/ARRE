#pragma strict

function Start () {

}

var colorStart : Color = Color.red;
var colorEnd : Color = Color.green;
var duration : float = 1.0;
	
function Update () {
	var rotation : float = Time.deltaTime * 100 * Mathf.Sin(Time.fixedTime * 10);
	Debug.Log("" + rotation);
	transform.Rotate(Vector3.forward *  rotation);	
	//var color : Color = Color( Mathf.Sin(Time.deltaTime * 100), Mathf.Cos(Time.deltaTime * 100), Mathf.Sin(Time.deltaTime * 100));
	//renderer.material.color = Color.white;
	var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
	renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
}