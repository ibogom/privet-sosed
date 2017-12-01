import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../../actions';
import {Link} from 'react-router-dom';

import { SliderContainer, GalleryContainer } from '../../containers';

import './root.scss';

const defaultContent = [{
    title: 'ДИЗАЙН',
    text: 'Наши архитекторы создали конструктор сочитающихся между собой элементов,\n' +
    'с помощью которого вы можете собрать свой уникальный дизайн или выбрать один из разработанных стилей\n' +
    ', мы особенно внимательно относимся к тактильным свойствам материала,\n' +
    'сочетая последние тенденции в дизайне интерьеров и удобство использования'
}, {
    title: 'ЦЕНА',
    text: 'Вы получаете выгодную цену благодаря оптимизации процесса ремонта.\n' +
    'Все материалы заранее подобраны, что позволяет закупать их оптом и получать скидки от поставщиков.\n' +
    'Благодаря болшим масштабам и постоянной занятости строителей удается сочетать высокое качество и низкую стоимость ремонтных работ.'
}, {
    title: 'ПРОЦЕСС',
    text: 'Наши архитекторы создали конструктор сочитающихся между собой элементов,\n' +
    'с помощью которого вы можете собрать свой уникальный дизайн или выбрать один из разработанных стилей\n' +
    ', мы особенно внимательно относимся к тактильным свойствам материала,\n' +
    'сочетая последние тенденции в дизайне интерьеров и удобство использования'
}];

class Root extends React.Component {

    constructor(props){
        super(props);

        this.renderContents = this.renderContents.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(RouteActions.setRoute('home'));
    }

    renderContents(content, i){
        let el = this['item-'+i] && this['item-'+i].getBoundingClientRect();
        let titleClassName = ['extra-big-title'];
        let contentClassName = ['content-text'];

        i%2 ? titleClassName.push('align-left') : titleClassName.push('align-right');
        i%2 ? contentClassName.push('align-left') : contentClassName.push('align-right');

        if (el && el.top < this.props.scroll.delta){
            titleClassName.push('active');
            contentClassName.push('active');
        }

        titleClassName = titleClassName.join(' ');
        contentClassName = contentClassName.join(' ');

        return (<div key={i} className="content-section" ref={(item) => { this['item-'+i] = item; }}>
            <span className={ i%2 ? "element-ghost align-right" : "element-ghost align-left"}>
                {content.title}
            </span>
            <h2 className={titleClassName}>
                <div className="element">{content.title}</div>
            </h2>
            <p className={contentClassName}>{content.text}</p>
        </div>);
    }

    render() {
        let content = defaultContent.map(this.renderContents);
        return (<div className="root">
                    <h1 className="title">ПРИВЕТ СОСЕД</h1>
                    <p className="slogan">Вы выбираете дизайн, передаете ключи — и въезжаете в готовую квартиру точно в срок.</p>
                    <p className="slogan"> Мы гарантируем цену и продолжительность ремонта, указанные на сайте.</p>
                    <Link to='/calculator'
                          className="btn-scs">
                        РАСЧИТАТЬ
                    </Link>
                <SliderContainer/>
                <h2 className="extra-big-title align-right active">
                    <div className="element">НАШИ</div>
                    <div className="element"><span>ВАРИАНТЫ ДИЗАЙНА</span></div>
                </h2>
                <GalleryContainer/>
                <div className="content-wrapper">
                    { content }
                </div>
            </div>
            )
    }
};

Root = connect()(Root);

export default Root;
