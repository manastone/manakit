import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFlexAlignContent({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// flexAlignContent
		if (screen) {
			response += `.${mediaQueries(screen)}align-content-${key} {\n`;
			response += css({
				key: 'align-content',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.align-content-${key} {\n`;
			response += css({
				key: 'align-content',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFlexAlignContent;
