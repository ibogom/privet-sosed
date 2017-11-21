import { sliderTypes } from '../actions';

const defaultState = {
    slides: [{
        text: 'Slider text version 1',
        img: 'assets/images/2017/11/gallery-1.jpg'
    },{
        text: 'Slider text version 2',
        img: 'assets/images/2017/11/gallery-2.jpg'
    },{
        text: 'Slider text version 3',
        img: 'assets/images/2017/11/gallery-3.jpg'
    }]
};

const slider = (state = defaultState, action) => {
    switch (action.type) {
        case sliderTypes.GET_SLIDES:
            return  [...state, {
                slides: action.slides,
            }];
        default:
            return state;
    }
};

export default slider;