import axios from "axios";




 const BASE_URL = `https://pixabay.com`;
const END_POINT = `/api/`





export const getArticles = async(query, page = 1, perPage = 15)=>{

try{
  const res = await axios.get(`${BASE_URL}${END_POINT}`, {

    params: {

      key: `44189121-1bd84ab9c2376b17257837ab7`,
      q: query,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: `true`,
  page: page,
  per_page: perPage,
    },
})


return res.data;

}catch(error){
  console.error("Error fetching images :", error);
  throw error;
}
}

getArticles();
