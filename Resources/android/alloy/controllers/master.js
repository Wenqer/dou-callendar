function Controller() {
    function __alloyId4() {
        $.__views.master.removeEventListener("open", __alloyId4);
        if ($.__views.master.activity) $.__views.master.activity.onCreateOptionsMenu = function(e) {
            var __alloyId3 = {
                title: "Refresh",
                icon: "/refresh_icon.png",
                id: "__alloyId2"
            };
            $.__views.__alloyId2 = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId2.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
            refreshRss ? $.__views.__alloyId2.addEventListener("click", refreshRss) : __defers["$.__views.__alloyId2!click!refreshRss"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
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
        navBarHidden: true,
        exitOnClose: true,
        title: "RSS Reader",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.master.addEventListener("open", __alloyId4);
    $.__views.header = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: "50dp",
        color: "#fff",
        textAlign: "center",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#c1cedf",
                offset: "0.0"
            }, {
                color: "#597498",
                offset: "1.0"
            } ]
        },
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "DOU Callendar",
        id: "header"
    });
    $.__views.table = Ti.UI.createTableView({
        headerView: $.__views.header,
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
    __defers["$.__views.__alloyId2!click!refreshRss"] && $.__views.__alloyId2.addEventListener("click", refreshRss);
    __defers["$.__views.refreshButton!click!refreshRss"] && $.__views.refreshButton.addEventListener("click", refreshRss);
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;