// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWcjZ6zFvx5ddBaX4PULjAhsHgXiLEgUM",
    authDomain: "fit-connect-form.firebaseapp.com",
    projectId: "fit-connect-form",
    storageBucket: "fit-connect-form.appspot.com",
    messagingSenderId: "204797459346",
    appId: "1:204797459346:web:0f4286e38438daad38df4b"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.then(e=>window.location.href = '/index.html');
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })