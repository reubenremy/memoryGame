import React, { Component } from 'react';
import { shuffle } from '../utils/shuffle';
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

    pickCard(cardIndex) {
        if (!this.state.deck[cardIndex].isFlipped) {
            return this.state.deck[cardIndex].setState({
                isFlipped: true
            });
        } else {
            return
        }


    }

    render() { 
        
        const cardsJSX = this.state.deck.map((card, index) => {
            return (
                <MemoryCard 
                    key = { index }
                    isFlipped={ card.isFlipped }
                    symbol={ card.symbol }
                />
            )
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