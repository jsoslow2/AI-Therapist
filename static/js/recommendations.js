var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');

window.onload = function() {
  console.log('Page Load Function Called');

  socket.emit('recommendation_python', namespace='/test');
};


socket.on('recommendation_socket', function(msg) {
////Add response image to your message on the right
recommendations_array = msg.recommendations_array.reverse();
var myobj = document.getElementById("loadingText");
myobj.remove();

for (let l = 0; l < recommendations_array.length; l++) {
// Runs 5 times, with values of step 0 through 4.
var recommendation_body = document.createElement("p");
recommendation_body.style = "padding: 0px 100px;"
recommendation_body.innerHTML = recommendations_array[l]

console.log('recommendation' + (l+1));

document.getElementById('recommendation' + (l+1)).appendChild(recommendation_body);

}
});