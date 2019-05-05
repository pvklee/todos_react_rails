class FixTodosTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :todos
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :todos, :user_id
  end
end
