import fetchJsonp from "fetch-jsonp";

export type ArtworkSearchResult = {
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
};

export type ArtworkSearchResults = {
  resultCount: number;
  results: ArtworkSearchResult[];
};

export async function artworkSearch(
  query: string
): Promise<ArtworkSearchResults> {
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
