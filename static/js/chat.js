var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
       
            $('#sendbutton').on('click', function(){
             console.log('Button Clicked');
             console.log($('#myMessage').val());
       
                      var div_outer = document.createElement("div");
                      div_outer.className = "from-me";

                      var msgBody = document.createElement("p");
                      msgBody.innerHTML = $('#myMessage').val();

                      var div_end = document.createElement("div");
                      div_end.className = "clear";

                      div_outer.appendChild(msgBody);
                      
       
                      var element = document.getElementById("message_holder");
                      element.appendChild(div_outer);
                      element.appendChild(div_end);

                       element.scrollTop = element.scrollHeight;
       
                       //Emit a message to the server so that Python can pick up the 'python' message
                       socket.emit('python', {'the_text': $('#myMessage').val()}, namespace='/test');
       
                       document.getElementById('myMessage').value = ''
                     }
                     );
       
            var input = document.getElementById("myMessage");
            input.addEventListener("keyup", function(event) {
             if (event.keyCode === 13) {
               event.preventDefault();
               document.getElementById("sendbutton").click();
             }
           });
       
       
       
            socket.on('to_socket_string', function(msg) {
              var div_outer = document.createElement("div");
                      div_outer.className = "from-them";

                      var msgBody = document.createElement("p");
                      msgBody.innerHTML = msg.string;

                      var div_end = document.createElement("div");
                      div_end.className = "clear";

                      div_outer.appendChild(msgBody);
                      div_outer.appendChild(div_end);
       
         var element = document.getElementById("message_holder");
         element.appendChild(div_outer);
         element.appendChild(div_end); 
         element.scrollTop = element.scrollHeight;
       });
            socket.on('recommendation_socket', function(msg) {
         ////Add response image to your message on the right
         recommendations_array = msg.recommendations_array
       
         for (let l = 0; l < recommendations_array.length; l++) {
         // Runs 5 times, with values of step 0 through 4.
         var recommendation_body = document.createElement("p");
         recommendation_body.style="color: DARKGREEN; text-align:RIGHT; overflow-wrap: break-word; word-wrap: break-word; padding-left:30%; padding-right: 3%;";
         recommendation_body.innerHTML = recommendations_array[l]
       
         document.getElementById('recommendation_holder').appendChild(recommendation_body)
       
       }
       
       
       });