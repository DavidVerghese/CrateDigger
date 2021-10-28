import api from './api-config'

export const getAllSamplesAssociatedWithASong = async (id) => {
  const resp = await api.get(`/customroutes/${id}`);
  return resp.data;
}