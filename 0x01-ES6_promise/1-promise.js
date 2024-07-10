export default function getFullResponseFromAPI(success){
	return new Promise((res, rej) => {
		if (success === true){
			const obj = {"body": "Success",
"status": 200};

			res(obj);
		} else {
			rej(new Error("The fake API is not working currently"));
		}
	});
}
