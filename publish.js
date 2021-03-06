const ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {

}).then(function() {
    console.log('Published')
})
