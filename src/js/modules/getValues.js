function getValues(arr, key) {
  let response = [];

  for (let i = 0; i < arr.length; i++) {
    response.push(arr[i][key]);
  }
  return response;
}

export default getValues;