Rails.application.routes.draw do
  resources :api do
    resources :menus do
      resources :items
    end
  end
end
