# Reset Database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke
#
# # Basics
# def random_name
#   # Random.new_seed
#   [*('A'..'Z')].sample(13).join
# end
#
# @comics = Comic.all
#
# # Create random Comics
# 4.times do
#   name = random_name
#   c = Comic.new(name: name)
#
#
#   if c.save
#     puts "Comics #{name} created"
#   else
#     puts "Error. Comics #{name} not created"
#   end
# end
#
# # Create fake data
# def random_size
#   rand(500)
# end
#
# def random_distance
#   rand(2000)
# end
#
# def random_fontSize
#   rand(100)
# end
#
# def random_lineHeight
#   rand(20..110)
# end
#
# def random_border
#   rand(30)
# end
#
# def random_color
#   ['#F44336', '#E91D63', '#9C27B0', '#673AB7', '#3F51B5', '#2096F3', '#01BCD4', '#009588', '#4CAE51', '#8BC24A', '#CDDC39', '#FFEB3B', '#FEC108', '#FF9801', '#FF5721', '#795548', '#9E9E9E', '#607D8B', '#374046'].sample
# end
#
#
# # Create random Images
# def upload_fake_image
#   uploader = ImageUploader.new(Image.new, :image)
#   uploader.cache!(File.open(Dir.glob(File.join(Rails.root, 'lib/tasks/images', '*')).sample))
#   uploader
# end
#
# 50.times do
#   name = random_name
#   comic = @comics.sample
#   i = comic.images.new(
#     image:            upload_fake_image,
#     x:                random_distance,
#     y:                random_distance,
#     width:            random_size,
#     height:           random_size,
#     z_index:          1
#   )
#
#   if i.save
#     puts "Image #{name} created"
#   else
#     puts "Error. Image #{name} not created"
#   end
# end
#
#
# # Create random shapes
# def upload_fake_shape
#   uploader = ImageUploader.new(Image.new, :image)
#   uploader.cache!(File.open(Dir.glob(File.join(Rails.root, 'lib/tasks/bubbles', '*')).sample))
#   uploader
# end
#
# 50.times do
#   name = random_name
#   comic = @comics.sample
#   i = comic.images.new(
#     image:            upload_fake_shape,
#     x:                random_distance,
#     y:                random_distance,
#     width:            random_size,
#     height:           random_size,
#     z_index:          0
#   )
#
#   if i.save
#     puts "Shape #{name} created"
#   else
#     puts "Error. Shape #{name} not created"
#   end
# end
#
#
# # Create random figures
# 100.times do
#   name = random_name
#   comic = @comics.sample
#   f = comic.figures.new(
#     figure:           name,
#     x:                random_distance,
#     y:                random_distance,
#     width:            random_size,
#     height:           random_size,
#     border_width:     random_border,
#     border_color:     random_color,
#     background_color: random_color,
#     z_index:          1
#   )
#
#   if f.save
#     puts "Figure #{name} created"
#   else
#     puts "Error. Figure #{name} not created"
#   end
# end
#
#
# # Create fonts
# @fonts = [
#   {
#     title: 'Roboto',
#     link: 'https://fonts.googleapis.com/css?family=Roboto'
#   },
#   {
#     title: 'Montserrat',
#     link: 'https://fonts.googleapis.com/css?family=Montserrat'
#   },
#   {
#     title: 'Oswald',
#     link: 'https://fonts.googleapis.com/css?family=Oswald'
#   },
#   {
#     title: 'Merriweather',
#     link: 'https://fonts.googleapis.com/css?family=Merriweather'
#   },
#   {
#     title: 'Playfair Display',
#     link: 'https://fonts.googleapis.com/css?family=Playfair Display'
#   },
#   {
#     title: 'Rubik',
#     link: 'https://fonts.googleapis.com/css?family=Rubik'
#   },
#   {
#     title: 'Amatic SC',
#     link: 'https://fonts.googleapis.com/css?family=Amatic SC'
#   },
#   {
#     title: 'Pacifico',
#     link: 'https://fonts.googleapis.com/css?family=Pacifico'
#   },
#   {
#     title: 'Old Standard TT',
#     link: 'https://fonts.googleapis.com/css?family=Old Standard TT'
#   },
#   {
#     title: 'Press Start 2P',
#     link: 'https://fonts.googleapis.com/css?family=Press Start 2P'
#   },
#   {
#     title: 'Chakra Petch',
#     link: 'https://fonts.googleapis.com/css?family=Chakra Petch'
#   }, {
#     title: 'Faster One',
#     link: 'https://fonts.googleapis.com/css?family=Faster One'
#   }
# ]
#
#
# def create_font(font)
#   Font.create(
#     title: font[:title],
#     link: font[:link],
#   )
# end
#
# @fonts.each do |font|
#   f = create_font(font)
#   puts "Font #{f.title} created"
# end
#
#
# # Create random texts
# @texts = [
#   'kawabunga',
#   'она наблюдает за мной',
#   'у бабки нехилые пушки',
#   'грязные мыслишки, подлая душонка',
#   'Отличительной чертой революций является неправовой характер изменений — несоответствие правовой системе предшествующего строя или режима.'
# ]
#
# 30.times do
#   name = random_name
#   comic = @comics.sample
#   s = comic.speeches.new(
#     text:             @texts.sample,
#     x:                random_distance,
#     y:                random_distance,
#     width:            random_size,
#     height:           random_size,
#     font_id:          Font.all.sample.id,
#     font_size:        random_fontSize,
#     line_height:      random_lineHeight,
#     color:            random_color,
#     z_index:          1
#   )
#
#   if s.save
#     puts "Text #{name} created"
#   else
#     puts "Text #{name} not created"
#   end
# end
#
#
#
# # Create real Comic
# c = Comic.create(name: 'Nonstop Bar')
#
# #Create figures
# def create_comic(comic, figure)
#   comic.figures.create(
#     comic_id:         figure[:comic_id],
#     figure:           figure[:figure],
#     x:                figure[:x],
#     y:                figure[:y],
#     width:            figure[:width],
#     height:           figure[:height],
#     background_color: figure[:background_color],
#     z_index:          figure[:z_index]
#   )
# end
#
# figures = [
#   {
#     comic_id:          1,
#     figure:           'background',
#     x:                 0,
#     y:                 0,
#     width:             1300,
#     height:            950,
#     background_color: 'black',
#     z_index:           0
#   }
# ]
#
# figures.each do |f|
#   create_comic(c, f)
# end
#
#
# # Create Frames
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
#     frame:         '1',
#     x:              208,
#     y:              190,
#     width:          414,
#     height:         605,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '2',
#     x:              640,
#     y:              190,
#     width:          426,
#     height:         137,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '3',
#     x:              640,
#     y:              347,
#     width:          426,
#     height:         136,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '4',
#     x:              639,
#     y:              502,
#     width:          426,
#     height:         136,
#     border_width:   2,
#     border_color:  'white'
#   }, {
#     comic_id:       1,
#     frame:         '5',
#     x:              640,
#     y:              658,
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
#
#
# # Create Image uploader
# def upload_image(image)
#   uploader = ImageUploader.new(Image.new, :image)
#   uploader.cache!(File.open(File.join(Rails.root, 'lib/tasks/images', image )))
#   uploader
# end
#
#
# # Create Images
# def create_comic(comic, image)
#   comic.images.create(
#     comic_id:         image[:comic_id],
#     frame_id:         image[:frame_id],
#     image:            image[:image],
#     x:                image[:x],
#     y:                image[:y],
#     width:            image[:width],
#     height:           image[:height],
#     z_index:          image[:z_index]
#   )
# end
#
# images = [
#   {
#     comic_id: 1,
#     frame_id: 1,
#     image:    upload_image("big_fr.png"),
#     x:        0,
#     y:        0,
#     width:    414,
#     height:   605,
#     z_index:  2
#   }, {
#     comic_id: 1,
#     frame_id: 2,
#     image:    upload_image("1_fr.png"),
#     x:        0,
#     y:        0,
#     width:    426,
#     height:   137,
#     z_index:  2
#   }, {
#     comic_id: 1,
#     frame_id: 3,
#     image:    upload_image("2_fr.png"),
#     x:        0,
#     y:        0,
#     width:    426,
#     height:   136,
#     z_index:  2
#   }, {
#     comic_id: 1,
#     frame_id: 4,
#     image:    upload_image("3_fr.png"),
#     x:        0,
#     y:        0,
#     width:    426,
#     height:   136,
#     z_index:  2
#   }, {
#     comic_id: 1,
#     frame_id: 5,
#     image:    upload_image("4_fr.png"),
#     x:        0,
#     y:        0,
#     width:    426,
#     height:   137,
#     z_index:  2
#   },
#
#   {
#     comic_id: 1,
#     image:    upload_image("777.png"),
#     x:        492,
#     y:        308,
#     width:    106,
#     height:   87,
#     z_index:  4
#   }, {
#     comic_id: 1,
#     image:    upload_image("pong.png"),
#     x:        235,
#     y:        287,
#     width:    70,
#     height:   32,
#     z_index:  4
#   }
# ]
#
# images.each do |i|
#   create_comic(c, i)
# end
#
#
# # Create Shape uploader
# def upload_shape(image)
#   uploader = ImageUploader.new(Image.new, :image)
#   uploader.cache!(File.open(File.join(Rails.root, 'lib/tasks/bubbles', image )))
#   uploader
# end
#
#
# # Create Bubble shapes
# def create_comic(comic, image)
#   comic.images.create(
#     comic_id:         image[:comic_id],
#     frame_id:         image[:frame_id],
#     image:            image[:image],
#     x:                image[:x],
#     y:                image[:y],
#     width:            image[:width],
#     height:           image[:height],
#     z_index:          image[:z_index]
#   )
# end
#
# images = [
#   {
#     comic_id: 1,
#     frame_id: 1,
#     image:    upload_shape("granny_bubble.png"),
#     x:        270,
#     y:        100,
#     width:    140,
#     height:   160,
#     z_index:  3
#   }, {
#     comic_id: 1,
#     frame_id: 1,
#     image:    upload_shape("man_bubble.png"),
#     x:        -3,
#     y:        60,
#     width:    140,
#     height:   120,
#     z_index:  3
#   }
# ]
#
# images.each do |i|
#   create_comic(c, i)
# end
#
#
# # Create Text
# def create_comic(comic, speech)
#   comic.speeches.create(
#     comic_id:         speech[:comic_id],
#     frame_id:         speech[:frame_id],
#     text:             speech[:text],
#     x:                speech[:x],
#     y:                speech[:y],
#     width:            speech[:width],
#     height:           speech[:height],
#     font_id:          speech[:font_id],
#     font_size:        speech[:font_size],
#     line_height:      speech[:line_height],
#     color:            speech[:color],
#     z_index:          speech[:z_index]
#   )
# end
#
# speeches = [
#   {
#     comic_id: 1,
#     frame_id: 1,
#     text: '925653',
#     x: 175,
#     y: 46,
#     width: 200,
#     height: 200,
#     font_id: 11,
#     font_size: 23,
#     line_height: 28,
#     color: 'white',
#     z_index: 3
#   }, {
#     comic_id: 1,
#     text: 'Nonstop Bar',
#     x: 465,
#     y: 91,
#     width: 400,
#     height: 200,
#     font_id: 6,
#     font_size: 53,
#     line_height: 64,
#     color: 'white',
#     z_index: 1
#   }
# ]
#
# speeches.each do |s|
#   create_comic(c, s)
# end
