StartTest(function(t) {
    joinGame(t, 0);
    playOneStep(t, 0, 0);
    playOneStep(t, 0, 1);
    playOneStep(t, 1, 0);
    playOneStep(t, 1, 1);
    playOneStep(t, 2, 2);
    playOneStep(t, 2, 1);
    hasStatusPlayerOWin(t);
});
