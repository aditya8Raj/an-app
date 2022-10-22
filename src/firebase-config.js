import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPUPTFx1JRE68tmN8lomYn6EgY4Pm2bq0",
  authDomain: "moodify-342a6.firebaseapp.com",
  projectId: "moodify-342a6",
  storageBucket: "moodify-342a6.appspot.com",
  messagingSenderId: "1017617816806",
  appId: "1:1017617816806:web:f10177cb4929fe445aef27",
  measurementId: "G-G9QWH9E9CJ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)