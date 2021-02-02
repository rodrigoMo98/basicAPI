pipeline {
    agent {
        label'ubuntu'
    }
    stages{
        stage('Build'){
            steps{
                echo 'build'
                sh 'npm install'
                sh 'chmod 777 -R node_modules/'
                sh 'npm run build'
            }
        }
        stage('Publish'){
            steps{
                echo 'Publish with npm'
                sh 'cp ./data.json ./dist/'
                sh 'npm publish dist'
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
                sh 'pwd'
                sh 'npm install MybasicApi'
                //sh 'cp node_modules/MybasicApi/data.json ./'
                //sh 'node node_modules/MybasicApi/dist/index.js'
            }
        }
    }
}
