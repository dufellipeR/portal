import api from "./api";

export const loadForm = async () => {
  const { data } = await api.post('OxenConsTpCLient/v1', {content: { PORTAL: "MTXVEN", VENDEDOR: "Login" }});
  return data
}

export const loadStates = async () => {
  const { data } = await api.post('OxenConsEstado/v1', {
    content: {
      PORTAL:"MTXVEN",
      VENDEDOR:"Login",
    },
  })

  return data
}

export const loadCities = async (state: string) => {
  const { data } = await api.post('OxenConsMunicipio/v1', {
    content: {
      PORTAL:"MTXVEN",
      VENDEDOR:"Login",
      ESTADO: state
    },
  })

  return data
}

