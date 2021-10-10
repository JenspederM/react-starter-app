export const downloadJsonObject = (object: { [key: string]: any }, fileName: string) => {
  let dataStr = JSON.stringify(object);
  let dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  let exportFileDefaultName = `${fileName}.json`;

  let linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
};

export const downloadHTMLContent = (content: string, fileName: string) => {
  let dataUri = "data:text/html;charset=utf-8," + encodeURIComponent(content);

  let exportFileDefaultName = `${fileName}.json`;

  let linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
};
