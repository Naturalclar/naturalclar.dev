declare namespace JSX {
	interface AmpImg {
		alt?: string;
		src?: string;
		width?: string| number;
		height?: string| number;
    layout?: string;
    style?: Record<string,string|number>
	}
	interface IntrinsicElements {
		'amp-img': AmpImg;
	}
}