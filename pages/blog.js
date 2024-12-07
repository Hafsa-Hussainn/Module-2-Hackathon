import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDfc-SsUNmVvGs6z9dF9bQzJOl7LeOhVAI",
    authDomain: "login-project-efa14.firebaseapp.com",
    databaseURL: "https://login-project-efa14-default-rtdb.firebaseio.com",
    projectId: "login-project-efa14",
    storageBucket: "login-project-efa14.firebasestorage.app",
    messagingSenderId: "260790826429",
    appId: "1:260790826429:web:061882c239d4d15ceb4ed4",
    databaseURL: "https://login-project-efa14-default-rtdb.firebaseio.com"

     
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);






// Create Blog button

const btn = document.getElementById("abc");

btn.addEventListener("click", function () {
  const nameee = document.getElementById("nameee").value;
  const about = document.getElementById("about").value;
  const content = document.getElementById("content").value;

  set(ref(database, "user/" + nameee ), {
    name: nameee,
    about: about,
    content: content,
  })
    .then(() => {
      console.log("Data saved successfully!");
      alert("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      alert("Error saving data: " + error.message);
    });
});


function getData() {
  const userRef = ref(database, "user/");
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    alert(JSON.stringify(data));
    const userDataElement = document.getElementById("user-data");
    userDataElement.innerHTML = "";
    for (let x in data) {
      const userData = data[x];
      const userDataHTML = `
        
        <p>Name: ${userData.name}</p>
        <p>About: ${userData.about}</p>
        <p>Content: ${userData.content}</p>
      `;
      
     

      const updateUserButton = document.createElement("button");
      updateUserButton.textContent = "Update";
      updateUserButton.addEventListener("click", () => updateData(userData.name));

      const deleteUserButton = document.createElement("button");
      deleteUserButton.textContent = "Delete";
      deleteUserButton.addEventListener("click", () => deleteData(userData.name));

      const userDataContainer = document.createElement("div");
      userDataContainer.innerHTML = userDataHTML;
      userDataContainer.appendChild(updateUserButton);
      userDataContainer.appendChild(deleteUserButton);

      userDataElement.appendChild(userDataContainer);
    }
  });
}


function updateData(name) {
  const about = prompt("Enter new about:");
  const content = prompt("Enter new content:");

  const updates = {};
  updates["user/" + name + "/about"] = about;
  updates["user/" + name + "/content"] = content;

  update(ref(database), updates)
    .then(() => {
      console.log("Data updated successfully!");
      alert("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      alert("Error updating data: " + error.message);
    });
}


function deleteData(name) {
  remove(ref(database, "user/" + name))
    .then(() => {
      console.log("Data deleted successfully!");
      alert("Data deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
      alert("Error deleting data: " + error.message);
    });
}


document.getElementById("get-btn").addEventListener("click", getData);
document.getElementById("update-btn").addEventListener("click", updateData);
document.getElementById("delete-btn").addEventListener("click", deleteData);



 