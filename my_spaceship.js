/*
** Create spaceship which accepts a string of letters as directions
** and returns its position in the following format: {x: X, y: Y, direction: 'DIRECTION'}
**
** @param {String} directions
** @return {String} position
*/
function my_spaceship(instruction) {
    x = 0;
    y = 0;
    direction = "up";
    
    function parse(directions) {
        let index = 0;
        while(index < directions.length) {
            if(directions[index] == "R") {
                turnRight()
            }
            else if(directions[index] == "L") {
                turnLeft()
            }
            else if(directions[index] == "A") {
                advance()
            }
            index++;
        }
    };
    
    function turnRight() {
        if(direction == "up") {
            direction = "right";
        } else if(direction == "right") {
            direction = "down";
        } else if(direction == "down") {
            direction = "left";
        } else {
            direction = "up";
        }
    }
    
    function turnLeft() {
        if(direction == "up") {
            direction = "left";
        } else if(direction == "left") {
            direction = "down";
        } else if(direction == "down") {
            direction = "right";
        } else {
            direction = "up";
        }
    }
    
    function advance() {
        if(direction == "up") {
            y--;
        } else if(direction == "right") {
            x++;
        } else if(direction == "down") {
            y++;
        } else {
            x--;
        }
    }

    parse(instruction)
    position = "{x: " + x + ", y: " + y + ", direction: '" + direction + "'}";
    return position;
}