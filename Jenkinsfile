pipeline {
    agent any
    tools {nodejs "node"}
        stages{
                stage('Build') {
                        steps{
                          echo 'build'
                            sh 'npm cache clean --force'
                          sh 'npm install'
                          sh 'npm install -g typescript'
                          //sh 'tsc'
                          //sh 'npm login --registry=http://192.168.100.20:8081/repository/basicapi/'
                          //echo 'npm'
                          //echo 'npm'
                          //echo 'npm@npm.com'
                          sh 'npm publish'
                        }
                }
        }
}
