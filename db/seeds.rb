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


#Create real comic
c = Comic.create(name: 'Nonstop Bar')

def create_comic(comic, figure)
  comic.figures.create(
    comic_id:         figure[:comic_id],
    figure:           figure[:figure],
    x:                figure[:x],
    y:                figure[:y],
    width:            figure[:width],
    height:           figure[:height],
    background_color: figure[:background_color]
  )
end

figures = [
  {
    comic_id:          1,
    figure:           'background',
    x:                 0,
    y:                 0,
    width:             1300,
    height:            850,
    background_color: 'black'
  }
]

figures.each do |f|
  create_comics(c, f)
end


#Create frame
def create_comic(comic, frame)
  comic.frames.create(
    comic_id:         frame[:comic_id],
    frame:            frame[:frame],
    x:                frame[:x],
    y:                frame[:y],
    width:            frame[:width],
    height:           frame[:height],
    border_width:     frame[:border_width],
    border_color:     frame[:border_color]
  )
end

frames = [
  {
    comic_id: 1,
    frame: 'big frame',
    x: 198,
    y: 118,
    width: 422,
    height: 605,
    border_width: 2,
    border_color: 'white'
  }, {
    comic_id: 1,
    frame: '1 frame',
    x: 638,
    y: 118,
    width: 426,
    height: 137,
    border_width: 2,
    border_color: 'white'
  }, {
    comic_id: 1,
    frame: '2 frame',
    x: 638,
    y: 275,
    width: 426,
    height: 136,
    border_width: 2,
    border_color: 'white'
  }, {
    comic_id: 1,
    frame: '3 frame',
    x: 638,
    y: 430,
    width: 426,
    height: 136,
    border_width: 2,
    border_color: 'white'
  }, {
    comic_id: 1,
    frame: '4 frame',
    x: 638,
    y: 586,
    width: 426,
    height: 137,
    border_width: 2,
    border_color: 'white'
  }
]

frames.each do |frame|
  create_comics(c, frame)
end


#Create images
def upload_image
  uploader = ImageUploader.new(Comic.new, :image)
  uploader.cache!(File.open(Dir.glob(File.join(Rails.root, '../public/uploaders/image/image/1fr_img.png'))))
  uploader
end

def create_comic(comic, image)
  comic.image.create(
    comic_id:         frame[:comic_id],
    image:            frame[:upload_image],
    x:                frame[:x],
    y:                frame[:y],
    width:            frame[:width],
    height:           frame[:height]
  )
end

images = [
  {
    comic_id: 1,
    image: 'big frame',
    x: 198,
    y: 118,
    width: 422,
    height: 605
  }, {
    comic_id: 1,
    image: upload_image,
    x: 638,
    y: 118,
    width: 426,
    height: 137
  }, {
    comic_id: 1,
    image: '2 frame',
    x: 638,
    y: 275,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    image: '3 frame',
    x: 638,
    y: 430,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    image: '4 frame',
    x: 638,
    y: 586,
    width: 426,
    height: 137
  }
]

images.each do |i|
  create_comics(c, i)
end
