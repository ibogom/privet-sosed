import React from 'react';

import './filter.scss';

export default class Filter extends React.Component {

    render(){
        return ( <ul className="medium-title align-right filter-wrapper">
                    <li className="item separator" />
                    <li className="item active">ГОТОВЫЙ ДИЗАЙН</li>
                    <li className="item separator" />
                    <li className="item"><span>СВОЙ СТИЛЬ</span></li>
                    <li className="item separator" />
        </ul>)
    }
};