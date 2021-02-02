pipeline {
    agent {
        label'ubuntu'
    }
    stages{
        stage('Build'){
            steps{
                echo 'build'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Publish'){
            steps{
                echo 'Publish with npm'
                sh 'npm publish'
            }
        }
        stage('Test'){
            agent {
                label 'ubuntu-deploy'
            }
            options {
                skipDefaultCheckout true
            }
            steps{
                echo 'Deploy'
                sh 'npm install MybasicApi'
                //sh 'cd node_modules/MybasicApi'
                //sh ' node ./dist/index.js'
            }
        }
    }
}
