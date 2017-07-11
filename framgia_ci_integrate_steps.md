<!-- 1. Active project repo on [ci.framgia.vn](http://ci.framgia.vn)
2. Authenticate reports at [ci-reports.framgia.vn](ci-reports.framgia.vn)
3. Enable Chatwork/email notification (optional)
4. Create Dockerfile
5. Build docker from Dockerfile and push it to docker hub
  - Build docker from Dockerfile
    ```
    docker build --rm=true -t dieunb/crb .
    ```

  - Test docker image
    ```
    docker images | grep crb
    docker run -ti --rm -v `pwd`:/workspace/ dieunb/crb bash
    source /etc/profile.d/rvm.sh
    RAILS_ENV=test rake db:setup # install mysql-server first
    rspec
    ```
  - Push to docker hub
    ```
    docker push dieunb/crb
    ```
5. Create .drone.yml
6. Install framgia ci tool from [link](https://github.com/framgia/ci-report-tool/)
7. Modify .framgia-ci.yml as your requirements
8. Commit and push to github, create pullrequest
 -->
