pipeline {
    agent none
    stages {
        stage('run unit test') {    
            agent { 
                dockerfile {
                    filename './Dockerfile'
                }
            }
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('run system test') {
            agent { 
                dockerfile {
                    filename './Dockerfile'
                }
            }
            steps {
                sh 'npm run test:system'
            }
        }
    }
}