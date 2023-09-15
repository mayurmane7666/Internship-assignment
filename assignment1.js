// const tokens = [
//     'BQCFmOAEU8g5q3Bn76aVrg_P0UvRsdwQKfOWUvPs8RAcuOCoSSBByGXRAbqiHZYAtWYk5AXGduYE9JRAnbR-BLYsFHASXl29aMupKezrFV_G76yJEbyFQ2QP2OdKZAq_YiBJRZw8iroUdC5DmnLhKE3IkxJRPPScnc0Fdx5BrHhAwMDJVnAnFNPVI4V55DtNsUDHb1pvfXnXFsq7L02-OZoBnhZI-X5pwm38gbj2IQgsbG0PIvWBPDgcfXHF-5T9eZ1HKJ0MG-6GPdUteT-kQ8HT',
//     'BQD6wstSEmb2whg1LXiOYWe5OA0lVFoMwYfAPam_zuyDCX2bLP7bpjIfnslVfD6sPMVqdcMmDass6NQ9r72_ZGgv_gwhdqzkX-HqwsErLoH_36EHf8PsGS6cSSoao3SPm9LM2Zcqbjnpk1Ad1IjDHW2fO5cSWQuksMzKs_8rdLzuL2CIP70Oyj2FrmZP5Ch3KF_Z6iozElw010-juqVouiwU1MF88g6vJfK7vrx4xxr3S-gBP5OZbzy7w3-p-55pLNnqLO2UFjfBUvUJDsLIQCPd',
//     'BQCd4vWnADLZhsye9uofs6c3kieEYuWVpclPly5SyNKcVOZrk0Ymapeup_WnTpUfgioAmFOnLPlwWCbk5LTZEJyPjWQiqB-Qp6qO_SuU41BQwMO5nDq4KrPeDNx9sxsknCNSASkmCeA6q1QZusfkl2U9jHbF3BLIN8nNTGZy_rrUOYboyXURmQ1nwzhm3L5bOX1yq1QllzmFbqs1uxszrE3LSNhCttKBoGNtOW1ZMCpB1PwMjmSWR-5pmYhLPK5IKcvKw7jxk6q2QPqyFzW8YyeC'
// ];
  
//   const urls = [
//     "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//     "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
//     "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg"
//   ];
  
//   async function getData(url, token) {
//     const request = new Request(
//       url, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//       });
  
//     try {
//       const response = await fetch(request);
//       const data = await response.json();
//       if (response.status === 200) {
//         console.log("Success: ", data);
//       } else {
//         console.log('Server Error: ', data.error.message);
//       }
//     } catch (error) {
//       console.log('ERROR: ', error);
//     }
//   }
  
//   for (let i = 0; i < urls.length; i++) {
//     getData(urls[i], tokens[i]);
//   }
//...................................................................................................................//

const token = 'BQBl3iEEOwNn1EG8iKrss0U0G__qWic_dHfIq_s6CrgICe1fxMmZYKvT8a_nQDFgKlMLOSsS-_kmR_WnYeftZJAE9FOqKOOF5awJv5hCGK5j89EYxedXmj7Jt60OnRv_1GCEAi7mZIKmZincfOzB2-B1PrPSbx_j-ufkQS6DBghwvWFJnDy4TL94_lxdPc4E05f0jpd36cxsjGmWNfVpdc9ef0-6WP65F2QbG-meX_XkokfsRklvL33eYM9ppylv5gfaJZBJdOvyOePVwDd3lkDB';  
const url='https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseg,2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,'

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


    async function getData() {
        try {
            const response = await fetch(request);
            const data = await response.json();
            console.log(data);
            
           
            const dataContainer = document.getElementById("assignment1");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("h3");
                artistlist.textContent = `Creator Name: ${artist.name}`;
                dataContainer.appendChild(artistlist);
            });

            
            dataContainer.appendChild(artistList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


getData()