import http from "./httpService";

export async function createCommentApi(data, options = {}) {
  return http.post(`/comment/add`, data, options).then(({ data }) => data);
}

export async function getAllCommentsApi(options = {}) {
  // await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  return http.get(`/comment/list`, options).then(({ data }) => data.data);
}

export async function deleteCommentApi(id, options = {}) {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function updateCommentApi({ id, data }, options = {}) {
  return http
    .patch(`/comment/update/${id}`, data, options)
    .then(({ data }) => data.data);
}

const commentApi = {
  createCommentApi,
  getAllCommentsApi,
  updateCommentApi,
  deleteCommentApi
};

export default commentApi;
