import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
} from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage'
import firebase_app from '../Infra/Firebase'
const storage = getStorage()

const db = getFirestore(firebase_app)

async function get(collection: string, id: string) {
	const docRef = doc(db, collection, id)
	let result = null
	let error = null

	try {
		result = (await getDoc(docRef)).data()
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function getAll(colllection: string) {
	let result = null
	let error = null
	try {
		result = (await getDocs(collection(db, colllection))).docs.map((doc) =>
			doc.data(),
		)
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function getRealTime(colllection: string) {
	let result = null
	let error = null
	try {
		result = onSnapshot(doc(db, colllection), (doc) => {
			doc.data()
		})
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function insert(colllection: string, data: any, customId?: string) {
	let result = null
	let error = null

	try {
		if (customId)
			result = await await setDoc(doc(db, colllection, customId), data)
		else result = await await addDoc(collection(db, colllection), data)
	} catch (e) {
		error = e
	}

	if (result) {
		const id = result.id
		result = {
			...result,
			id,
		}
		update(colllection, id, { id })
	}

	return { result, error }
}

async function update(collection: string, id: string, data: any) {
	let result = null
	let error = null

	try {
		result = await setDoc(doc(db, collection, id), data, {
			merge: true,
		})
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function remove(collection: string, id: string) {
	let result = null
	let error = null

	try {
		result = await deleteDoc(doc(db, collection, id))
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function upload(collection: string, file: File) {
	let result = null
	let error = null
	try {
		const reference = ref(storage, `${collection}/${file.name}`)
		await uploadBytes(reference, file)
		result = await getDownloadURL(reference)
	} catch (e) {
		error = e
	}

	return { result, error }
}

async function deleteFile(collection: string, name: string) {
	let result = null
	let error = null
	try {
		const reference = ref(storage, `${collection}/${name}`)
		result = await deleteObject(reference)
	} catch (e) {
		error = e
	}

	return { result, error }
}

export default function Crud() {
	return {
		get,
		getAll,
		getRealTime,
		insert,
		update,
		remove,
		upload,
		deleteFile,
	}
}
