// Define Template helper to return postData array
Template.postsList.helpers({
  posts: function(){
    return Posts.find();
    // “In Meteor, find() returns a cursor, which is a reactive data source”
    // “When we want to log its contents, we can then use fetch() on 'find()'
    // to transform it into an array”
  }
  // Assign posts object (defined in 'postsList' template) as > 'Posts' collection
});
