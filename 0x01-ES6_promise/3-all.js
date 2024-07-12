import { uploadPhoto, createUser } from './utils.js';
export default function handleProfileSignup(){
	return Promise
	.all([uploadPhoto(), createUser()])
	.catch(() => console.log("Signup system offline"))
	.then((r) => console.log(`$r[0].body $r[1].firstName $r[2].lastName`));
}
