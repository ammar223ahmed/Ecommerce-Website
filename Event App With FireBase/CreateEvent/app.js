import{
ref,
storage,
uploadBytes,
getDownloadURL,
db,
collection,
addDoc
}from '..//Utils/utils.js'

const event_form = document.getElementById("Event_form");
const addEvent = document.getElementById("addEvent");


event_form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(e);
    const eventInfo = {
        title : e.target[0].value,
        banner: e.target[1].files[0],
        // banner: document.getElementById("floating_file"),
        desc  : e.target[2].value,
        price : e.target[3].value,

         
    }
    addEvent.disabled = true
  addEvent.innerText = "Loding.."
    // console.log("Event Info", eventInfo.banner.name);

    const imgRef = ref(storage, eventInfo.banner.name)
    uploadBytes(imgRef , eventInfo.banner).then(() =>{
        console.log("File Uplode Done")


        getDownloadURL(imgRef).then((url) =>{
            console.log("URL Ah Gaya", url);
            eventInfo.banner = url;

            // add docunment to events collection

            const eventCollection = collection(db , "Products")
             addDoc(eventCollection, eventInfo).then((snapshot) =>{
                console.log("Document Added");
                window.location.href = "/";
             })
        })
    })
});










