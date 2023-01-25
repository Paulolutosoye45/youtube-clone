import axios from "axios";
const ApI_URL = 'AIzaSyBh-eHqLIAkjkDVT9K-WQOBrxewBlIb_Wk'
const chaneLd = 'XWePdlCGTno'
const FetchURL = `https://www.googleapis.com/youtube/v3/search?key=${ApI_URL}&chaneLd=${chaneLd}&part=snippet,id&order=date&maxResult=20`

// const ApI_URL = 'https://youtube-v31.p.rapidapi.com'
// https://www.googleapis.com/youtube/v3
// const options =  {
//     params : {
//         maxResults : 50,
//     },
//     headers: {
//         'X-RapidAPI-key': 'AIzaSyBh-eHqLIAkjkDVT9K-WQOBrxewBlIb_Wk',
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// }

// export const DataFetched = async (url) => {
//   const { data } = await axios.get(` ${ApI_URL}/ ${url}`, options )
  
//  console.log(data)
//   return data
// }
// export const DataFetched = () => {
//     fetch(ApI_URL).then(response => {
//         response.json().then(data => ({
//             data: data,
//             status : response.status
//         })).catch(err => {
//             console.log(err.code)
//         })
//     })
// }
//  export const YoutubeApi = () => {



// fetch(FetchURL)
// .then(response =>
//     console.log( response.json))
//   .catch(err => {
//     console.log(err.message)
// })
//  }


  export const CallingYoutubeApi = () => {
    axios.get(FetchURL).then((response) => {
        console.log(response.data)
    }).catch((err) => {
        console.log(err.message)
    })
 }
 
