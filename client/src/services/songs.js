import api from './api-config'

export const getAllSongs = async () => {
  const resp = await api.get('/songs');
  return resp.data;
}

export const getOneSong = async (id) => {
  const resp = await api.get(`/songs/${id}`);
  return resp.data;
}

export const postSong = async (songData) => {
  const resp = await api.post('/songs', songData);
  return resp.data;
}

export const putSong = async (id, songData) => {
  const resp = await api.put(`/songs/${id}`, songData);
  return resp.data;
}

export const deleteSong = async (id) => {
  const resp = await api.delete(`/songs/${id}`);
  return resp.data;
}