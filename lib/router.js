Router.configure({
  loadingTemplate: 'loading',
  //waitOn: function() { return Meteor.subscribe('appointments'); },
  layoutTemplate: 'layout',

  notFoundTemplate: 'notFound'

});

Router.route('/', {name: 'appointmentsList'});

Router.route('/appointments/:_id', {
  name: 'appointmentPage',
  data: function() { return Appointments.findOne(this.params._id); }
});

Router.route('/appointments/:_id/edit', {
  name: 'appointmentEdit',
  data: function() { return Appointments.findOne(this.params._id); }
});


Router.route('/add', {name: 'appointmentSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'appointmentPage'});
Router.onBeforeAction(requireLogin, {only: 'appointmentSubmit'});
