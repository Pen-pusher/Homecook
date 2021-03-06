const baseUrl = "http://grgpratik.pythonanywhere.com";

const loginUrl = baseUrl + "/api/accounts/login/";

const signUpUrl = baseUrl + "/api/accounts/signup/";

const homeUrl = baseUrl + "/api/models/home/";

const passwordresetUrl = baseUrl + "/api/accounts/password/reset/";

const SearchUrl = baseUrl + "/api/models/Product/";

const editProfileUrl = baseUrl + "/api/models/edit-profile/";

const addToCartUrl = baseUrl + "/api/models/Cart/";

const getCartUrl = baseUrl + "/api/models/cart-list/";

const getUserInfoUrl = baseUrl + "/api/models/users/me/";

const createOrderUrl = baseUrl + "/api/models/orderlist/";

const orderHistory = baseUrl + "/api/models/order-history1/";

export default {
  baseUrl,
  loginUrl,
  signUpUrl,
  homeUrl,
  passwordresetUrl,
  SearchUrl,
  editProfileUrl,
  addToCartUrl,
  getCartUrl,
  getUserInfoUrl,
  createOrderUrl,
  orderHistory
};
