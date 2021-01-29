node('ubuntu') {
        stage('Checkout'){

          checkout scm
       }
        stage('Build') {
                sh 'npm install'
                
                sh 'tsc'
                
                sh 'npm publish'
        }
}
