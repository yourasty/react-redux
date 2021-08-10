export const initial = (id = 1) => {
  return {
    type: "FETCH_SHOW",
    payload: fetch(`https://api.tvmaze.com/shows/${id}`).then((response) =>
      response.json()
    ),
  };
};

export const episode = (data) => {
  return {
    type: "UPDATE_EPISODE",
    payload: data,
  };
};

export const season = (data) => {
  return {
    type: "UPDATE_SEASON",
    payload: data,
  };
};

export const getEpisodes = (id = 1) => {
  return {
    type: "FETCH_EPISODES",
    payload: fetch(`https://api.tvmaze.com/shows/${id}/episodes`).then(
      (response) => response.json()
    ),
  };
};
