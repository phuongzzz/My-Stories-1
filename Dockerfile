# FROM ruby:2.4.0

# RUN apt-get install -y libmysqlclient-dev
# RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
# RUN apt-get install -y nodejs
# Install eslint from https://www.npmjs.com/package/eslint
# RUN npm install -g eslint
# RUN eslint --version

# COPY Gemfile /cache/Gemfile
# COPY Gemfile.lock /cache/Gemfile.lock

# RUN cd /cache && bundle install

# RUN curl -o /usr/bin/framgia-ci https://raw.githubusercontent.com/framgia/ci-report-tool/master/dist/framgia-ci && chmod +x /usr/bin/framgia-ci
