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
                        }
                    }
              stage('Publish') {
                       steps {
                            echo 'Publish with npm'
                            sh 'npm publish'
                            }
                        }
           stage ('Deploy') {
          node('ubuntu-deploy') {
              sh 'npm install basicApi'
              sh 'cd node_modules/basicApi'
              sh ' node ./dist/index.js'
          }
        }
        }
}
