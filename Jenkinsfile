pipeline {
    agent any
    parameters {
        choice(
            name: 'SERVICE_NAME',
            choices: ['all', 'currencyservice', 'loadgenerator', 'productcatalogservice', 'checkoutservice', 'shippingservice', 'cartservice', 'redis-cart', 'emailservice', 'paymentservice', 'frontend', 'recommendationservice', 'adservice'],
            description: 'Select service to deploy (or "all" for everything)'
        )
    }
    environment {
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        ALL_SERVICES = ['currencyservice', 'loadgenerator', 'productcatalogservice', 'checkoutservice', 'shippingservice', 'cartservice', 'redis-cart', 'emailservice', 'paymentservice', 'frontend', 'recommendationservice', 'adservice']
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
                    script {
                        if (params.SERVICE_NAME == 'all') {
                            echo 'Deploying all microservices...'
                            sh 'kubectl apply -f infra/k8s/kubernetes-manifests.yaml'
                            // Wait for key deployments to be ready
                            sh 'kubectl rollout status deployment/frontend'
                            sh 'kubectl rollout status deployment/productcatalogservice'
                        } else {
                            echo "Deploying ${params.SERVICE_NAME} only..."
                            // Re-apply specific service from manifest file or use direct kubectl apply for individual resources
                            sh 'kubectl apply -f infra/k8s/kubernetes-manifests.yaml -l app=' + params.SERVICE_NAME
                            sh 'kubectl rollout status deployment/' + params.SERVICE_NAME
                        }
                    }
                }
            }
        }
    }
    post {
        failure {
            script {
                def servicesToRollback = params.SERVICE_NAME == 'all' ? env.ALL_SERVICES : [params.SERVICE_NAME]
                echo "Deployment FAILED! Initiating automatic rollback for ${servicesToRollback}..."
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    servicesToRollback.each { service ->
                        echo "Rolling back deployment/${service}..."
                        sh "kubectl rollout undo deployment/${service} || true"
                    }
                }
            }
        }
        success {
            echo 'Deployment SUCCESS! Services are running correctly.'
        }
    }
}
