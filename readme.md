### zkt-svg

This is a simple react component that can easily use SVG files;Base on svg-sprite-loader module;

### Usage

##### index.jsx

```javascript
import React, { Component } from 'react';
import ZktSvg from 'zkt-svg'

export default class Index extends Component {
 render() {
  return (
   <div>
	<ZktSvg className='someClass' svgName='smile' />
	{/* 
	 The svgName value should be same as the svg file name 
	*/}
   </div>
 )}
}
```


##### webpack.config.js

```javascript
module: {
 rules: [
  { 
    test: /\.jsx?$/,
     use: [
	 'babel-loader',
	 'zkt-svg/loader'
     ]
  }]
/* 
  The default directory of svg files is ./src/images; 
  Your project's folder tree should be like this:

 *-src
 * --images
 *  ---smile.svg
 *-webpack.config.js
  
*/
  
 Or customize the directory 
...
  { 
   test: /\.jsx?$/,
   use: [
	'babel-loader',
	{
	  loader:'zkt-svg/loader',
	  options: { directory: path.resolve(__dirname, 'folder1/folder2/svgs') }
	}
  ]}
... 

```

```html
<!-- Output -->

<svg class="">
 <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smile">
  #shadow-root (closed)
 </use>
</svg>

```
