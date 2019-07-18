import React from 'react';

export default function ZktSvg(props) {
	return (
		<svg className={`${props.className || ''}`}>
			<use xlinkHref={`#${props.svgName}`} />
		</svg>
	)
}



