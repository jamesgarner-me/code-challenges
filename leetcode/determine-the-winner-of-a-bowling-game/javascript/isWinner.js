/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    const Result = {
        Draw: 0,
        Player1Wins: 1,
        Player2Wins: 2,
    };
    const calcScore = (scores) => {
        let total = 0;
        for (let i = 0; i < scores.length; i++) {
            if (
                (i > 0 && scores[i - 1] === 10) ||
                (i > 1 && scores[i - 2] === 10)
            ) {
                total += scores[i] * 2;
            } else {
                total += scores[i];
            }
        }
        return total;
    };

    return calcScore(player1) > calcScore(player2)
        ? Result.Player1Wins
        : calcScore(player1) < calcScore(player2)
        ? Result.Player2Wins
        : Result.Draw;
};

var main = function () {
    let player1 = [4, 10, 7, 9],
        player2 = [6, 5, 2, 3];
    console.log(isWinner(player1, player2));
};

main();

module.exports = isWinner;
