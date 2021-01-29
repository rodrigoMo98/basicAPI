node('ubuntu') {
        stage('Checkout'){
                steps {
        script {
           // The below will clone your repo and will be checked out to master branch by default.
           git credentialsId: 'gh-secret-token', url: 'https://github.com/rodrigoMo98/basicAPI.git'
           // Do a ls -lart to view all the files are cloned. It will be clonned. This is just for you to be sure about it.
           sh "ls -lart ./*" 
           // List all branches in your repo. 
          }
       }
       }
        stage('Build') {
                sh 'npm install'
                
                sh 'tsc'
                
                sh 'npm publish'
        }
}
