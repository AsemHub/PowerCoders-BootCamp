import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Bt_F9O5_gdoaGRP3R8qp6QTnOk3GbRSMDyNMWEbyfcI",
  },
});
