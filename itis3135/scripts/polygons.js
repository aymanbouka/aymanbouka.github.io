

const polyMin = 1;
const  polyMax = 10;

const polygons = {
    "1": "Monogon",
    "2": "Bigon",
    "3": "Triangle",
    "4": "Tetragon",
    "5": "Pentagon",
    "6": "Hexagon",
    "7": "Septagon",
    "8": "Octagon",
    "9": "Nonagon",
    "10": "Decagon"
}

const prompt = "Please input a value between " + polyMin + " and " + polyMax;
const promptBox = document.getElementById("promptBox");    
const polyForm = document.getElementById("polyForm");




function promptUser()
{

    var sides = parseInt(prompt("Type a number: "))

    alert(sides);

}

function getNumberForSides()
{


// if (!isNaN(sides)) 
// {

 


// }

// alert(polygons[sides]);


}




