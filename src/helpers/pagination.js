export const pagination =  (dataLength, postPerPage) => {
  let pagLinksNumber = Math.ceil(dataLength / postPerPage);
  
  let tempPagLinks = [];

    for (let x = 0; x < pagLinksNumber; x++) {
      let min = x * postPerPage;
      let max = min + postPerPage;
      tempPagLinks.push({ index: x, min: min, max: max });
    }

  return tempPagLinks;
  
};