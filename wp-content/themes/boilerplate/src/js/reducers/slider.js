import { sliderTypes } from '../actions';

const defaultState = {
    slides: [{
        text: 'ВЫБЕРИТЕ ДИЗАЙН',
        img: 'assets/images/2017/11/gallery-1.jpg'
    },{
        text: 'УКАЖИТЕ ПЛАНИРОВКУ',
        img: 'assets/images/2017/11/gallery-2.jpg'
    },{
        text: 'ПОЛУЧИТЕ ГОТОВУЮ КВАРТИРУ ЧЕРЕЗ 15 ДНЕЙ',
        img: 'assets/images/2017/11/gallery-3.jpg'
    }],
    activeSlide: 0,
    interval: 3000
};

const slider = (state = defaultState, action) => {
    switch (action.type) {
        case sliderTypes.SET_ACTIVE_SLIDE:
            return Object.assign({}, state, {
               activeSlide: action.activeSlide
            });
        case sliderTypes.GET_SLIDES_SUCCESS:
            return  [...state, {
                slides: action.slides,
            }];
        default:
            return state;
    }
};

export default slider;