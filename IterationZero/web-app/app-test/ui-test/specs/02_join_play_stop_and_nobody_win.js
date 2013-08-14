StartTest(function(t) {
    joinGame(t, 0);
    playOneStep(t, 0, 0);
    hasStatusXPlayedOPlaying(t);
    playOneStep(t, 1, 1);
    hasStatusOPlayedXPlaying(t);
    clickStopButton(t);
    hasStoppedAfterClickStopButton(t);
});
