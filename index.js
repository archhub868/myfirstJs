var list = [];

for (var i = 0; i < 1000; i++) list.push(i);

var start = new Date;

nextListItem();

function nextListItem() {
    var item = list.pop();

    if (item) {
        console.log(item);
        setTimeout(nextListItem, 0);
    } else console.log(new Date - start);
}

var list = [];

for (var i = 0; i < 1000; i++) list.push(i);

var start = new Date;

nextListItem();

function nextListItem() {
    var item = list.pop();

    if (item) {
        console.log(item);
        if (item % 100) nextListItem();
        else setTimeout(nextListItem, 0);
    } else console.log(new Date - start);
}