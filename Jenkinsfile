pipeline {
    agent any
    tools {nodejs "node"}
        stages{
                stage('Build') {
                        steps{
                          echo 'build'
                          sh 'npm install'
                
                          //sh 'tsc'
                          npm login --registry=http://192.168.100.20:8081/repository/basicapi/
                          echo 'npm'
                          echo 'npm'
                          echo 'npm@npm.com'
                          sh 'npm publish'
                        }
                }
        }
}
