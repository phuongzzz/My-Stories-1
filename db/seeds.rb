# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "hoangtuyb96@gmail.com", name: "Hoang Anh Tu", password: "12345678", password_confirmation: "12345678")
User.create(email: "chinhoccho@gmail.com", name: "Chinh Oc Cho", password: "12345678", password_confirmation: "12345678")

Category.create(name: "Truyen Bi Kich")
Category.create(name: "Truyen Tinh Yeu", parent_id: 1)

Story.create!(name: "Khong Hoi Ket", description: "Hay lam!!! ^_^", user_id: 1, due_date: "30001231", category_id: 1)
Story.create!(name: "Tu Bo Project", description: "Hay vch", user_id: 1, due_date: "30001231", category_id: 1)
Story.create!(name: "Lam Lai Tu Dau", description: "Manh me len anh em", user_id: 1, due_date: "30001231", category_id: 1)

Step.create(name: "Tran Huu Nam Phuong", content: "Chan ghet Angular/cli@lastest", story_id: 2, sub_steps_attributes: [{name: "Buoc 1", content: "Stand up!"}, {name: "Buoc 2", content: "Di den canh anh Trung"}, {name: "Buoc 3", content: "Em met moi lam roi! Em xin dung cuoc choi tai day. -_-"}])
Step.create(name: "Doan Minh Phuc", content: "Du 40 Naitei", story_id: 2, sub_steps_attributes: [{name: "Buoc 1", content: "Xin dung cuoc choi"}, {name: "Buoc 2", content: "Ve nha ngu"}])

Comment.create(user_id: 1, commentable_id: 1, commentable_type: "Step", content: "Manh me len anh, con co bon em ma.")
Comment.create(user_id: 2, commentable_id: 1, commentable_type: "Story", content: "Em ta qua cac anh a. -_-")
