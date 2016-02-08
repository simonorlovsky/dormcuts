Template.appointmentSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var appointment = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    appointment._id = Appointments.insert(appointment);
    Router.go('appointmentPage', appointment);
  }
});
