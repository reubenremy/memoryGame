export const shuffle = arrayToBeShuffled => {
    for (let iterationNum = arrayToBeShuffled.length - 1; iterationNum > 0; iterationNum--) {
        const randNum = Math.floor(Math.random() * (iterationNum + 1));
        [arrayToBeShuffled[iterationNum], arrayToBeShuffled[randNum]] = [arrayToBeShuffled[randNum], arrayToBeShuffled[iterationNum]];
    }
    return arrayToBeShuffled;
}