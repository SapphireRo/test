const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN
    const octokit = github.getOctokit(token)

    // Get the issue information
    const { owner, repo, number } = github.context.issue
    const { data: issue } = await octokit.issues.get({
      owner,
      repo,
      issue_number: number
    })

    // Determine which labels to add
    const labelsToAdd = []
    if (issue.title.toLowerCase().includes('bug')) {
      labelsToAdd.push('bug', 'help wanted')
    }
    if (issue.title.includes('!')) {
      labelsToAdd.push('enhancement')
    }
    if (issue.title.includes('?')) {
      labelsToAdd.push('question')
    }
    if (
      issue.title.toLowerCase().includes('feature') ||
      issue.title.toLowerCase().includes('plan')
    ) {
      labelsToAdd.push('feature')
    }

    // Add the labels to the issue
    if (labelsToAdd.length > 0) {
      await octokit.issues.addLabels({
        owner,
        repo,
        issue_number: number,
        labels: labelsToAdd
      })
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
