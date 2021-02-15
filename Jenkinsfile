pipeline {
    agent { 
        dockerfile {
            filename './Dockerfile'
            args '-u 0:0'
        }
    }
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