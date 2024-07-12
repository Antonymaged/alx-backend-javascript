import { uploadPhoto, createUser } from './utils.js'

export default async function asyncUploadUser() {
	let res = {};

	try {
		const photo = await uploadPhoto();
		const user = await createUser();
		res = {p, u};
	} catch (err) {
		res = { photo: null, user: null };
	}
	return res;
}
