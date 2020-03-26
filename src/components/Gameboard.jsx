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
        //if the chosen card is already flipped we want to keep it the same so we'll return it which will essentially keep the card rendered as a front-facing card. 
        if (this.state.deck[cardIndex].isFlipped) return;

        //We're making a Copy essentially of whats happening in line 31. Why? because we dont want to edit it directly so we're making a copy and assigning it its own value that we can edit it and assign it something different later
        const cardToFlip = {...this.state.deck[cardIndex]};
        cardToFlip.isFlipped = true;

        //Create a copy of the state array and adds chosen cards to it.
        const newPickedCards = this.state.pickedCards.concat(cardIndex);

        //Create a copy of the state of the new deck to copy
        const newDeck = this.state.deck.map((card, index) => {
            if (cardIndex === index) {
                return cardToFlip;
            }
            return card;
        })
        
        this.setState({
            deck: newDeck,
            pickedCards: newPickedCards
        })
    }

    render() { 
        
        const cardsJSX = this.state.deck.map((card, index) => {
            return (
                <MemoryCard 
                    key = { index }
                    isFlipped={ card.isFlipped }
                    symbol={ card.symbol }
                    pickCard={ this.pickCard.bind(this, index) }
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