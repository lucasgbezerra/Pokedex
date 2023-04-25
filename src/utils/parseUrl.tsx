export type dateFormats = 'numeric' | 'long';

export const parseUrl = (url: string) => {
  const baseUrl = "https://pokeapi.co/api/v2/"

  try {
    return url.replace(baseUrl, '');
  } catch (error) {
    return "";
  }
};
