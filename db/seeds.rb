# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Reset Database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke

# Basics
def random_name
  Random.new_seed
end

# Create Comics
10.times do
  name = random_name
  c = Comic.new(name: name)

  if c.save
    puts "Comics #{name} created"
  else
    puts "Error. Comics #{name} not created"
  end
end

# Create Figures
def random_size
  rand(1000)
end

def random_border
  rand(30)
end

def random_color
  ['red', 'green', 'blue', 'orange', 'black', 'yellow', 'magenta', 'cyan'].sample
end

@comics = Comic.all

100.times do
  name = random_name
  comic = @comics.sample
  f = comic.figures.new(
    figure:           name,
    x:                random_size,
    y:                random_size,
    width:            random_size,
    height:           random_size,
    border_width:     random_border,
    border_color:     random_color,
    background_color: random_color
  )

  if f.save
    puts "Figure #{name} created"
  else
    puts "Error. Figure #{name} not created"
  end
end

#<Figure id: 1, figure: "wefdgvc", x: 123, y: 432, width: 234, height: 542, border_width: 12, border_color: "orange", background_color: "red", created_at: "2018-11-06 08:16:51", updated_at: "2018-11-06 08:16:51", comic_id: 1>, #<Figure id: 2, figure: "wefdgvc", x: 123, y: 432, width: 234, height: 542, border_width: 12, border_color: "orange", background_color: "red", created_at: "2018-11-06 08:17:30", updated_at: "2018-11-06 08:17:30", comic_id: 1>, #<Figure id: 3, figure: "asdfd", x: 123, y: 213, width: 123, height: 2143, border_width: 23, border_color: "yellow", background_color: "orange", created_at: "2018-11-06 08:28:18", updated_at: "2018-11-06 08:55:29", comic_id: 3>, #<Figure id: 4, figure: "asdasd", x: 123, y: 352, width: 234, height: 123, border_width: 23, border_color: "red", background_color: "green", created_at: "2018-11-06 08:28:35", updated_at: "2018-11-06 08:28:35", comic_id: 3>, #<Figure id: 5, figure: "sdfsdf", x: 827, y: 263, width: 726, height: 235, border_width: 32, border_color: "ddeeff", background_color: "orange", created_at: "2018-11-06 08:46:16", updated_at: "2018-11-06 08:56:51", comic_id: 3>
