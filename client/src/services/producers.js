import api from './api-config'

export const getAllProducers = async () => {
  const resp = await api.get('/producers');
  return resp.data;
}

export const getOneProducer = async (id) => {
  const resp = await api.get(`/producers/${id}`);
  return resp.data;
}

export const postProducer = async (producerData) => {
  const resp = await api.post('/producers', producerData);
  return resp.data;
}

export const putProducer = async (id, producerData) => {
  const resp = await api.put(`/producers/${id}`, producerData);
  return resp.data;
}

export const deleteProducer = async (id) => {
  const resp = await api.delete(`/producers/${id}`);
  return resp.data;
}