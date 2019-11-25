const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function (source) {
	const customOptions = loaderUtils.getOptions(this) || {};
	const options = {
		directory: 'src/images',
		...customOptions
	}

	const re = /svgName={?["']([\s\S]*?)["']}?[\s\S]*?\/>/g;
	let requireSvgStr = '';
	let result;
	//if (options.debug) console.log(options.directory);

	try {
		while ((result = re.exec(source)) !== null) {
			const iconName = result[1];
			let svgPath = path.resolve(__dirname, options.directory, `${iconName}.svg`);
			svgPath = svgPath.replace(/\\/g, '/');
			if (options.debug) console.log('zkt-svg=> ',svgPath);
			requireSvgStr += `require("!svg-sprite-loader!${svgPath}")\n`;
		}
		source = requireSvgStr + source;
	} catch (e) {
		console.error(e);
	}
	return source
}

