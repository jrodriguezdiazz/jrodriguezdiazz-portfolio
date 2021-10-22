import axios from 'axios';

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data.items;
      return repos.splice(0, 6);
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
      let repos = res.data.items;
      return repos.splice(0, 6);
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
