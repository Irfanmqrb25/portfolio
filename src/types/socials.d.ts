interface UserInstagram {
  username: string;
  following_count: number;
  follower_count: number;
  media_count: number;
}

interface UserGithub {
  name: string;
  login: string;
  followers: number;
  public_repos: number;
}

interface UserTwitter {
  name: string;
  screen_name: string;
  followers_count: number;
  friends_count: number;
}
