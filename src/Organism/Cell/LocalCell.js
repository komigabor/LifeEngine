const CellStates = require("./CellStates");
const Directions = require("../Directions");;
const Eye = require("../Perception/Eye.js");

// A body cell defines the relative location of the cell in it's parent organism. It also defines their functional behavior.
class LocalCell{
    constructor(state, loc_col, loc_row, eye=null){
        this.state = state;
        this.loc_col = loc_col;
        this.loc_row = loc_row;
        if (this.state == CellStates.eye){
            this.eye = new Eye();
            if (eye != null) {
                this.eye.direction = eye.direction;
            }
        }
    }

    rotatedCol(dir){
        switch(dir){
            case Directions.up:
                return this.loc_col;
            case Directions.down:
                return this.loc_col * -1;
            case Directions.left:
                return this.loc_row;
            case Directions.right:
                return this.loc_row * -1;
        }
    }

    rotatedRow(dir){
        switch(dir){
            case Directions.up:
                return this.loc_row;
            case Directions.down:
                return this.loc_row * -1;
            case Directions.left:
                return this.loc_col * -1;
            case Directions.right:
                return this.loc_col;
        }
    }
}

module.exports = LocalCell;
