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

Story.create!(name: "Khong Hoi Ket", description: "Hay lam!!! ^_^", user_id: 1, due_date: "30001231", category_id: 1, is_public: true)
Story.create!(name: "Tu Bo Project", description: "Hay vch", user_id: 1, due_date: "30001231", category_id: 1, is_public: true)
Story.create!(name: "Lam Lai Tu Dau", description: "Manh me len anh em", user_id: 1, due_date: "30001231", category_id: 1, is_public: true)
