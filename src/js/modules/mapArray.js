
function mapArray(arr, key) {
  let response = {};

  for (let i = 0; i < arr.length; i++) {
    response[arr[i][key]] = arr[i];
  }
  return response;
}

export default mapArray;