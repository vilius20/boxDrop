function getValues(arr, key) {
  let response = [];

  for (let i = 0; i < arr.length; i++) {
    response.push(arr[i][key]);
  }
  return response;
}

function mapArray(arr, key) {
  let response = {};

  for (let i = 0; i < arr.length; i++) {
    response[arr[i][key]] = arr[i];
  }
  return response;
}