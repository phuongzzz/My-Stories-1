source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 5.1.2"
gem "mysql2", ">= 0.3.18", "< 0.5"
gem "puma", "~> 3.7"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "coffee-rails", "~> 4.2"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"
gem "devise", "~> 4.3"
gem "simple_token_authentication"
gem "rubocop", require: false
gem "rubocop-checkstyle_formatter", require: false
gem "rails_best_practices"
gem "carrierwave"
gem "carrierwave-base64"
gem "cloudinary"
gem "elasticsearch-model"
gem "elasticsearch-rails"
gem "brakeman"
gem "bundle-audit"
gem "reek"
gem "scss_lint"
gem "scss_lint_reporter_checkstyle"
gem "kaminari"
gem "config"

group :development, :test do
  gem "pry"
  gem "rspec-rails"
  gem "rspec-collection_matchers"
  gem "database_cleaner"
  gem "factory_girl_rails"
  gem "better_errors"

  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "simplecov", require: false
  gem "simplecov-rcov", require: false
  gem "simplecov-json"
  gem "shoulda-matchers", git: "https://github.com/thoughtbot/shoulda-matchers.git", branch: "rails-5"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "rack-cors"
