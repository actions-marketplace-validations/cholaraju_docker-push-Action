🚀 Publish Docker Image – GitHub Action
This GitHub Action builds and pushes a Docker image to Docker Hub.

✅ Supports image tagging
✅ Accepts Docker credentials via inputs
✅ Easy integration in any workflow

📦 Inputs
Name	Description	Required	Default
image_name	Name of the image (e.g., username/my-app)	✅ Yes	
docker_username	Docker Hub username	✅ Yes	
docker_password	Docker Hub password or access token	✅ Yes	
tag	Docker image tag (e.g., latest, v1.0.0)	❌ No	latest

📤 Output
Name	Description
image	The full image name with tag

🛠️ Example Usage
yaml
Copy
Edit
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Publish Docker Image
        uses: cholraju/docker-publish-action@v1
        with:
          image_name: yourdockerhub/my-app
          docker_username: ${{ secrets.DOCKER_USERNAME }}
          docker_password: ${{ secrets.DOCKER_PASSWORD }}
          tag: latest
🔐 Secrets Required
Before using this action, you must add the following GitHub Secrets:

DOCKER_USERNAME – Your Docker Hub username

DOCKER_PASSWORD – Your Docker Hub password or access token

