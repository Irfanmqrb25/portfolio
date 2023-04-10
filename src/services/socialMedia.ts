import axios from "axios";
import { log } from "console";

//Get instgram user data
export const fetchInstagram = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://instagram210.p.rapidapi.com/ig_profile",
      params: { ig: "_irfanmqrb" },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY,
        "X-RapidAPI-Host": "instagram210.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    return { data: response.data, isLoading: false };
  } catch (error) {
    console.error(error);
  }
};

//Get github user data
interface repo {
  stargazers_count: number;
}
export const fetchGithub = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/Irfanmqrb25",
      {
        headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_TOKEN },
      }
    );
    const repos = await axios.get(
      "https://api.github.com/users/Irfanmqrb25/repos",
      {
        headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_TOKEN },
      }
    );
    const stars = repos?.data?.reduce(
      (total: number, repo: repo) => total + repo.stargazers_count,
      0
    );

    return { data: { response: response.data, stars }, isLoading: false };
  } catch (error) {
    console.error(error);
  }
};

//get twitter user data
export const fetchTwitter = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/UserByScreenName/",
      params: { username: "irfanmqrb" },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY,
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    return { data: response.data, isLoading: false };
  } catch (error) {
    console.error(error);
  }
};
