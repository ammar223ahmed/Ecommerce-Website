import{
    auth,
    db,
    storage,
    signOut,
   getDoc,
    doc,
    onAuthStateChanged,
    getDocs,
    collection,
    } from  '..//Utils/utils.js';


    const logout_btn = document.getElementById("logout_btn");
  const login_link = document.getElementById("login-link");
  const user_img = document.getElementById("user-img");
  const eventsCardsContainer = document.getElementById("eventsCardsContainer");
  getAllEvents();
   

  onAuthStateChanged (auth, (user) => {
    if(user){
    const uid = user.uid;
    login_link.style.display = "none";
    user_img.style.display = "inline-block";
    getUserInfo(uid);
    }else{
        window.location.href = '/Auth/login/index.html'
        login_link.style.display = "inline-block";
    user_img.style.display = "none";
    }
    
    });
    
    
    logout_btn.addEventListener("click", () =>{
      signOut(auth);
    
    });
    
  function getUserInfo(uid){
    const userRef = doc(db, "users" , uid);
    getDoc(userRef).then((data) =>{
      console.log("data ==>", data.id);
      console.log( data.data());
      user_img.src =  data.data().img;
    })
  
  }
  
   
  async function getAllEvents(){
    try{
      const querySnapshot = await getDocs(collection(db, "Products"));
     eventsCardsContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const event = doc.data();
        
       const {banner, title , desc, price, createdby, createdbyemail} = event;
    
        const card = `<div class="card" style="width: 15rem; ">
       <img src="${banner}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${title}</h5>
         <p class="card-text">${desc}</p>
         <p class="card-text" style="font-weight: bold; font-size: 1em;">$${price}</p>
     <a href="#" class="btn btn-primary">Add To Card</a>
       </div>
     </div>`;
        
     eventsCardsContainer.innerHTML += card;
     console.log(event);
    
    
      });
    }catch(err){
      alert(err);
      console.log("Error",err);
    }
    }
    