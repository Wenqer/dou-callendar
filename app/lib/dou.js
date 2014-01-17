
exports.data = function() {

    var req = new XMLHttpRequest();
    req.open('GET', 'http://dou.ua/calendar/', false);
    req.send(null);

    var links = parseHTML(req.responseText).getElementsByClassName('events');
    var rows = [];

    for (var index = 0; index < links.length; ++index) {
//        var t = links[index];
//
//        var div = document.createElement('div');
//        div.innerHTML = t;
//
//        console.log(div.querySelectorAll('.place')[0]);

//        console.log(links[index].getElementsByClassName('place'));
//        var event = {
//            articleUrl: 'sdfsdf',
//            image: "sdf",
//            title: links[index].getElementsByClassName('place').childNodes[0].innerHTML,
//            date: links[index].getElementsByClassName('date').innerHTML
//        }
        rows.push(event);
    }

    console.log(rows);

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
    return data;
};


function parseHTML(markup) {
    var doc = document.implementation.createHTMLDocument("");

    if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        doc.documentElement.innerHTML = markup;
    } else {
        doc.body.innerHTML = markup;
    }
    return doc;
}