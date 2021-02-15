pipeline {
    stages {
        agent { 
            dockerfile {
                filename './Dockerfile'
            }
        }
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