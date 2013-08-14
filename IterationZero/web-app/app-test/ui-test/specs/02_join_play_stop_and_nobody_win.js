StartTest(function(t) {
    joinGame(t);
    playOneStep(t, 0, 0);
    hasStatusXPlayedOPlaying(t);
    playOneStep(t, 1, 1);
    hasStatusOPlayedXPlaying(t);
    clickStopButton(t);
    hasStoppedAfterClickStopButton(t);
});
