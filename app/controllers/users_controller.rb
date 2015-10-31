class UsersController < ApplicationController
	def index

		if Admin.find_by_id(session[:user_id])
			user = User.all
			render json: user
		else
			 render json: {alert: "You should be logged in to see users"} , status: :unauthorized
		end
		
	end
	def create
		print(params)
		User.create(params)		
	end
	
end
