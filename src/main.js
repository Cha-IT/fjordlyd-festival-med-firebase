import { db } from "./firebaseConfig.js";
import { addDoc, collection, getDocs, query, orderBy, where } from "firebase/firestore";

const appEl = document.querySelector("#app");
const nameInput = document.querySelector("#name");
const genreInput = document.querySelector("#genre");
const countryInput = document.querySelector("#country");
const dayInput = document.querySelector("#day");
const submitButton = document.querySelector("#submit");

const artistList = document.createElement("ul");

submitButton.addEventListener("click", addArtistToDatabase);

async function addArtistToDatabase(e) {
  e.preventDefault();
  const name = nameInput.value
  const genre = genreInput.value
  const country = countryInput.value
  const day = dayInput.value

  await addDoc(collection(db, "artists"), {
    name: name,
    genre: genre,
    country: country,
    day: day
  })

  nameInput.value = "";
  genreInput.value = "";
  countryInput.value = "";
  dayInput.value = "";

  console.log("Artist added to database");

  fetchArtists();


}

async function fetchArtists() {
  console.log("Fetching artists from database...");
  artistList.replaceChildren();

  const querySnapshot = await getDocs(
    query(collection(db, "artists"),
    orderBy("genre", "asc")
  ));
  querySnapshot.forEach((doc) => {
    
    const artistListItem = document.createElement("li");
    artistListItem.textContent = `${doc.data().name} - ${doc.data().genre} - ${doc.data().country} - ${doc.data().day}`;
    artistList.appendChild(artistListItem)
  })
  appEl.appendChild(artistList);
}

fetchArtists();