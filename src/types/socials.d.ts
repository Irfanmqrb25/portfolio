interface UserInstagram {
  username: string;
  edge_follow: { count: number };
  edge_followed_by: { count: number };
  edge_media_collections: { count: number };
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
