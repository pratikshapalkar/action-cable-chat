//= require action_cable
//= require_self

(function() {
  console.log("IN CABLE JS")
  this.App || (this.App = {});
  App.cable = ActionCable.createConsumer();
}).call(this);
