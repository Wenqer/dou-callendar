function Controller() {
    function openDetail() {}
    function refreshRss() {
        var rows = [];
        _.each(data, function(item) {
            rows.push(Alloy.createController("row", {
                articleUrl: item.link,
                image: item.image,
                title: item.title,
                date: item.pubDate
            }).getView());
        });
        $.table.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "RSS Reader",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.refreshButton = Ti.UI.createButton({
        title: "refresh",
        id: "refreshButton"
    });
    refreshRss ? $.__views.refreshButton.addEventListener("click", refreshRss) : __defers["$.__views.refreshButton!click!refreshRss"] = true;
    $.__views.master.rightNavButton = $.__views.refreshButton;
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.master.add($.__views.table);
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("rss");
    var data = [ {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    }, {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    }, {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    }, {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    }, {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    }, {
        link: "",
        image: "",
        title: "new event",
        date: "29748"
    } ];
    refreshRss();
    __defers["$.__views.refreshButton!click!refreshRss"] && $.__views.refreshButton.addEventListener("click", refreshRss);
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;