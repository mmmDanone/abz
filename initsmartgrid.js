import smartGrid from 'smart-grid';

const opt = {
	filename: "smart-grid",
	outputStyle: "less",
	columns: 12,
	offset: "20px",
	mobileFirst: true,
	container: {
		maxWidth: "1234px",
		fields: "15px"
	},
	breakPoints: {
		el: {
			width: "2560px",
		}, 
		lg: {
			width: "1024px",
			fields: "47px"
		},
		md: {
			width: "768px",
			offset: "30px",
			fields: "24px"
		}
	},
	mixinNames: {
		container: "wrapper",
		row: "row-flex",
		rowFloat: "row-float",
		rowInlineBlock: "row-ib",
		rowOffsets: "row-offsets",
		column: "col",
		size: "size",
		columnFloat: "col-float",
		columnInlineBlock: "col-ib",
		columnPadding: "col-padding",
		columnOffsets: "col-offsets",
		shift: "shift",
		from: "from",
		to: "to",
		fromTo: "from-to",
		reset: "reset",
		clearfix: "clearfix",
		debug: "debug",
		uRowFlex: "u-row-flex",
		uColumn: "u-col",
		uSize: "u-size"
	},
	tab: "	",
	defaultMediaDevice: "screen",
	detailedCalc: false
};

smartGrid('src/styles', opt);