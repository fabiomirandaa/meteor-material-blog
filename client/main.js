UI.body.events({
  "click #logout": function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

