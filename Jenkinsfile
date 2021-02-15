pipeline {
    agent { dockerfile true }
    stages {
        stage('run unit test') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('run system test') {
            steps {
                sh 'npm run test:system'
            }
        }
    }
}