import {galleryTypes} from '../actions';

const defaultState = {
    galleryItems: [{
        title: '"ПАРИЖ"',
        text: 'Выразительные детали этого интерьера — высокий плинтус,\n' +
        'накладные розетки, изящный карниз — отсылают к французским интерьерам начала ХХ века',
        img: 'assets/images/2017/11/mt-0990_home_image-1.jpg',
        link: 'design/paris'
    }, {
        title: '"МОДЕРН"',
        text: 'Выразительные детали этого интерьера — высокий плинтус,\n' +
        'накладные розетки, изящный карниз — отсылают к французским интерьерам начала ХХ века',
        img: 'assets/images/2017/11/mt-0990_home_image-2.jpg',
        link: 'design/modern'
    }, {
        title: '"СТОКГОЛЬМ"',
        text: 'Натуральная текстура дерева, обилие света и лаконичность вдохновлены простотой и ясностью скандинавского дизайна.',
        img: 'assets/images/2017/11/mt-0990_home_image-3.jpg',
        link: 'design/stockholm'
    }, {
        title: '"LOFT"',
        text: 'Натуральная текстура дерева, обилие света и лаконичность вдохновлены простотой и ясностью скандинавского дизайна.',
        img: 'assets/images/2017/11/mt-0990_home_image-4.jpg',
        link: 'design/loft'
    },{
        title: '"КЛАССИКА"',
        text: 'Натуральная текстура дерева, обилие света и лаконичность вдохновлены простотой и ясностью скандинавского дизайна.',
        img: 'assets/images/2017/11/mt-0990_home_image-6.jpg',
        link: 'design/classic'
    },{
        title: '"LIGHT"',
        text: 'Натуральная текстура дерева, обилие света и лаконичность вдохновлены простотой и ясностью скандинавского дизайна.',
        img: 'assets/images/2017/11/mt-0990_home_image-7.jpg',
        link: 'design/light'
    }]
};

const gallery = (state = defaultState, action) => {
    switch (action.type) {
        case galleryTypes.GET_GALLERY_ITEM_SUCCESS:
            return [...state, {
                galleryItems: action.items,
            }];
        default:
            return state;
    }
};

export default gallery;