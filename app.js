const rows = 30;
const cols = 50;

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
    //   console.log('copy2', initialGrid);

}

seed();

/**
 * the main function for calculation number of neighbours and update cells based on 4 rules accordingly 
 */

let updateGrid = () => {
    let grid = initialGrid;
    let mirrorGrid = [...initialGrid];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let neighboursCount = 0;
            /**
             * every cell (node) has 8 neighbours Top right / Top center / Top left ,....
             * we start from top right 
             */

            if (i > 0) if (grid[i - 1][j]) neighboursCount++;   // top  center
            if (i > 0 && j > 0) if (grid[i - 1][j - 1]) neighboursCount++;// top left corner
            if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) neighboursCount++; //top right 
            if (j < cols - 1) if (grid[i][j + 1]) neighboursCount++; //middle right
            if (j > 0) if (grid[i][j - 1]) neighboursCount++; //middle left
            if (i < rows - 1) if (grid[i + 1][j]) neighboursCount++; //bottom center
            if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) neighboursCount++; //bottom left
            if (i < rows - 1 && cols - 1) if (grid[i + 1][j + 1]) neighboursCount++; //bottom right
            if (grid[i][j] && (neighboursCount < 2 || neighboursCount > 3)) mirrorGrid[i][j] = false;
            if (!grid[i][j] && neighboursCount === 3) mirrorGrid[i][j] = true; //turn it back to life

        }
    }

    initialGrid = mirrorGrid;
    console.log('copy2', initialGrid);
}

/**
 * updating the array according to the 4 rules
 */

updateGrid();