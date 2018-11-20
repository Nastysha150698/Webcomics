# Reset Database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke

# Basics
def random_name
  Random.new_seed
end

@comics = Comic.all

# Create Comic
def create_comic
  Comic.create(
    name: 'Nonstop Bar'
  )
end

# @comics.create(
#   name: 'Nonstop Bar'
# )


# @comics.create(name: 'Nonstop Bar')
# @figures.create(
#   figure: 'figure 1',
#   comic_id: 1,
#   x: 120,
#   y: 200,
#   width: 422,
#   height: 605,
#   background_color: 'black'
# )

# def create_comic(comic)
#   Comic.create!(
#     comic_id: 1,
#     name: 'Nonstop Bar'
#   )
# end
#
# def create_figure(figure, comic_id)
#   comic.figures.create!([
#     {
#       name: 'big frame',
#       x: 120,
#       y: 200,
#       width: 422,
#       height: 605,
#       background_color: 'black',
#       comic_id: 1
#     }
#     ])
#   end


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

# Fake comic data
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
