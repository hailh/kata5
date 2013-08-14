StartTest(function(t) {
    joinGame(t);
    playOneStep(t, 0, 0);
    playOneStep(t, 0, 1);
    playOneStep(t, 1, 1);
    playOneStep(t, 0, 2);
    playOneStep(t, 2, 2);
    hasStatusPlayerXWin(t);
});
