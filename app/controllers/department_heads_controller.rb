class DepartmentHeadsController < ApplicationController
    def index
        render json: DepartmentHead.all, status: :ok
    end
end
