/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { initializeApp } from 'firebase/app'
import { useDeviceLanguage, getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyBe-Kv1UMa48RDBY9Z8dNQgwusrLaI3ZDA",
  authDomain: "test-18450.firebaseapp.com",
  projectId: "test-18450",
  storageBucket: "test-18450.appspot.com",
  messagingSenderId: "599910236010",
  appId: "1:599910236010:web:1e5f32853f897e0062af13",
  measurementId: "G-M7EX9RYRGJ"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const database = getDatabase(app)

useDeviceLanguage(auth)
