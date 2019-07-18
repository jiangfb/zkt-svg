import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ZktSvg from '../component/ZktSvg.jsx'

export default class Index extends Component {
	render() {
		return (
			<div>
				<ZktSvg svgName='smile' />
				<ZktSvg svgName='test-1' />
			</div>
		)
	}
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Index />, rootEl);