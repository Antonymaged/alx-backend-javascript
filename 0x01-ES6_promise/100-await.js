import { uploadPhoto, createUser } from './utils.js'

export default async function asyncUploadUser() {
	let res = {};

	try {
		const p = await uploadPhoto();
		const u = await createUser();
		res = {p, u};
	} catch (err) {
		res = { photo: null, user: null };
	}
	return res;
}
