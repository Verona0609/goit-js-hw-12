import axios from "axios";





export const searchImages = async(query, page = 1, perPage = 15)=>{

  const BASE_URL = `https://pixabay.com`;
const END_POINT = `/api/`
const url= `${BASE_URL}${END_POINT}?${params}`;
try{
  const res =await axios.get(url, {
    params : {
      key: `44189121-1bd84ab9c2376b17257837ab7`,
      q: query,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: `true`,
  page: page,
  per_page: perPage,
    },

  });
return res.data;

}catch(error){
  console.error("Error fetching images :", error);
  throw error;
}
}