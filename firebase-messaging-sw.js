// HARITHA MAGA - Firebase Messaging Service Worker

importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAuz4oqBkwHf2qJ_93hGN9UyLcxSQZO71I",
  authDomain: "haritha-maga.firebaseapp.com",
  projectId: "haritha-maga",
  storageBucket: "haritha-maga.firebasestorage.app",
  messagingSenderId: "905401030287",
  appId: "1:905401030287:web:3eb62aacec81becb60c2fa"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "HARITHA MAGA";

  const options = {
    body: payload.notification?.body || "ඔබට අලුත් දැනුම්දීමක් ඇත."
  };

  self.registration.showNotification(title, options);
});
