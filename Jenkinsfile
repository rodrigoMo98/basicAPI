pipeline {
    agent {
        label'ubuntu'
    }
    stages{
        stage('Build'){
            steps{
                echo 'build'
                sh 'npm install'
                sh 'tsc'
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
            steps{
                sh 'npm install basicApi'
                sh 'cd node_modules/basicApi'
                sh ' node ./dist/index.js'
            }
        }
    }
}
