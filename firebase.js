import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhspD3jqwF7iS9ypg6JQszvH2Fn3I4hc_4",
  authDomain: "everyday-math-lab.firebaseapp.com",
  projectId: "everyday-math-lab",
  storageBucket: "everyday-math-lab.appspot.com",
  messagingSenderId: "955525594831",
  appId: "1:955525594831:web:25c849c25b03df21dec1ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
