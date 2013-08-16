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

        //check anti diag
        finish = true;
        for(var i = 0;i<n;i++){
            if(board[i][(n-1)-i] != state)
                finish = false;
            if(finish == true && i == n-1){
                return true;
            }
        }

        //check draw
        if(Utils.moveCount == (n*n)){
            Utils.gameStatus = 2;
            return false;
        }
    }
}

