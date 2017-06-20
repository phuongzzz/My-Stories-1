class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :story_id
      t.integer :step_id
      t.integer :vote_value

      t.timestamps
    end
  end
end
