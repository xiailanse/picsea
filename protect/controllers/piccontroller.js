

//统一回调函数
var callback = function(req, res, err, data){
	if(err){
		res.send({success: false, error: err});
	}
	else{
		res.send({success: true, data: data});
	}
}


module.exports = {
	//获取图片
	getPic: function(req, res){
		var data = [{

		}];
		callbackback(req, res, null, data);
	}

}