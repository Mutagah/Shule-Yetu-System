class ApplicationController < ActionController::API
include ActionController::Cookies
# before_action :authorized
def authorized
    return render json:{error: "Not authorized"},status: :unauthorized unless session.include? :hod_id
end
end
