import React from 'react';
import PropTypes from 'prop-types';

import './gallery.scss';

import Filter from './filter/filter';
import GalleryItem from './item/item';

export default class Gallery extends React.Component {

    static propTypes = {
        galleryItems: PropTypes.array.isRequired,
    };

    constructor(props){
        super(props);
        this.renderGalleryItems = this.renderGalleryItems.bind(this);
    }

    renderGalleryItems(item, i){
        return <GalleryItem {...this.props} key={i} item={item} />
    }

    render() {
        let el = this.galleryItems && this.galleryItems.getBoundingClientRect();
        let gameItems = this.props.galleryItems.map(this.renderGalleryItems);

        return (<div className="gallery-wrapper">
            <Filter/>
            <ul className={(el && el.top < this.props.scroll.delta) ?
                "gallery-items-wrapper active" : "gallery-items-wrapper"}
                ref={(wrapper) => { this.galleryItems = wrapper; }}>
                    { gameItems }
            </ul>
        </div>)
    }
};