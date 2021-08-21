const GRID_SIZE = 21

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE ) + 1,
        y: Math.floor(Math.random() * GRID_SIZE ) + 1
    }
}

export function outsideGrid(positon) {
    return (
        positon.x < 1 || positon.x > GRID_SIZE ||
        positon.y < 1 || positon.y > GRID_SIZE
    )
}