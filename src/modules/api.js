// post data to the API
const postData = async (name, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wunRN4KauzPVMO5qtTiS/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

// get data from the API
const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wunRN4KauzPVMO5qtTiS/scores/');
  const data = await response.json();
  return data;
};

export { postData, getData };