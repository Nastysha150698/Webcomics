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


Figure.create([
    {
      figure: '1',
      x: '0',
      y: '0',
      width: '600',
      height: '200',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '2',
      x: '600',
      y: '0',
      width: '200',
      height: '200',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '3',
      x: '800',
      y: '0',
      width: '400',
      height: '300',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '4',
      x: '1200',
      y: '0',
      width: '220',
      height: '610',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '5',
      x: '0',
      y: '200',
      width: '790',
      height: '100',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '6',
      x: '0',
      y: '310',
      width: '200',
      height: '300',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '7',
      x: '200',
      y: '310',
      width: '500',
      height: '300',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '8',
      x: '710',
      y: '310',
      width: '480',
      height: '200',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }, {
      figure: '9',
      x: '710',
      y: '510',
      width: '480',
      height: '100',
      border_width: '10',
      border_color: 'black',
      background_color: 'white'
    }
  ])
