var RSS_URL = "/feed.xml";

var MONTH_MAP = {
    JAN: 1,
    FEB: 2,
    MAR: 3,
    APR: 4,
    MAY: 5,
    JUN: 6,
    JUL: 7,
    AUG: 8,
    SEP: 9,
    OCT: 10,
    NOV: 11,
    DEC: 12
};

var getRssText = function(item, key) {
    return item.getElementsByTagName(key).item(0).textContent;
};

var parseDate = function(dateString) {
    var dateParts = dateString.split(" ");
    var timeParts = dateParts[4].split(":");
    return MONTH_MAP[dateParts[2].toUpperCase()] + "/" + dateParts[1] + " " + timeParts[0] + ":" + timeParts[1];
};

exports.loadRssFeed = function(o, tries) {
    var xhr = Titanium.Network.createHTTPClient();
    tries = tries || 0;
    xhr.open("GET", RSS_URL);
    xhr.onload = function() {
        var xml = this.responseXML;
        if (null === xml || null === xml.documentElement) {
            if (3 > tries) {
                tries++;
                exports.loadRssFeed(o, tries);
                return;
            }
            alert("Error reading RSS feed. Make sure you have a network connection and try refreshing.");
            o.error && o.error();
            return;
        }
        var items = xml.documentElement.getElementsByTagName("item");
        var data = [];
        for (var i = 0; items.length > i; i++) {
            var item = items.item(i);
            var image;
            try {
                var elems = item.getElementsByTagNameNS("http://mashable.com/rss", "thumbnail");
                image = Ti.XML.parseString(elems.item(0).textContent).getElementsByTagName("img").item(0).getAttribute("src");
            } catch (ex) {
                image = "";
            }
            data.push({
                title: getRssText(item, "title"),
                link: getRssText(item, "link"),
                pubDate: parseDate(getRssText(item, "pubDate")),
                image: image
            });
        }
        o.success && o.success(data);
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    o.start && o.start();
    xhr.send();
};