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
@comics = [
  {
    name: 'Nonstop Bar'
  }
]

def create_comic(comic)
  Comic.create(
    name: comic[:name]
  )
end

@comics.each do |comic|
  c = create_comic(comic)
  puts "comic #{c.name} created"
end


#Create figure {background}
@figures = [
  {
    comic_id: 1,
    x: 0,
    y: 0,
    width: 1300,
    height: 850,
    background_color: 'black'
  }
]

def create_figure(figure)
  Figure.create(
    comic_id: figure[:comic_id],
    x: figure[:x],
    y: figure[:y],
    width: figure[:width],
    height: figure[:height],
    background_color: figure[:background_color]
  )
end

@figures.each do |figure|
  f = create_figure(figure)
  puts "figure #{f.figure} created"
end



#Create figures {old}
# @figures = [
#   {
#     comic_id: 1,
#     figure: 'big frame',
#     x: 200,
#     y: 120,
#     width: 422,
#     height: 605,
#     background_color: 'black'
#   }, {
#     comic_id: 1,
#     figure: '1 frame',
#     x: 640,
#     y: 120,
#     width: 426,
#     height: 137,
#     background_color: 'red'
#   }, {
#     comic_id: 1,
#     figure: '2 frame',
#     x: 640,
#     y: 277,
#     width: 426,
#     height: 136,
#     background_color: 'green'
#   }, {
#     comic_id: 1,
#     figure: '3 frame',
#     x: 640,
#     y: 432,
#     width: 426,
#     height: 136,
#     background_color: 'yellow'
#   }, {
#     comic_id: 1,
#     figure: '4 frame',
#     x: 640,
#     y: 588,
#     width: 426,
#     height: 137,
#     background_color: 'blue'
#   }
# ]
#
# def create_figure(figure)
#   Figure.create(
#     comic_id: figure[:comic_id],
#     figure: figure[:figure],
#     x: figure[:x],
#     y: figure[:y],
#     width: figure[:width],
#     height: figure[:height],
#     background_color: figure[:background_color]
#   )
# end
#
# @figures.each do |figure|
#   f = create_figure(figure)
#   puts "figure #{f.figure} created"
# end



#Create images
@images = [
  {
    comic_id: 1,
    # image: '../public/uploads/image/image/big_fr_img.png',
    x: 200,
    y: 120,
    width: 422,
    height: 605
  }, {
    comic_id: 1,
    # image: '../public/uploads/image/image/1fr_img.png',
    x: 640,
    y: 120,
    width: 426,
    height: 137
  }, {
    comic_id: 1,
    # image: '../public/uploads/image/image/2fr_img.png',
    x: 640,
    y: 277,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    # image: '../public/uploads/image/image/3fr_img.png',
    x: 640,
    y: 432,
    width: 426,
    height: 136
  }, {
    comic_id: 1,
    # image: 'url(../public/uploads/image/image/4fr_img.png)',
    x: 640,
    y: 588,
    width: 426,
    height: 137
  }
]

def create_image(image)
  Image.create(
    comic_id: image[:comic_id],
    image: image[:image],
    x: image[:x],
    y: image[:y],
    width: image[:width],
    height: image[:height]
  )
end

@images.each do |image|
  i = create_image(image)
  puts "image #{i.image} created"
end


#Create frames
@frames = [
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

def create_frame(frame)
  Frame.create(
    comic_id: frame[:comic_id],
    frame: frame[:frame],
    x: frame[:x],
    y: frame[:y],
    width: frame[:width],
    height: frame[:height],
    border_width: frame[:border_width],
    border_color: frame[:border_color]
  )
end

@frames.each do |frame|
  fr = create_frame(frame)
  puts "frame #{fr.frame} created"
end
