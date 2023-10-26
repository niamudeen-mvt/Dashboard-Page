
export const downloadFiles = (downlaodingList) => {
  if (downlaodingList?.length > 0) {
    downlaodingList?.forEach(e => {
      const anchor = document.createElement("a");
      anchor.href = e.url;
      anchor.download = e.filename;

      document.body.appendChild(anchor);
      anchor.click();
    })
  }
}


export const downloadCustomerDetail = (tableID, filename = '') => {
  if (tableID !== "") {
    let downloadLink;
    let dataType = 'application/vnd.ms-excel';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect?.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'customer_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      let blob = new Blob(['\ufeff', tableHTML], {
        type: dataType
      });

      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }
  }
}