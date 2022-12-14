class LecturersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid , with: :invalid_record
rescue_from ActiveRecord::RecordNotFound, with: :unfound_record
    def index
        render json: Lecturer.all,status: :ok
    end
    
    def show
        lecturer = Lecturer.find(params[:id])
        render json: lecturer,status: :ok
    end

    def create
        lecturer = Lecturer.create!(lecturer_params)
        render json: lecturer,status: :created
    end
    
    def update
        lecturer = Lecturer.find(params[:id])
        lecturer.update!(lecturer_params)
        render json: lecturer, status: :accepted
    end

    def destroy
        lecturer = Lecturer.find(params[:id])
        lecturer.destroy
        head :no_content
    end
    
    def loginlec
    lec = Lecturer.find_by(name: params[:name])
        if lec&.authenticate(params[:password])
            session[:lec_id] = lec.id 
        render json: lec, status: :created
        else
            render json: {error: {Login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    private

    def lecturer_params
        params.permit(:name, :age, :phone_number, :email_address, :field_of_speciality, :image_url, :password)
    end

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end

    def unfound_record
        render json:{error: "Lecturer not found"}, status: :not_found
    end

    
end
