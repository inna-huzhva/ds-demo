function newQueue() {
  return [];
}

function enqueue(q, e) {
  q[q.length] = e;
}

function isEmpty(q) {
  return q.length === 0;
}

function dequeue(q) {
  if (isEmpty(q)) {
    return undefined;
  }
  var e = q[0];
  for (var i = 0; i < q.length - 1; i++) {
    q[i] = q[i + 1];
  }
  q.length = q.length - 1;
  return e;
}

function render(q) {
  var html = '<div class="queue">';
  for (var i = 0; i < q.length; i++) {
    html += '<div class="element">' + q[i] + '</div>';
  }
  html += '</div>';
  return html; 
}
