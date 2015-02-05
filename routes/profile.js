// Get all of our friend data
var data = require('../data.json');

exports.viewProfile = function(req, res){
    var profileOf;

    //console.log(data);
    for (i = 0; i < data.friends.length; i++) {
    	var oneFriend = data.friends[i];
    	if (oneFriend.name == req.params.name) {
    		profileOf = oneFriend;
            console.log(profileOf);
    		break;
    	}
    }
    //console.log(profileOf);
	res.render('profile', profileOf);
};