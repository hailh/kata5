Utils = {
    count: 0,
    moveCount: 0,
    gameStatus: 0,
    timeSchedule: 0,
    board: [[0, 0, 0], [0, 0, 0],[0, 0, 0]],

    checkFinishGame: function (board, x, y, state) {
        var n = 3;
        var finish = true;
        if(board[x][y] == 0){
            board[x][y] = state;
        }
        Utils.moveCount++;

        //check diag
        if(x == y){
            finish = true;
            for(var i = 0; i < n; i++){
                if(board[i][i] != state)
                    finish = false;
                if(finish == true && i == n-1){
                    return true;
                }
            }
        }
    }
}

