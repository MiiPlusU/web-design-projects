pipeline {
    agent any
    environment {
        // Define environment variables
        IMAGE_NAME = 'your-image-name'
        IMAGE_TAG = "${BUILD_NUMBER}"
        ECR_REPO = 'your-ecr-repo'
        ECR_REGISTRY = 'your-ecr-registry'
        ECR_URL = "${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}"
        KUBE_CONFIG = '/path/to/your/kubeconfig'  // Adjust as needed
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }
        stage('Test Docker Image') {
            steps {
                script {
                    // Run Docker container and validate functionality
                    sh '''
                    docker run -d --name ${IMAGE_NAME}_test ${IMAGE_NAME}:${IMAGE_TAG}
                    sleep 10  # Adjust this as needed for your application startup time
                    docker logs ${IMAGE_NAME}_test
                    docker rm -f ${IMAGE_NAME}_test
                    '''
                }
            }
        }
        stage('Push to Amazon ECR') {
            steps {
                script {
                    // Log in to Amazon ECR
                    sh '''
                    $(aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin ${ECR_REGISTRY})
                    '''
                    // Tag and push Docker image to ECR
                    sh '''
                    docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${ECR_URL}
                    docker push ${ECR_URL}
                    '''
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Set Kubeconfig path
                    withEnv(["KUBECONFIG=${KUBE_CONFIG}"]) {
                        // Apply Kubernetes manifests
                        sh '''
                        kubectl apply -f k8s/deployment.yaml
                        kubectl apply -f k8s/service.yaml
                        '''
                    }
                }
            }
        }
    }
    post {
        always {
            // Clean up Docker images
            sh '''
            docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true
            docker system prune -f
            '''
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Review the logs for details.'
        }
    }
}
