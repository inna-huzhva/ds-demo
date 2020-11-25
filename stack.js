function newStack() {
  return [];
}

function push(s, e) {
  s[s.length] = e;
}

function isEmpty(s) {
  return s.length === 0;
}

function pop(s) {
  if (isEmpty(s)) {
    return undefined;
  }
  var e = s[s.length - 1];
  s.length = s.length - 1;
  return e;
}

function render(s) {
  var html = '<div class="stack">';
  for (var i = 0; i < s.length; i++) {
    html += '<div class="element">' + s[i] + '</div>';
  }
  html += '</div>';
  return html; 
}
