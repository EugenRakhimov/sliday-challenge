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

		user=User.create(user_signup_params)		
		render json: user
	end
	def destroy
		if Admin.find_by_id(session[:user_id])
			user = User.find_by_id(params[:id])
			user.destroy
			render json: {result:"user destroyed"}
		else
			 render json: {alert: "You should be logged in to see users"} , status: :unauthorized
		end
	end
	def update
		if Admin.find_by_id(session[:user_id])
			user = User.find_by_id(params[:id])
			user.update_attributes(user_update_params)
			render json: {result:"user updated"}
		else
			 render json: {alert: "You should be logged in to see users"} , status: :unauthorized
		end
	end


  private

  def user_signup_params
    params.permit(:email, :name)
  end

  def user_update_params
  	params.permit(:email, :name, :winner)
  end
	
end
