export const config = {
  apiKey: "AIzaSyAI1_JN9QSnvyPc53GskQ0t0DHCiUSmL-E",
  authDomain: "songs-i-know-2020.firebaseapp.com",
  databaseURL: "https://songs-i-know-2020.firebaseio.com",
  projectId: "songs-i-know-2020",
};

export function stripRefs(refsObject) {
  return refsObject.map(({ ref, ...rest }) => {
    return { ...rest };
  });
}

export function cleanDoc(sourceObject) {
  return Object.fromEntries(
    Object.entries(sourceObject).filter(([key, value]) => {
      if (value !== null && value !== undefined) {
        return [key, value];
      }
    })
  );
}
