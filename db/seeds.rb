20.times do |n|
  name = Faker::Name.name
  email = "dd#{n+1}@gmail.com"
  password = "123456"
  User.create!(name: name, email: email, password: password)
end

30.times do |n|
  due_date = Time.now
  user_id = User.order("RANDOM()").first.id
  name = Faker::Hipster.sentence
  description = Faker::Hipster.paragraphs
  completed_rate = rand(90.0)
  numbers_of_steps = rand(6)
  vote = rand(8)
  is_public = rand(2) == 1 ? true : false
  Story.create!(user_id: user_id, name: name, description: description,
    completed_rate: completed_rate, numbers_of_steps: numbers_of_steps,
    vote: vote, is_public: is_public, due_date: due_date)
end

20.times do |n|
  content = Faker::HarryPotter.quote
  completed_rate = rand(90)
  vote = rand(8)
  story_id = Story.order("RANDOM()").first.id
  Step.create(content: content, completed_rate: completed_rate, vote: vote,
    story_id: story_id)
end

30.times do |n|
  user_id = User.order("RANDOM()").first.id
  story_id = Story.order("RANDOM()").first.id
  step_id = Step.order("RANDOM()").first.id
  content = Faker::HarryPotter.quote
  Comment.create(user_id: user_id, story_id: story_id, step_id: step_id,
    content: content)
end

5.times do |n|
  user_id = User.order("RANDOM()").first.id
  story_id = Story.order("RANDOM()").first.id
  content = Faker::HarryPotter.quote
  Report.create(user_id: user_id, story_id: story_id, content: content)
end

5.times do
  follower_id = User.order("RANDOM()").first.id
  followed_id = User.order("RANDOM()").first.id
  while follower_id == followed_id
    followed_id = User.order("RANDOM()").first.id
  end
  Relationship.create(follower_id: follower_id, followed_id: followed_id)
end
