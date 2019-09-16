class Api::MenusController < ApplicationController

  def index 
    render json: Menu.all
  end

  def show 
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  def update 
    @menu.update()
    # REMEMBER to come back and fix update once you get there
    render json: @menu
  end

  def destroy
    @menu.destroy
    render json: { message: "Menu deleted yo"}
  end

  private
  def set_menu
    @menu = Menu.find(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:name)
  end
end
