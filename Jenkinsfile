pipeline {
    agent any

    environment {
        IMAGE_NAME = "abc-technologies:v1"
        CONTAINER_NAME = "corporate-website"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t abc-technologies:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop corporate-website || exit 0
                docker rm corporate-website || exit 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d --name corporate-website -p 8090:80 abc-technologies:v1'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Deployment Failed'
        }
    }
}