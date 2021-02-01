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
                echo 'Publish with npm'
                sh 'npm publish'
                    sh 'npm install basicApi'
                    sh 'cd node_modules/basicApi'
                    sh ' node ./dist/index.js'
            }
        }
    }
}
