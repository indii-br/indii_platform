export const convertArrayInObject = (array: Array<any>) => {
    const obj = {};

    array.forEach((v, i) => {
        obj[v.key] = v.label
    })

    return obj;
}

export const downloadBlob = (blob, name = 'file.txt') => {
    const blobUrl = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
  
    link.href = blobUrl;
    link.download = name;
  
    document.body.appendChild(link);
  
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );
  
    document.body.removeChild(link);
  }