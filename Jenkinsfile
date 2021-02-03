pipeline {
    agent {
        label'ubuntu'
    }
    environment {
        REGISTRY_TOTAL ='//192.168.100.24:8081/repository/npm-group/:_authToken=NpmToken.d41719f1-0c40-3773-8a09-658ac1f67259'
        REGISTRY_LINK = 'registry=http://192.168.100.24:8081/repository/npm-group/'
        REGISTRY_AUTH    = '_authToken=NpmToken.d41719f1-0c40-3773-8a09-658ac1f67259'
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
                sh 'npm publish ./dist'
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
                sh 'rm ${HOME}/.npmrc'
                sh 'touch ${HOME}/.npmrc'
                sh 'echo ${REGISTRY_TOTAL} > ${HOME}/.npmrc'
                sh 'echo ${REGISTRY_LINK} > ${HOME}/.npmrc'
                sh 'echo ${REGISTRY_AUTH} > ${HOME}/.npmrc'
                sh 'npm install MybasicApi'
                sh 'cp node_modules/MybasicApi/data.json ./'
                //sh 'node ./node_modules/MybasicApi/bundle.js'
                 //sh '''
                //RESULT_CODE=`curl -I http://localhost:3000/app/1`
               // if [ `cat $RESULT_CODE` | grep "HTTP/2 200" ]; then echo "PASSED!"; else exit 1; fi
             // '''
            }
        }
    }
}
