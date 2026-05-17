import API from "./api";

export const getCartItems = () => API.get("/api/cart");

export const addToCart = (data) =>
  API.post("/api/cart", data);

export const removeCartItem = (id) =>
  API.delete(`/api/cart/${id}`);

export const updateCartQuantity = (id, data) =>
  API.put(`/api/cart/${id}`, data);