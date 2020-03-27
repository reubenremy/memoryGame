import React from 'react';
import './MemoryCard.css';

function MemoryCard(props) { 
    const { symbol, isFlipped, pickCard } = props;
    const memoryCardInnerClass = `MemoryCardInner ${ isFlipped === true && 'flipped'}`;

    return ( 
        <div 
            className="MemoryCard"
            onClick={ pickCard }
        >
            <div className={ memoryCardInnerClass }>
                <div className="MemoryCardBack">
                    <img 
                        src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'
                        alt='DigitalCrafts'
                    />
                </div>
                <div className="MemoryCardFront">
                    { symbol }
                </div>
            </div>
        </div>
    );
}

export default MemoryCard;