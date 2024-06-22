import axios from "axios";


  export const perPage = 15;


export async function getArticles(query, currentpage){
  axios.defaults.baseURL = `https://pixabay.com`;
  const params = {
    key:`44189121-1bd84ab9c2376b17257837ab7`,
    q: query,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: `true`,
      per_page: perPage,
      page: currentpage,
  }
  try{
    const res = await axios.get(`/api/`, {params});
    return res.data;
  }catch(err){
console.log(err);
  }

}





