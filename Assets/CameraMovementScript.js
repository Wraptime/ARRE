#pragma strict
var speed = 10.0;
function Start () {

}

function Update () {
	var dir : Vector3 = Vector3.zero;

	// we assume that the device is held parallel to the ground
	// and the Home button is in the right hand

	// remap the device acceleration axis to game coordinates:
	//  1) XY plane of the device is mapped onto XZ plane
	//  2) rotated 90 degrees around Y axis
	Debug.Log("x : " + Input.acceleration.x + " y : " + Input.acceleration.y + " z : " + Input.acceleration.z);
	
	//dir.x = -Input.acceleration.y;
	//dir.x = Input.acceleration.x;
	dir.y = Input.acceleration.z;

	// clamp acceleration vector to the unit sphere
	if (dir.sqrMagnitude > 1)
		dir.Normalize();

	// Make it move 10 meters per second instead of 10 meters per frame...
	dir *= Time.deltaTime;

	// Move object
	transform.Translate (dir * speed);
}