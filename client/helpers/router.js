Router.configure({
  // router to use the layout we just created as the default layout for all routes
  layoutTemplate: 'layout',
  // provide some visual feedback that something is happening, and that the user should wait a moment
  // Define which template while loading function in 'waitOn'
  loadingTemplate: 'loading',
  // this means is that the router will ensure that the posts subscription is loaded before sending the user through to the route they requested
  waitOn: function() { return Meteor.subscribe('posts'); }
  
});

// defined a new route called postsList and mapped it to the / path
Router.map(function() {
  this.route('postsList', {path: '/'});
});

// By default, Iron Router will look for a template with the  same name as the route. In fact, it will even look for a path  based on the route name, meaning that if we hadn't defined a  custom path (which we did by providing a path option in our  route definition), our template would've been accessible  at URL /postLists by default.
// “Naming routes lets us use a few Iron Router features that make it easier to build links inside our app. - Eg. {{pathFor 'postsList'}}