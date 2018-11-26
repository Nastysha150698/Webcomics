# Reset Database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke

# Basics
def random_name
  Random.new_seed
end

@comics = Comic.all

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

# Create random Figures
def random_size
  rand(1000)
end

def random_border
  rand(30)
end

def random_color
  ['red', 'green', 'blue', 'orange', 'black', 'yellow', 'magenta', 'cyan'].sample
end

# Create fonts
@fonts = [
  {
    title: 'Roboto',
    link: 'https://fonts.googleapis.com/css?family=Roboto'
  },
  {
    title: 'Montserrat',
    link: 'https://fonts.googleapis.com/css?family=Montserrat'
  },
  {
    title: 'Oswald',
    link: 'https://fonts.googleapis.com/css?family=Oswald'
  },
  {
    title: 'Merriweather',
    link: 'https://fonts.googleapis.com/css?family=Merriweather'
  },
  {
    title: 'Playfair Display',
    link: 'https://fonts.googleapis.com/css?family=Playfair Display'
  },
  {
    title: 'Rubik',
    link: 'https://fonts.googleapis.com/css?family=Rubik'
  },
  {
    title: 'Amatic SC',
    link: 'https://fonts.googleapis.com/css?family=Amatic SC'
  },
  {
    title: 'Pacifico',
    link: 'https://fonts.googleapis.com/css?family=Pacifico'
  },
  {
    title: 'Old Standard TT',
    link: 'https://fonts.googleapis.com/css?family=Old Standard TT'
  },
  {
    title: 'Press Start 2P',
    link: 'https://fonts.googleapis.com/css?family=Press Start 2P'
  }
]

def create_font(font)
  Font.create(
    title: font[:title],
    link: font[:link]
  )
end

@fonts.each do |font|
  f = create_font(font)
  puts "font #{f.title} created"
end


# Create random Text
@speeches = [ { text: 'kawabunga' }, { text: 'она наблюдает за мной' }, { text: 'у бабки нехилые пушки' } ]

30.times do
  name = random_name
  comic = @comics.sample
  s = comic.speeches.new(
    text:             @speeches.sample,
    x:                random_size,
    y:                random_size,
    width:            random_size,
    height:           random_size,
    font_id:          @fonts.sample,
    font_size:        random_size,
    font_color:       random_color
  )

  if s.save
    puts "Text #{name} created"
  else
    puts "Text #{name} not created"
  end
end


# Create random Images
def upload_fake_image
  uploader = ImageUploader.new(Image.new, :image)
  uploader.cache!(File.open(Dir.glob(File.join(Rails.root, 'lib/tasks/images', '*')).sample))
  uploader
end

50.times do
  name = random_name
  comic = @comics.sample
  i = comic.images.new(
    image:            upload_fake_image,
    x:                random_size,
    y:                random_size,
    width:            random_size,
    height:           random_size
  )

  if i.save
    puts "Image #{name} created"
  else
    puts "Error. Image #{name} not created"
  end
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

# Create real Comic
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
  create_comic(c, f)
end

# Create Image uploader
def upload_image(image)
  uploader = ImageUploader.new(Image.new, :image)
  uploader.cache!(File.open(File.join(Rails.root, 'lib/tasks/images', image )))
  uploader
end


# Create Images
def create_comic(comic, image)
  comic.images.create(
    comic_id:         image[:comic_id],
    image:            image[:image],
    x:                image[:x],
    y:                image[:y],
    width:            image[:width],
    height:           image[:height]
  )
end

images = [
  {
    comic_id: 1,
    image: upload_image("big_fr.png"),
    x: 208,
    y: 120,
    width: 414,
    height: 605
  }, {
    comic_id: 1,
    image: upload_image("1_fr.png"),
    x: 640,
    y: 120,
    width: 426,
    height: 137
  }, {
    comic_id: 1,
    image: upload_image("2_fr.png"),
    x: 640,
    y: 277,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    image: upload_image("3_fr.png"),
    x: 640,
    y: 432,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    image: upload_image("4_fr.png"),
    x: 640,
    y: 588,
    width: 426,
    height: 137
  }
]

images.each do |i|
  create_comic(c, i)
end

# Create Frames
# def create_comic(comic, frame)
#   comic.frames.create(
#     comic_id:         frame[:comic_id],
#     frame:            frame[:frame],
#     x:                frame[:x],
#     y:                frame[:y],
#     width:            frame[:width],
#     height:           frame[:height],
#     border_width:     frame[:border_width],
#     border_color:     frame[:border_color]
#   )
# end
#
# frames = [
#   {
#     comic_id:       1,
#     frame:         'big frame',
#     x:              198,
#     y:              118,
#     width:          422,
#     height:         605,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '1 frame',
#     x:              638,
#     y:              118,
#     width:          426,
#     height:         137,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '2 frame',
#     x:              638,
#     y:              275,
#     width:          426,
#     height:         136,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '3 frame',
#     x:              638,
#     y:              430,
#     width:          426,
#     height:         136,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '4 frame',
#     x:              638,
#     y:              586,
#     width:          426,
#     height:         137,
#     border_width:   2,
#     border_color:  'white'
#   }
# ]
#
# frames.each do |frame|
#   create_comic(c, frame)
# end
