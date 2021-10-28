import api from './api-config'

export const getAllSongssamples = async () => {
  const resp = await api.get('/songssamples');
  return resp.data;
}


export const getOneSongssample = async (id) => {
  const resp = await api.get(`/songssamples/${id}`);
  return resp.data;
}

export const postSongssample = async (songssampleData) => {
  const resp = await api.post('/songssamples', songssampleData);
  return resp.data;
}

export const putSongssample = async (id, songssampleData) => {
  const resp = await api.put(`/songssamples/${id}`, songssampleData);
  return resp.data;
}

export const deleteSongssample = async (id) => {
  const resp = await api.delete(`/songssamples/${id}`);
  return resp.data;
}