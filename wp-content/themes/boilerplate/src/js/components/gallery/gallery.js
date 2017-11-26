import React from 'react';
import PropTypes from 'prop-types';

import './gallery.scss';

import Filter from './filter/filter';
import GalleryItem from './item/item';

export default class Gallery extends React.Component {

    static propTypes = {
        galleryItems: PropTypes.array.isRequired,
    };

    renderGalleryItems(){
        return this.props.galleryItems.map((item, i) => {
            return <GalleryItem key={i} item={item} />
        });
    }

    render() {
        return (<div className="gallery-wrapper">
            <Filter/>
            <ul className="gallery-items-wrapper">
                {this.renderGalleryItems()}
            </ul>
        </div>)
    }
};