class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: [:show, :update, :destroy]

  def index 
    render json: @menu.items.all
  end

  def show
    render json: @item
  end

  def update 
    @item.update()
  end

  def create
    item = @menu.item.new(item_params)
    # TODO finish this
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    render json: { message: "Item deleted yo"}
  end

  private
  def item_params
    params.require(:item).permit(:name, :price)
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end
end
