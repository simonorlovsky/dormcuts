Template.appointmentEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentAppointmentId = this._id;

    var appointmentProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }
    

    Appointments.update(currentAppointmentId, {$set: appointmentProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('appointmentPage', {_id: currentAppointmentId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this appointment?")) {
      var currentAppointmentId = this._id;
      Appointments.remove(currentAppointmentId);
      Router.go('appointmentsList');
    }
  }
});
