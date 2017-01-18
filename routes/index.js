var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var token = req.query.token;
    // if (typeof token == 'undefined') {
    //     res.render('error', {
    //         message: 'token不能为空',
    //         error: {
    //             status: -1000,
    //             stack: -1000
    //         }
    //     });
    //     return;
    // } else {
    // 	//调用接口验证token
    	
    //     res.render('index', { token: token});
    // }

    res.render('index', { token: token});
});


module.exports = router;
