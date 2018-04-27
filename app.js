let rows = 30;
let cols = 50;

/**
 * Create and fill the initial array with falsy items
 */
let initialGrid = Array(rows).fill().map(() => Array(cols).fill(false));

/**
 * seeding function -- refilling the array with chance of 25% for true(live) cells
 */
seed = () => {
    
    let gridCopy = [...initialGrid];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (Math.floor(Math.random() * 4) === 1) {
                gridCopy[i][j] = true;
            }
        }
    }

    initialGrid = gridCopy;
}