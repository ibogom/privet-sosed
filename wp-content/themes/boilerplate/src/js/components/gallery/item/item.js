import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './item.scss';

export default class GalleryItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render(){
        let el = this.galleryItem && this.galleryItem.getBoundingClientRect();
        return (<li className={(el && el.top < this.props.scroll.delta) ?
            "gallery-item-wrapper active" : "gallery-item-wrapper"} ref={(item) => { this.galleryItem = item; }}>
                <span className="top" />
                <span className="right" />
                <span className="bottom" />
                <span className="left" />
                <div className="gallery-item" style={{ backgroundImage: 'url( ' + this.props.item.img + ')' }}>
                    <Link to={this.props.item.link} className="description-wrapper">
                        <div className="description">
                            <h3 className="title"> {this.props.item.title} </h3>
                            <div className="text"> {this.props.item.text} </div>
                            <div className="link">Смотреть проект</div>
                        </div>
                    </Link>
                </div>
            </li>)
    }
};