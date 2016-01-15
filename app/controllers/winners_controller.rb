class WinnersController < ApplicationController
	def index
  	winners_selected=User.where(:winner => true)
  	# left_places = 365 - winners_selected.count
  	# winners_hash = {left_places:left_places, winners: winners_selected}
  	render json:winners_selected
  end
end
