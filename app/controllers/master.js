var rss = require('rss');
var dou = require('dou');

// open detail window
function openDetail(e) {
	// $.trigger('detail', e);
}
var data = [
	{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	},{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	},{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	},{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	},{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	},{
		link: "",
		image: "",
		title: "new event",
		date: "29748"
	}
];
// Refresh table data from remote RSS feed
function refreshRss() {
    dou.data();
	// rss.loadRssFeed({
		// success: function(data) {
			var rows = [];
			_.each(data, function(item) {
				rows.push(Alloy.createController('row', {
					articleUrl: item.link,
					image: item.image,
					title: item.title,
					date: item.pubDate
				}).getView());
			});
			$.table.setData(rows);
		// }
	// });
}

// do initial load of RSS
refreshRss();