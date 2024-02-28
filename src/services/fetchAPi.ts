export const fetchDisneyApi = async () => {
  const response = await fetch('https://api.disneyapi.dev/character');
  const data = await response.json();
  return data;
};
