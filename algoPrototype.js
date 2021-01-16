// "use strict";

// let x = 4;
// let y = 5;

// var toto = 'toto';


// let  direction="S";

// function turn(instruction) {
//     if (instruction === "gauche") {
//         switch (direction) {
//             case "S":
//                 direction = "E";
//                 break;

//             case "E":
//                 direction = "N";
//                 break;

//             case "O":
//                 direction = "S"
//                 break;

//             case "N":
//                 direction = "O"
//                 break;

//         }
//     }
//     else if (instruction === "droite") {
//         switch (direction) {
//             case "S":
//                 direction = "O";
//                 break;

//             case "E":
//                 direction = "S";
//                 break;

//             case "O":
//                 direction = "N"
//                 break;

//             case "N":
//                 direction = "E"
//                 break;

//             default:
//                 break;
//         }
//     }
//     console.log(direction);
// }

// turn("gauche"); // Est
// turn("gauche"); // Nord
// turn("droite"); // Est


function MoveInSpace(x,y,direction){
    this.x=x;
    this.y=y;
    this.direction=direction;
}

MoveInSpace.prototype.turn=function(instruction){
    if (instruction === "gauche") {
                switch (this.direction) {
                    case "S":
                        this.direction = "E";
                        break;
        
                    case "E":
                        this.direction = "N";
                        break;
        
                    case "O":
                        this.direction = "S"
                        break;
        
                    case "N":
                        this.direction = "O"
                        break;
        
                }
            }
            else if (instruction === "droite") {
                switch (this.direction) {
                    case "S":
                        this.direction = "O";
                        break;
        
                    case "E":
                        this.direction = "S";
                        break;
        
                    case "O":
                        this.direction = "N"
                        break;
        
                    case "N":
                        this.direction = "E"
                        break;
        
                    default:
                        break;
                }
            }
            console.log(this.direction);

}


let space=new MoveInSpace(4,5,"S");
space.turn("gauche");
space.turn("gauche");
