import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Carousel from './carousel/carousel';

const IMAGE_DATA = [
  {
    src: require('./images/img1.jpeg')
  },
  {
    src: require('./images/img2.jpeg'),
  },
  {
    src: require('./images/img3.jpeg'),
  },
  {
    src: require('./images/img1.jpeg')
  },
];
/**
* Carousel组件
* @param {Array} items 需要轮播的图片（最后需要多加一次第一张图片）
* @param {Number} speed 轮播切换速度
* @param {Number} delay 每个页面停留的时间
* @param {Boolean} pause 是否带暂停操作
* @param {Boolean} autoplay 是否自动轮播
* @param {Boolean} bar 是否展示下面的进度条
*/
render(
  <Carousel
    items={IMAGE_DATA}
    speed={0.5}
    delay={2}
    pause={true}
    autoplay={true}
    bar={true}
  />,
  document.getElementById('root')
);
