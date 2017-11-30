import React from 'react';
import { ScrollActions } from '../../actions';

export default class Scroll extends React.Component {

  constructor(props){
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
      window.addEventListener('scroll', this.handleScroll);
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
      let doc = document.documentElement;
      let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      this.props.dispatch(ScrollActions.updateScroll({
          top,
          left
      }));
  }

  render(){
    return(<div className="scroll-wrapper">
            { this.props.children }
        </div>)
  }
};