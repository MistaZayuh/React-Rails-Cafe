@menus = ["Breakfast", "Dinner", "Drinks", "Desserts", "Appetizers", "Brunch"]

5.times do
  menu = Menu.create(
    name: @menus.sample
  )
  5.times do
    Item.create(
      name: Faker::Food.dish,
      price: rand(1...15),
      menu_id: menu.id
    )
  end
end
puts "Data seeded"