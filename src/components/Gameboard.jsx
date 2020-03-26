import React, { Component } from 'react';
import MemoryCard from './MemoryCard';

const generateDeck = () => {
    const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
    const deck = [];

    for (let i = 0; i < 16; i++ ) {
        deck.push({
            isFlipped: false,
            symbol: symbols[i%8]
        });
    };

    const shuffle = arrayToBeShuffled => {
        for (let iterationNum = arrayToBeShuffled.length - 1; iterationNum > 0; iterationNum--) {
            const randNum = Math.floor(Math.random() * (iterationNum + 1));
            [arrayToBeShuffled[iterationNum], arrayToBeShuffled[randNum]] = [arrayToBeShuffled[randNum], arrayToBeShuffled[iterationNum]];
        }
        return arrayToBeShuffled;
    }
    shuffle(deck);
    return deck;
};

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            deck: [],
            pickedCards: []
        }
    }

    render() { 
        return (       
            <>
                <div>
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                </div>
                <div>
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                </div>
                <div>
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                </div>
                <div>
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                    <MemoryCard />
                </div> 
            </>
        );
    }
}

export default Gameboard;