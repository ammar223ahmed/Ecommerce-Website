
    
const user_img = document.getElementById("user-img");

    

    function getUserInfo(uid){
        const userRef = doc(db, "users" , uid);
        getDoc(userRef).then((data) =>{
          console.log("data ==>", data.id);
          console.log( data.data());
          user_img.src =  data.data().img;
        })
      
      }