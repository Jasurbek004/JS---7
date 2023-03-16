var masofa = prompt ("Masofani kiriting",0)-0;

function speed (){
    let speedWalking = 3.6;
    let speedBike = 20.1;
    let speedCar = 70;
    let speedPlane = 800;

    let timeWalking = (masofa / speedWalking )  
    let timeBike = (masofa / speedBike) 
    let timeCar = (masofa / speedCar) 
    let timePlane = (masofa / speedPlane)

    console.log (timeWalking + " da piyoda bosib o'tadi")
    console.log (timeBike + " da velosiped bosib o'tadi")
    console.log (timeCar + " da avtomobil bosib o'tadi")
    console.log (timePlane + " da samolyot bosib o'tadi")
}
speed ()
 