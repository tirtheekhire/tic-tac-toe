export const winnerCalculation = (board) => {
    var check = function(a,b,c) {
        return !!(a + b + c).match(/^(xxx|ooo)$/gi);
    };

    if (check(board[0], board[1], board[2])) return board[0];
    if (check(board[3], board[4], board[5])) return board[3];
    if (check(board[6], board[7], board[8])) return board[6];

    if (check(board[0], board[3], board[6])) return board[0];
    if (check(board[1], board[4], board[7])) return board[1];
    if (check(board[2], board[5], board[8])) return board[2];

    if (check(board[0], board[4], board[8])) return board[0];
    if (check(board[2], board[4], board[6])) return board[2];

    if (board.join('').length === 9) return 'd';
    
    return 'n';
}