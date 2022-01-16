export function getDateString() {
  const now = new Date();
  return now.toLocaleString().replaceAll("/", "-").replaceAll(":", "-");
}

export function downloadObjectAsJson(exportObj = {}, exportName = "") {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(exportObj)
  )}`;
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function generateId(idLength = 12) {
  let ID = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < idLength; i++) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
}
