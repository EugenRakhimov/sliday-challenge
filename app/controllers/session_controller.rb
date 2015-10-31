class SessionController < ApplicationController
	def create
		@user = Admin.find_by_email(params[:email])
	    if @user
	      if @user.password == params[:password]
	        session[:user_id] = @user.id
	        session[:expires_at] = Time.current + 1.hours
	        render json: {message:"you logged in"}
	      else
	        session[:user_id] = nil
	        render json: {message:"password incorrect"}, status: :unauthorized
	      end
	    else
	      session[:user_id] = nil
	      render json: {message:"user not found"}, status: :unauthorized
	    end
	end
	def show
		
		render text:"success"
	end
end
