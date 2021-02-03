pipeline {
    agent {
        label'ubuntu'
    }
    environment {
        REGISTRY_LINK = '//192.168.100.24:8081/repository/'
        
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

                sh 'rm -f ${HOME}/.npmrc'
                sh 'echo ${REGISTRY_LINK}npm-private/:_authToken=${NEXUS-PUSH} > ${HOME}/.npmrc'

                sh 'cp ./data.json ./dist/'
                sh 'npm publish ./dist --registry=http:${REGISTRY_LINK}npm-private/'
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

                sh 'rm -f ${HOME}/.npmrc'
                sh 'echo ${REGISTRY_LINK}npm-private/:_authToken=${NEXUS-PULL} > ${HOME}/.npmrc'

                sh 'npm install MybasicApi --registry=http:${REGISTRY_LINK}npm-group/'
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