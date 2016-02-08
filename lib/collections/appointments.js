Appointments = new Mongo.Collection('appointments');

Appointments.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
