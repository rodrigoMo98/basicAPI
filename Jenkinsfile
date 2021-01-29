node('ubuntu') {
        stage('Checkout'){
       }
        stage('Build') {
                sh 'npm install'
                
                sh 'tsc'
                
                sh 'npm publish'
        }
}
