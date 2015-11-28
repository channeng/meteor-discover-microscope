// Code runs on both client and server
Posts = new Meteor.Collection('posts');
// “However, what the collection does in each environment is very different”
// “On the server, the collection has the job of talking to the Mongo database,
// and reading and writing any changes. In this sense, it can be compared to a
//  standard database library. On the client however, the collection is a 
// secure copy of a subset of the real, canonical collection. 
// The client-side collection is constantly and (mostly) transparently kept up 
// to date with that subset in real-time.

// The var keyword limits the scope of an object to the current file.
// We want to make the Posts collection available to our whole app, 
// which is why we're omitting that keyword here.