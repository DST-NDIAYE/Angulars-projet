import { Component } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(){

    const firebaseConfig = {
      apiKey: "AIzaSyDd4-qPhUY-8_IOlp1Hb3FoA18i8_9kClc",
      authDomain: "livre-a5616.firebaseapp.com",
      projectId: "livre-a5616",
      storageBucket: "livre-a5616.appspot.com",
      messagingSenderId: "1063723626872",
      appId: "1:1063723626872:web:c37f811524e8da10be988d",
      measurementId: "G-5Z7P2Z171N"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

}
