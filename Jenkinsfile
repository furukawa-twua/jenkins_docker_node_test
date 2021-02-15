pipeline {
    agent { dockerfile true }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('run unit test') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('run system test') {
            steps {
                sh 'npm start'
                sh 'npm run test:system'
            }
        }
    }
}