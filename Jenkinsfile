pipeline {
    agent { dockerfile true }
    stages {
        stage('run unit test') {
            steps {
                sh 'npx mocha ./tests/unit/*.test.js'
            }
        }
        stage('run system test') {
            steps {
                sh 'npx mocha ./tests/systemtest.test.js'
            }
        }
    }
}