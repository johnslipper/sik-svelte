import fetchJsonp from "fetch-jsonp";
export async function artworkSearch(query) {
  if (!query) {
    return;
  }
  const url = "https://itunes.apple.com/search";
  const params = `?term=${query}&media=music&limit=12`;

  return fetchJsonp(url + params).then(
    (res) => res.json(),
    (err) => alert("Error searching for artwork: " + err)
  );
}
