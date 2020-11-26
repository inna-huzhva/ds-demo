function newDeque() {
  return [];
}

function isEmpty(d) {
  return d.length === 0;
}

function pushFront(d, e) {
  for (var i = d.length - 1; i >= 0; i--) {
    d[i + 1] = d[i];
  }
  d[0] = e;
}

function popFront(d) {
  if (isEmpty(d)) {
    return undefined;
  } else {
    var e = d[0];
    for (var i = 0; i < d.length - 1; i++) {
      d[i] = d[i + 1];
    }
    d.length = d.length - 1;
    return e;
  }
}

function pushBack(d, e) {
  d[d.length] = e;
}

function popBack(d) {
  if (isEmpty(d)) {
    return undefined;
  } else {
    var e = d[d.length - 1];
    d.length = d.length - 1;
    return e;
  }
}

function render(d) {
  var html = '<div class="deque">';
  for (var i = 0; i < d.length; i++) {
    html += '<div class="element">' + d[i] + '</div>';
  }
  html += '</div>';
  return html;
}
