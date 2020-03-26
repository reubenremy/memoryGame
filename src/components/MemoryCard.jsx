import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    state = {
        isFlipped: false
    }

    whenClicked = () => {
        this.state ({
            isFlipped: !this.state.isFlipped
        })
    };

    render() { 
        const { isFlipped } = this.state;

        return ( 
            <div className="MemoryCardBack">
                <img 
                    src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'
                    alt='DigitalCrafts'
                />
            </div>
        );
    }
}

export default MemoryCard;