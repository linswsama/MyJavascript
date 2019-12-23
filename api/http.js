function http(obj) {
	return new Promise((resolve,reject)=>{
		uni.request({
			...obj,
			success:resolve,
			fail:reject,
		});
	})
}
export default http;