import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, SnakeIntersaction} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0
let gameOver = false

function main(currentTime){
    if(gameOver){
        if(confirm("You lost. Press 'ok' to start!")){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || SnakeIntersaction()
}