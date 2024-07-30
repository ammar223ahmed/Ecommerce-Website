import{
    auth,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    db,
    ref,
    uploadBytes ,
    getDownloadURL,
    storage
}from  '../../Utils/utils.js';

   // Create Account =>  createUserWithEmailAndPassword
// Uplode =>  ref,   uploadBytes , getDownloadURL
// Set Complete Data Into FireStore  =>  doc,  setDoc

const signup_btn = document.getElementById("signup_form");
const submit_btn = document.getElementById("submit_btn");

signup_btn.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[4].value;
    const lastName = e.target[5].value;
    const phone = e.target[6].value;
    const conpany = e.target[7].value;

    // console.log("Img", img);
    
    const userInfo = {
        img,
        email,
        password,
        firstName,
        lastName,
        phone,
        conpany,
    };

    // Created Account...

    submit_btn.disabled = true
    submit_btn.innerText = "Loding..."
    
    createUserWithEmailAndPassword(auth , email , password).then((user)=>{
        console.log(user.user.uid);
        
        const userRef = ref(storage, 'user/${user.user.uid}');
        uploadBytes(userRef , img)
        .then(() =>{
            console.log('User Image uploded...');
        // Getting Urlof the Inmage we just Uploded...  
            getDownloadURL(userRef).then((url) =>{
        console.log("Url Ah Gaya", url);

        userInfo.img = url;
    //    Created  User Document Reference
        const userDbRef = doc(db, 'users' , user.user.uid);

        // Set this document to db..
        setDoc(userDbRef, userInfo).then(() =>{
            console.log("User Object Updated into DB");
            window.location.href = "/";
            submit_btn.disabled = false
            submit_btn.innerText = "Submit"
        })
    
         

    }).catch((err) => {console.log("Url FireBase nii De Raha");
        submit_btn.disabled = false
         submit_btn.innerText = "Submit"
    }
);

        }) .catch(() =>{
            console.log('Error in uploding img');
            submit_btn.disabled = false
            submit_btn.innerText = "Submit"
        });
    })
    .catch((err)=>{ 
        alert(err);
        submit_btn.disabled = false
        submit_btn.innerText = "Submit" 
    });
   
    // console.log( "User Info", userInfo);
});
