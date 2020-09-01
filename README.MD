# 功能点
 - 1、鼠标失去焦点的时候会自动轮播；
 - 2、鼠标放在页面上时会暂停轮播；
 - 3、点击下面的进度条可切换到对应页面
 
# 思路：
  - 本页面大体可分为两部分：1、页面轮播部分 2、下面进度条部分

# 页面轮播部分思路：
  - 1、滑动形式，使用ul包裹多个需要轮播的li,横着排列，通过改变ul元素的left值让图片呈现左右滚动的效果；
  - 2、通过将第一张图放在结尾一次，来达到无缝轮播的形式；
  - 3、通过创建定时器定时改变ul位置，使页面轮播起来

# 下面进度条部分
  - 1、当进度条索引等于当前页面索引的时候，使其变为“active”，通过css3的transition属性实现进度效果
  - 2、当点击进度条的时候，通过穿参调用翻页定位函数进行定位，从而到达对应页面


# 启动方法：yarn/npm start
# 组件封装在index.tsx中