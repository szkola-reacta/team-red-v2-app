const axios = require("axios");

export default function getDataFromGithubEndpoint(url) {
  // GitHub token with read:org scope that never expires
  const INFINITE_GITHUB_ORG_TOKENT = "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";
  const GITHUB_API_URL = "https://api.github.com";
  const config = {
    method: "get",
    url: `${GITHUB_API_URL}${url}`,
    headers: {
      Authorization: `Token ${INFINITE_GITHUB_ORG_TOKENT}`,
    },
  };

  return axios(config);
}
