node('ubuntu') {
        stage('Build') {
                sh 'npm install'
                
                sh 'tsc'
                
                sh 'npm publish'
        }
}
