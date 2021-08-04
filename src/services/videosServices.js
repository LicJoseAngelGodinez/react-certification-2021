
// la responsabilidad de esto es solo hacer llamadas al API
// lógica aparte.
export const fetchVideos = async (url) => {
  const data = await fetch(url);
  const response = await data.json();

  return response;  
};