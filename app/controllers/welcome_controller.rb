class WelcomeController < ApplicationController
  def index
  	winners_selected=User.where(:winner => true)
  	@left_places = 365 - winners_selected.count
	@winners=winners_selected.paginate(:page => params[:page], :per_page => 5)
  end
end
