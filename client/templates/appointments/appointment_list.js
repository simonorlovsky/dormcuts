Template.appointmentsList.helpers({
  appointments: function() {
    return Appointments.find({}, {sort: {submitted: -1}});
  }
});
