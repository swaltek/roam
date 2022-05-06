import axios from "axios";
import apiHelpers from "./apiHelpers";

const apiCalls = {};
const BASE_URL = "http://localhost:8000/api"; //backend in project URLS

//user/auth api methods
apiCalls.signup = async (signupData) => {
  console.log(signupData);
  let newUser = await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig())
  );
  if (newUser) {
    return await apiCalls.login(signupData);
  }
};

apiCalls.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

apiCalls.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig())
  );
};

apiCalls.deleteAccount = async (userId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}/users/${userId}`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.whoAmI = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/whoami/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.updateUser = async (userId, data) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(`${BASE_URL}/users/${userId}/`, data, apiHelpers.getCsrfConfig())
  );
};

//listing methods

apiCalls.getAllListings = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/listings/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.createListing = async (listingData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/listings/`, listingData, apiHelpers.getCsrfConfig())
  );
};

apiCalls.getListingById = async (listingId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/listings/${listingId}/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.updateListingById = async (listingId, listingData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig());
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/listings/${listingId}/`,
      listingData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.deleteListingById = async (listingId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/listings/${listingId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

// amenities methods
apiCalls.getAllAmenities = async () => {
  console.log("In here");
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/amenities/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.createAmenity = async (amenityData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/listings/`, amenityData, apiHelpers.getCsrfConfig())
  );
};

apiCalls.getAmenityById = async (amenityId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/amenities/${amenityId}/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.updateAmenityById = async (amenityId, amenityData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig());
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/amenities/${amenityId}/`,
      amenityData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.deleteAmenityById = async (amenityId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/amenities/${amenityId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

// reviews methods

apiCalls.getAllReviews = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/reviews/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.createReview = async (reviewData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}/reviews/`, reviewData, apiHelpers.getCsrfConfig())
  );
};

apiCalls.getReviewById = async (reviewId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/reviews/${reviewId}/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.updateReviewById = async (reviewId, reviewData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig());
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/reviews/${reviewId}/`,
      reviewData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.deleteReviewById = async (reviewId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}/reviews/${reviewId}/`, apiHelpers.getCsrfConfig())
  );
};

// reservation methods

apiCalls.getAllReservations = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/reservations/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.createReservation = async (reservationData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(
      `${BASE_URL}/reservations/`,
      reservationData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.getReservationById = async (reservationId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(
      `${BASE_URL}/reservations/${reservationId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.updateReservationById = async (reservationId, reservationData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig());
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/reservations/${reservationId}/`,
      reservationData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.deleteReservationById = async (reservationId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/reservations/${reservationId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

//addresses

apiCalls.getAllAddresses = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/addresses/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.createAddress = async (addressData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(
      `${BASE_URL}/addresses/`,
      addressData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.getAddressById = async (addressId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}/addresses/${addressId}/`, apiHelpers.getCsrfConfig())
  );
};

apiCalls.updateAddressById = async (addressId, addressData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig());
  return await apiHelpers.tryCatchFetch(() =>
    axios.patch(
      `${BASE_URL}/addresses/${addressId}/`,
      addressData,
      apiHelpers.getCsrfConfig()
    )
  );
};

apiCalls.deleteAddressById = async (addressId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(
      `${BASE_URL}/addresses/${addressId}/`,
      apiHelpers.getCsrfConfig()
    )
  );
};

export default apiCalls;
