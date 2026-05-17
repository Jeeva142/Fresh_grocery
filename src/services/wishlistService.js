import API from "./api";

export const getWishlist = () =>
  API.get("/api/wishlist");

export const addWishlist = (data) =>
  API.post("/api/wishlist", data);

export const removeWishlist = (id) =>
  API.delete(`/api/wishlist/${id}`);