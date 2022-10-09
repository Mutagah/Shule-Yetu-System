class CoursesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :unfound_record
    def index 
        render json: Course.all, status: :ok
    end

    def show
        course = Course.find(params[:id])
        render json: course, status: :ok
    end

    private

    def unfound_record
        render json:{error: "Course not found"}, status: :not_found
    end
end
