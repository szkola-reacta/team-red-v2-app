const axios = require("axios");

const INFINITE_GITHUB_ORG_TOKENT = "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";
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
