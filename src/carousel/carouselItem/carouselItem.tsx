import React, { Component } from 'react';
import '../carousel.css';

interface Img {
  src:string;
};
interface Props {
  count: number;
  item: Img;
};
interface State {
  nowIndex:number
};
 
export default class SliderItem extends Component<Props,State> {
  constructor(props:any) {
    super(props);
  }

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: width}}>
        <div className="img"  style={{backgroundImage: 'url'+'('+item.src+')'}}/>
      </li>
    );
  }
}
