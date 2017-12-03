import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './footer.scss';

export default class Footer extends React.Component {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props){
        super(props);
    }

    render(){
        return(<footer className="footer">
            <div className="section md-2 brdr-bottom">
                <div className="one align-left">
                    <h3 className="title-big align-left">
                        МНЕ ВСЕ ЯСНО.
                    </h3>
                    <p className="description align-left">
                        хочу заказать ремонт у вас
                    </p>
                    <Link to='/calculator'
                          className="btn-scs btn-extra-big">
                        ЗАКАЗАТЬ
                    </Link>
                </div>
                <div className="two align-right">
                    <h3 className="title-big align-right">
                        ЕСТЬ ВОПРОСЫ?
                    </h3>
                    <div className="options-wrapper">
                        <div className="option">
                            <h5 className="title">ЗВОНИТЕ</h5>
                            <a href="tel:050 123 45 67" className="phone">+380 50 123 45 67</a>
                            <a href="tel:050 123 45 67" className="phone">+380 66 123 45 67</a>
                        </div>
                        <div className="option">
                            <h5 className="title">ПИШИТЕ</h5>
                            <a href="mailto:office@sosed.net.ua"className="mail">office@sosed.net.ua</a>
                        </div>
                        <div className="option">
                            <h5 className="title">ПРИЕЗЖАЙТЕ</h5>
                            <div className="address">03035, Украина, Киев, <br/> ул. Механизаторов 2, офис 482</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section md-3">
                <div className="one" />
                <div className="two">
                    <div className="contacts">
                        <a href="tel:050 123 45 67">050 123 45 67</a>
                        /
                        <a href="tel:066 123 45 67">066 123 45 67</a>
                    </div>
                    <p className="p">All Rights Reserved 2017</p>
                </div>
                <div className="three" />
            </div>
        </footer>)
    }
};