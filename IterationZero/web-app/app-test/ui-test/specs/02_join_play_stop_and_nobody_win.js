StartTest(function(t) {
    joinGame(t);
    playX(t);
    hasStatusXPlayedOPlaying(t);
    playO(t);
    hasStatusOPlayedXPlaying(t);
    clickStopButton(t);
    hasStoppedAfterClickStopButton(t);
});
