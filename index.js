const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const imageName = core.getInput('image_name');
    const dockerUsername = core.getInput('docker_username');
    const dockerPassword = core.getInput('docker_password');
    const tag = core.getInput('tag') || 'latest';

    core.info(`Logging into Docker Hub as ${dockerUsername}...`);
    await exec.exec('docker', ['login', '-u', dockerUsername, '-p', dockerPassword]);

    core.info(`Building Docker image ${imageName}:${tag}...`);
    await exec.exec('docker', ['build', '-t', `${imageName}:${tag}`, '.']);

    core.info(`Pushing image to Docker Hub...`);
    await exec.exec('docker', ['push', `${imageName}:${tag}`]);

    core.setOutput('image', `${imageName}:${tag}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
