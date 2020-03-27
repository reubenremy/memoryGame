import React, { Component } from 'react';
import './MemoryCard.css';

function MemoryCard(props) { 
    const { isFlipped } = props;
    const memoryCardInnerClass = `MemoryCardInner ${ isFlipped === true && 'flipped'}`;

    return ( 
        <div 
            className="MemoryCard"
            onClick={() => props.pickCard}
        >
            <div className={ memoryCardInnerClass }>
                <div className="MemoryCardBack">
                    <img 
                        src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'
                        alt='DigitalCrafts'
                    />
                </div>
                <div className="MemoryCardFront">
                    { props.symbol }
                </div>
            </div>
        </div>
    );
}

export default MemoryCard;