function MoveInSpace(x = 4, y = 5, player = { x: 0, y: 0, direction: "S" }) {
    this.x = x;
    this.y = y;
    this.player = player;
}

MoveInSpace.prototype.displayGrid = function() {
    let str = "";
    
    for(let a = 0; a < this.y; a++) {
        for (let a = 0; a < this.x; a++) {
            str += "+-+";
        }
        str += "\n";
        for (let a = 0; a < this.x; a++) {
            str += "| |"; 
        }
        str += "\n";
    }
    for (let a = 0; a < this.x; a++) {
        str += "+-+";
    }

    console.log(str);

}

MoveInSpace.prototype.turn = function (instruction) {
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
    console.log(this.direction)
}

let space = new MoveInSpace();
space.turn('gauche');
space.turn('gauche');
space.displayGrid();
