import{ auth,  signInWithEmailAndPassword }from  '../../Utils/utils.js';

const login_form = document.getElementById("login_form");

login_form.addEventListener("submit", function(e){
    e.preventDefault();
    // const email = e.target[1].value;
    const email = document.getElementById("floating_email").value;
    // const password = e.target[2].value;
    const password = document.getElementById("floating_password").value;
    console.log("Email", email)
    // console.log("Password", password)

    // signInWithEmailAndPassword(auth , email , password).then(() =>{
    //     window.location.href = "/";
    // }).catch((err) => alert(err));
  
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    window.location.href = "/";
    // ...
  })
  .catch((error) => {
   console.log("Error ah gaya", error);
  });
});

