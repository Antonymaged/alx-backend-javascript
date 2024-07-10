export default function getFullResponseFromAPI(success){
	return new Promise((res, rej) => {
		if(success === true){
			let obj = {status : 200, body : 'Success'};
			res(obj);
		}
		else{
			rej(new Error("The fake API is not working currently"));
		}
	})
}
