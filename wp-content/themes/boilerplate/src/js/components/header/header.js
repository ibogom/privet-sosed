import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';


export default class Header extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {};

    render() {
        return (<header className={(this.props.scroll.top > 10) ? "header active" : "header"}>
            <div className="section">
                <div className="left">
                    <span className="menu" onClick={this.props.onClick}>
                        <span>меню</span>
                    </span>
                </div>
                <div className="middle">
                    <div className="contacts">
                        <a href="tel:050 123 45 67">050 123 45 67</a>
                        /
                        <a href="tel:066 123 45 67">066 123 45 67</a>
                    </div>
                    { this.props.children }
                </div>
                <div className="right">
                    <Link to='/calculator'
                          className="btn-scs">
                        РАСЧИТАТЬ
                    </Link>
                </div>
            </div>
        </header>)
    }
};