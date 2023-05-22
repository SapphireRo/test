const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  const { context } = require("@actions/github");
  const { data } = await octokit.repos.getCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: context.sha,
  });
  const commitMessage = data.commit.message;

  if (commitMessage.match(/\[ *bug *\]/i)) {
    await octokit.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: commitMessage,
      body: `Commit message: ${commitMessage}`,
    });
  }
}

run();
