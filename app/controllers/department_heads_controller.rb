class DepartmentHeadsController < ApplicationController
    skip_before_action :authorized,only: :create
    def index
        render json: DepartmentHead.all, status: :ok
    end
    def create
        hod = DepartmentHead.find_by(name: params[:name])
        if hod&.authenticate(params[:password])
            session[:hod_id] = hod.id 
        render json: hod, status: :created
        else
            render json: {error: {Login: "Invalid username or password"}}, status: :unauthorized
        end
    end
end
