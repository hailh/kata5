/**
 * Created with IntelliJ IDEA.
 * User: Dell 3360
 * Date: 8/14/13
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */

Utils = {
    count: 0,
    gameStatus: 0,
    timeSchedule: 0,
    board: [[0, 0, 0], [0, 0, 0],[0, 0, 0]],

    checkFinishGame: function (board, x, y, state) {
        var n = 3;
        var moveCount = 0;
        var finish = true;
        if(board[x][y] == 0){
            board[x][y] = state;
        }
        moveCount++;

        //check end conditions

        //check col
        for(var i = 0; i < n; i++){
            if(board[x][i] != state)
                finish = false;
            if(finish == true && i == n-1){
                return true;
            }
        }

        //check row
        finish = true;
        for(var i = 0; i < n; i++){
            if(board[i][y] != state)
                finish = false;
            if(finish == true && i == n-1){
                return true;
            }
        }

        //check diag
        if(x == y){
            //we're on a diagonal
            finish = true;
            for(var i = 0; i < n; i++){
                if(board[i][i] != state)
                    finish = false;
                if(finish == true && i == n-1){
                    return true;
                }
            }
        }

        //check anti diag (thanks rampion)
        finish = true;
        for(var i = 0;i<n;i++){
            if(board[i][(n-1)-i] != state)
                finish = false;
            if(finish == true && i == n-1){
                return true;
            }
        }

        //check draw
        if(moveCount == (n^2 - 1)){
            return false;
        }
    }
}

