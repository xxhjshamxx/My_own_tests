pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                // Ramzy: Just pulling the latest stuff. Should probably switch to a specific branch later when we demo.
            }
        }

        stage('Build & Push Images') {
            steps {
                script {
                    // building auth and client for now, gotta add the rest later when I have time
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./client'
                    sh 'docker build -t xxhjshamxx/ecomprod_auth ./auth'
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./expiration'
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./orders'
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./payments'
                    sh 'docker build -t xxhjshamxx/ecomprod_client ./produts'
                    
                    withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push xxhjshamxx/ecomprod_client'
                        sh 'docker push xxhjshamxx/ecomprod_auth'
                        sh 'docker push xxhjshamxx/ecomprod_expiration'
                        sh 'docker push xxhjshamxx/ecomprod_orders'
                        sh 'docker push xxhjshamxx/ecomprod_payments'
                        sh 'docker push xxhjshamxx/ecomprod_produts'
                    }
                }
            }
        }

        stage('Deploy to K8s') {
            steps {
                withCredentials([file(credentialsId: env.KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    // Ramzy: tossing everything into the cluster. Fingers crossed it doesn't crash again
                    sh 'kubectl apply -f infra/k8s/'
                }
            }
        }
    }
    
    post {
        always {
            // clean up so the build node doesn't run out of space overnight
            sh 'docker system prune -f'
        }
    }
}
