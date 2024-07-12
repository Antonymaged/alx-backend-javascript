import { uploadPhoto, createUser } from './utils.js';
export default function handleProfileSignup(){
	return Promise
	.all([uploadPhoto(), createUser()])
	.then((r) => console.log(`$r[0].body $r[1].firstName $r[2].lastName`))
	.catch(() => console.log("Signup system offline"));
}
