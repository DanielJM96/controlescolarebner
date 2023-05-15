const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/*/.spec.js,src/*/.spec.jsx,src/*/.test.js,src/*/.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
            'sonar.login':  'admin',
            'sonar.password':  '@Carloscreed3.',
            'sonar.sourceEncoding':  'UTF-8',
            'sonar.projectName':  'BackendDocManager',
            'sonar.projectKey':  'BackendDocManager',
            'sonar.projectVersion':  '1.0.0',
            'sonar.sources':  'src',
        }
    }, () => {});