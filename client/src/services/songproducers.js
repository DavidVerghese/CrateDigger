import api from './api-config'

export const getSongProducerName = async (id) => {
  const resp = await api.get(`/songproducers/${id}`);
  return resp.data;
}
export const putSongProducerName = async (id, name) => {
  const resp = await api.put(`/songproducers/${id}`, name);
  return resp.data;
}
