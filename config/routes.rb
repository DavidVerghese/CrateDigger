Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :songs
  resources :producers
  resources :samples
  resources :songssamples
  resources :samplesassociatedwithsongs do 
      resources :producers
      resources :songssamples
    end
  resources :sampleproducers
  resources :songproducers
end
