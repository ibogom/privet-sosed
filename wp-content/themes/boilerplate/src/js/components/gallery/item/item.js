import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './item.scss';

export default class GalleryItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render(){
        return (<li className="gallery-item" style={{ backgroundImage: 'url( ' + this.props.item.img + ')' }}>
                <Link to={this.props.item.link} className="description-wrapper">
                    <div className="description">
                        <h3 className="title"> {this.props.item.title} </h3>
                        <div className="text"> {this.props.item.text} </div>
                        <Link className="link" to={this.props.item.link}>Смотреть проект</Link>
                    </div>
                </Link>
            </li>)
    }
};