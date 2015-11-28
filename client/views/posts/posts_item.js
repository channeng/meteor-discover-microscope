Template.postItem.helpers({
	// Provides the 'domain' expression in the template
	// computed from 'url' in 'post' object
	domain: function() {
		// “creating an empty anchor (a) HTML element and storing it in memory”
		var a = document.createElement('a');
		// “set its href attribute to be equal to the current post's URL”
		a.href = this.url;
		// “we take advantage of that a element's special hostname property to get back the link's domain name ”
		return a.hostname;
	}
});