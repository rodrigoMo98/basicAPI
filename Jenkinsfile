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
            options {
                skipDefaultCheckout true
            }
            steps{
                echo 'Deploy'
                sh 'pwd'
                sh 'npm install MybasicApi'
                sh 'cp node_modules/MybasicApi/data.json ./'
                sh 'node node_modules/MybasicApi/dist/index.js'
                sh '''
                RESULT_CODE=`curl -I http://localhost:3000/app/-1`
                if [ `cat $RESULT_CODE` | grep "HTTP/2 200" ]; then echo "PASSED!"; else exit 1; fi
              '''
            }
        }
    }
}
