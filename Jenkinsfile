pipeline {
    agent any
    tools {nodejs "node"}
        stages{
                stage('Build') {
                        steps{
                          echo 'build'
                          sh 'npm install'
                
                          //sh 'tsc'
                          sh 'npm adduser'
                          echo 'npm'
                          echo 'npm'
                          echo 'npm@npm.com'
                          sh 'npm publish'
                        }
                }
        }
}
