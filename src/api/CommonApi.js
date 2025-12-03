import axios from "axios";
import { BASE_URL, STATUS_CODE } from "./constants";
import { toast } from "react-toastify";
 
const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
 
class API {
  constructor() {
    this.baseURL = BASE_URL;
  }
 
  async get(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.GET, url, data)     
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          toast.error("Something went wrong"); 
        });
    });

  }
 
  post(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.POST, url, data)
        .then((response) => {
           if(response.data){
            toast.success(" post request successfully");
            resolve(response);
          }
          else{
            toast.error("post Request Failed",);
          } 
        })
        .catch((error) => {
          toast.error("Something went wrong"); 
        });
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.PUT, url, data)
        .then((response) => {
          toast.success(" update request successfully");
          resolve(response);
        })
        .catch((error) => {
          toast.error("Something went wrong"); 
        });
    });
  }
  delete(url, data) {
    return new Promise((resolve, reject) => {
      this.api(METHOD.DELETE, url, data)
        .then((response) => {
          toast.success(" delete request successfully");
          resolve(response);
        })
        .catch((error) => {
          toast.error("Something went wrong"); 
        });
    });
  }
  api(method, url, data) {
    return new Promise(( resolve,reject) => {
      let axiosConfig = {};
      axiosConfig.method = method;
      axiosConfig.url = this.baseURL + url;
      axiosConfig.headers = this.setHeaders(data);
      
      if (data) {
        if (data) axiosConfig.data = data;
      }
 
      axios(axiosConfig)
        .then((response) => {
          if (
            response &&
            response.status === STATUS_CODE.INTERNAL_SERVER_ERROR
          ) {
            toast.error("Something went wrong!!");
          } else {  
            resolve(response);
            if (response) {
            }
            else if (response.status === 200) {
              toast.success(' response success')
                
            }
            else {
              toast.error("Something went wrong"); 
            }
          }
        })
        .catch((error) => {
        });
    });
  }
  setHeaders(data) {
    let headers = {};
    headers["accept-language"] = "en";
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
    headers["Authorization"] = localStorage.getItem("token");
    if (data) {
      if (data.isMultipart) {
        headers["Content-Type"] = "multipart/form-data";
      }
      if (data.headers) {
        for (var key in data.headers) {
          if (data.headers.hasOwnProperty(key)) {
            headers[key] = data.headers[key];
          }
        }
      }
    }
    return headers;
  }
}
export default API;


