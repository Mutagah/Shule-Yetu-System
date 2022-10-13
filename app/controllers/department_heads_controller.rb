class DepartmentHeadsController < ApplicationController
    # skip_before_action :authorized,only: [:create, :logoutSession]
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
    
    def findSession
        hod = DepartmentHead.find_by(id: session[:hod_id])
        render json: hod,status: :ok
    end

    def logoutSession
        session.delete :hod_id
        head :no_content
    end
end
