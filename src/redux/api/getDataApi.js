import API from "../../api/CommonApi";
const api = new API();
const endPoints = "/bms";
export const fetchProductData = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`${endPoints}.json`);
      console.log("fetched data", response);
      if (response && response.data) {
        const fetchedData = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key]
        }));
        resolve(fetchedData);
        return(fetchedData)
      } else {
        resolve([]); 
      }
    } catch (error) {
      reject(error);
    }
  });
};