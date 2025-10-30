import { CoverLetter } from '@/modules/coverLetter/model'

const DB_NAME = 'alt-shift-db'
const DB_VERSION = 1
const STORE_NAME = 'coverLetters'

let dbPromise: Promise<IDBDatabase> | null = null

function openDB(): Promise<IDBDatabase> {
  if (dbPromise) {
    return dbPromise
  }

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
        })
        store.createIndex('by_createdAt', 'createdAt')
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })

  return dbPromise!
}

// CREATE / UPDATE (put)
async function createCoverLetter(letter: CoverLetter): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.put(letter)

    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

// DELETE
async function deleteCoverLetter(id: string): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.delete(id)

    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

// DELETE ALL
async function deleteAllCoverLetters(): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.clear()

    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

// GET ONE
async function getCoverLetter(id: string): Promise<CoverLetter> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.get(id)

    req.onsuccess = () => {
      resolve(req.result as CoverLetter)
    }
    req.onerror = () => reject(req.error)
  })
}

// GET ALL
async function getAllCoverLetters(): Promise<CoverLetter[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.getAll()

    req.onsuccess = () => {
      resolve(req.result as CoverLetter[])
    }
    req.onerror = () => reject(req.error)
  })
}

const LocalDB = {
  createCoverLetter,
  deleteCoverLetter,
  deleteAllCoverLetters,
  getCoverLetter,
  getAllCoverLetters,
}
export default LocalDB
