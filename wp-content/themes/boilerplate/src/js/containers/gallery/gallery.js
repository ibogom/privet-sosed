import React from "react";
import {connect} from 'react-redux';

/** COMPONENTS **/
import {Gallery} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    galleryItems: state.gallery.galleryItems
});

const GalleryContainer = connect(mapStateToProps)(Gallery);

export default GalleryContainer;