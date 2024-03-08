(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer('/cable');

  App.chatChannel = App.cable.subscriptions.create("ChatChannel", {
    connected: function() {
      // Called when the subscription is ready for use on the server
      console.log("Connected to ChatChannel");
    },

    disconnected: function() {
      // Called when the subscription has been terminated by the server
      console.log("Disconnected from ChatChannel");
    },

    received(data) {
      console.log("IN received")
      // Update this part to display the received message in your HTML
      console.log("Received:", data.message);

      // For example, assuming you have an element with the id "messagesContainer"
      var messagesContainer = document.getElementById("messagesContainer");

      // Create a new <div> element to display the message
      var messageDiv = document.createElement("div");
      messageDiv.textContent = data.message;

      // Append the new message to the container
      messagesContainer.appendChild(messageDiv);
    }, 

    speak: function(message) {
      console.log("IN speak")
      // Called to send a message to the server
      this.perform("speak", { message });
    },
  });
}).call(this);
