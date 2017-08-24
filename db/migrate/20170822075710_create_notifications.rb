class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.string :notificationable_type
      t.integer :notificationable_id
      t.integer :recipient_id
      t.string :content
      t.boolean :read
    end
  end
end
