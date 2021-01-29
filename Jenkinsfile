node('ubuntu') {
        stage('Build') {
            steps {
                sh 'npm install'
                
                sh 'tsc'
                
                sh 'npm publish'
            }
        }
}
