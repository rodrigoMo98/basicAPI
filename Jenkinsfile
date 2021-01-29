pipeline {
    agent {
        label'ubuntu'
    }
    //tools {nodejs "node"}
        stages{
                stage('Build') {
                        steps{
                          echo 'build'
                          sh 'npm install'
                          sh 'tsc'
                          sh 'npm publish'
                        }
                }
        }
}
