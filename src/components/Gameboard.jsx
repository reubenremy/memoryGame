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
            deck: generateDeck(),
            pickedCards: []
        }
    }

    render() { 
        
        const cardsJSX = this.state.deck.map((card, index) => {
            return <MemoryCard />
        });

        return (       
            <>
                <div>{ cardsJSX.slice(0, 4) }</div>
                <div>{ cardsJSX.slice(4, 8) }</div>
                <div>{ cardsJSX.slice(8, 12) }</div>
                <div>{ cardsJSX.slice(12, 16) }</div>
            </>
        );
    }
}

export default Gameboard;