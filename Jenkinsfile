pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        // Define all our microservices for rollback later
        SERVICES = ['client', 'auth', 'products', 'orders', 'payments', 'expiration']
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    // Build all images with correct tags
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./client'
                    sh 'docker build -t xxhjshamxx/ecomprod_auth ./auth'
                    sh 'docker build -t xxhjshamxx/ecomprod_expiration ./expiration'
                    sh 'docker build -t xxhjshamxx/ecomprod_orders ./orders'
                    sh 'docker build -t xxhjshamxx/ecomprod_payments ./payments'
                    sh 'docker build -t xxhjshamxx/ecomprod_products ./products'
                    
                    // Push images to Docker Hub
                    withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push xxhjshamxx/ecomprod_client'
                        sh 'docker push xxhjshamxx/ecomprod_auth'
                        sh 'docker push xxhjshamxx/ecomprod_expiration'
                        sh 'docker push xxhjshamxx/ecomprod_orders'
                        sh 'docker push xxhjshamxx/ecomprod_payments'
                        sh 'docker push xxhjshamxx/ecomprod_products'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f infra/k8s/'
                    sh 'kubectl rollout status deployment/client-depl'
                    sh 'kubectl rollout status deployment/auth-depl'
                    sh 'kubectl rollout status deployment/products-depl'
                    sh 'kubectl rollout status deployment/orders-depl'
                    sh 'kubectl rollout status deployment/payments-depl'
                    sh 'kubectl rollout status deployment/expiration-depl'
                }
            }
        }
    }
    
    post {
        always {
            // Clean up build node
            sh 'docker system prune -f'
        }
        failure {
            script {
                echo 'Deployment FAILED! Initiating automatic rollback for all services...'
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    // Roll back each microservice deployment
                    env.SERVICES.each { service ->
                        def deplName = "${service}-depl"
                        echo "Rolling back ${deplName}..."
                        sh "kubectl rollout undo deployment/${deplName} || true" // || true to ignore errors if no previous rollout
                    }
                }
            }
        }
        success {
            echo 'Deployment SUCCESS! All services are running correctly.'
        }
    }
}
