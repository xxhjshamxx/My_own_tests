pipeline {
    agent any

    environment {
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        // Define all Google Online Boutique microservices for rollback
        SERVICES = ['currencyservice', 'loadgenerator', 'productcatalogservice', 'checkoutservice', 'shippingservice', 'cartservice', 'redis-cart', 'emailservice', 'paymentservice', 'frontend', 'recommendationservice', 'adservice']
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f infra/k8s/kubernetes-manifests.yaml'
                    // Optional: wait for key deployments to be ready
                    sh 'kubectl rollout status deployment/frontend'
                    sh 'kubectl rollout status deployment/productcatalogservice'
                }
            }
        }
    }
    
    post {
        failure {
            script {
                echo 'Deployment FAILED! Initiating automatic rollback for all services...'
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    env.SERVICES.each { service ->
                        echo "Rolling back deployment/${service}..."
                        sh "kubectl rollout undo deployment/${service} || true"
                    }
                }
            }
        }
        success {
            echo 'Deployment SUCCESS! Google Online Boutique is running correctly.'
        }
    }
}
