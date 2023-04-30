export const getShipId = (url) => {
  const id = url.replace("https://swapi.dev/api/starships/", "").replace("/", "")

  return id
}