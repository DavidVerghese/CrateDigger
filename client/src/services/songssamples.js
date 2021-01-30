import api from './api-config'

export const getAll = async () => {
  const resp = await api.get('/songssamples');
  return resp.data;
}

export const getOneSongsample = async (id) => {
  const resp = await api.get(`/songssamples/${id}`);
  return resp.data;
}

export const postSongsample = async (songsampleData) => {
  const resp = await api.post('/songssamples', songsampleData);
  return resp.data;
}

export const putSongsample = async (id, songsampleData) => {
  const resp = await api.put(`/songssamples/${id}`, songsampleData);
  return resp.data;
}

export const deleteSongsample = async (id) => {
  const resp = await api.delete(`/songssamples/${id}`);
  return resp.data;
}