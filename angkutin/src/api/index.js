import axios from "axios";

const API_URL = "https://6533b018e1b6f4c5904624a2.mockapi.io/order";

// get data 
export const fetchOrders = () => {
  return axios
    .get(API_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengambil data pesanan: ", error);
      throw error;
    });
};

//  mengirim data pesanan ke API
export const postOrder = (orderData) => {
  return axios
    .post(API_URL, orderData)
    .then((response) => {
      console.log("Data berhasil ditambahkan:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal menambahkan data pesanan: ", error);
      throw error;
    });
};

export const editOrder = async (orderId, updatedData) => {
  const url = `${API_URL}/${orderId}`;
  console.log(url)
  return axios
    .put(url, updatedData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log("Data berhasil diubah:", response);
      return response.data;
    })
    .catch((error) => {
      console.error("Gagal mengubah data pesanan: ", error);
      throw error;
    });
};

export const deleteOrder = (orderId) => {
  return axios
    .delete(`${API_URL}/${orderId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log("Data berhasil dihapus");
    })
    .catch((error) => {
      console.error("Gagal menghapus data pesanan: ", error);
      throw error;
    });
};



