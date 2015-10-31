class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
    	t.string :email
    	t.string :password_hash, null: false
      t.timestamps
    end
  end
end
