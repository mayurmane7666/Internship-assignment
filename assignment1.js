
const token =
  "BQBgcloJozM5ULC0UhrtSZD2kL7HhKIMY5KGG_DROamTKrIbKbP4DJn_KGb7aFxBXldPDHaEmdw_4s8G-q6_AHQKY-OhU9Z-PqvEscKz718yHXZ0Ih77K8RCNqgUFwVNwrYrDyfpT5VRCmskzp2sIZGk7B4eGcDPFRtmR4vXMpegOHZE_KdoPldl7_OsnmLUKKEMnmbUl2O6ZP1kT6_LVAUpYdWwKFzjW37YNHF_7U9L-hUrPsH-7wjg0LCOJ77-ndjDtM8Eighi6_h5WTdSaZ8o";
var artistList = [
    "2CIMQHirSU0MQqyYHq0eOx",
    "1vCWHaC5f2uS3yhpwWbIA6",
    "4YRxDV8wJFPHPTeXepOstw",
    "7o7doCwqft91WC690aglWC",
    "0TnOYISbd1XYRBk9myaseg",
  ];
const url = `https://api.spotify.com/v1/artists?ids=${artistList}`;
const request = new Request(
  url,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
  "GET"
);

async function getData() {
  try {
    const response = await fetch(request);
    const data = await response.json();
    if (response.status == 200) {
      renderData(data.artists);
    } else {
      console.log("Server Error : ", data.error.message);
    }
  } catch (error) {
    console.log("ERROR : ", error);
  }
}
getData();


function renderData(num) {
  let doc = document.getElementById("assignment1");
  const data = num;
  for (let i in num) {
    console.log("times");
    doc.insertAdjacentHTML(
      "beforeend",
      `<div class="container"><div class="main">
    <div class="head">
      <div class="row">
        <div class="col-md-4 image">
          <img
            src=${num[i].images[0].url}
            alt="Image of Artist"
          />
        </div>
        <div class="col-md-6 paragraph">
          <p>Name: ${num[i].name}</p><br />
          <p>Follower: ${num[i].followers.total}</p><br />
          <p>Music Kind:${num[i].genres?.find((element) => {
        return element;
      })}
          </p><br />
        </div>
      </div></div>`
    );
    console.log(num[i]);
  }
}
renderData();