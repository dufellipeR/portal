import api from "./api";

export const loadForm = async () => {
  const { data } = await api.post('OxenConsTpCLient/v1', {content: { PORTAL: "MTXVEN", VENDEDOR: "Login" }});
  return data
}

