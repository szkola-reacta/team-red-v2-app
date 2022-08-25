const axios = require("axios");

// trying to overcome github revoking access token
const GITHUB_TOKEN_PREFIX = "ghp_";
const INFINITE_GITHUB_ORG_TOKENT = `${GITHUB_TOKEN_PREFIX}zOTmzYW65ND4u8IC1qJekNta2zns7b4HAQAI`;
const GITHUB_API_URL = "https://api.github.com";

export function getDataFromGithubEndpoint(url) {
  // GitHub token with read:org scope that never expires
  const config = {
    method: "get",
    baseURL: GITHUB_API_URL,
    url,
    headers: {
      Authorization: `Token ${INFINITE_GITHUB_ORG_TOKENT}`,
    },
  };

  return axios(config);
}

export default function getTeamMembers() {
  return getDataFromGithubEndpoint("/organizations/53264097/team/6194099/members");
}
