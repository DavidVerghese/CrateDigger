import api from './api-config'

export const getAllSamples = async () => {
  const resp = await api.get('/samples');
  return resp.data;
}

export const getOneSample = async (id) => {
  const resp = await api.get(`/samples/${id}`);
  return resp.data;
}

export const postSample = async (sampleData) => {
  const resp = await api.post('/samples', sampleData);
  return resp.data;
}

export const putSongsample = async (id, sampleData) => {
  const resp = await api.put(`/samples/${id}`, sampleData);
  return resp.data;
}

export const deleteSample = async (id) => {
  const resp = await api.delete(`/samples/${id}`);
  return resp.data;
}