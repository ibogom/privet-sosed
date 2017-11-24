import React from 'react';

import './bullets.scss';

export default class Bullets extends React.Component {

    constructor(props) {
        super(props);
        this.renderBullets = this.renderBullets.bind(this);
    }

    renderBullets(){
        return this.props.slides.map((slide, i) => {
            return <li key={i}
                       data-slide={i} onClick={this.props.onClick}
                       className={i === this.props.activeSlide ? 'slider-bullet active': 'slider-bullet'}>
                0{i+1} .
            </li>
        });
    }

    render(){
        return (<ul className="slider-bullets-wrapper">
            {this.renderBullets()}
        </ul>)
    }
};