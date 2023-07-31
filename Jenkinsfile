pipeline {
  def response = httpRequest "http://v.juhe.cn/toutiao/index?key=${param1}"
  agent {
    docker {
      image 'node:lts-bullseye-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('End') {
      steps {
        dingtalk(robot: '4b284623-f31f-4901-98b0-dfeaed6b2034', type: 'TEXT')
      }
    }

  }
}