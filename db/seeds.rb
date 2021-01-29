# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Producer.destroy_all
# Song.destroy_all
# Sample.destroy_all
# SongsSample.destroy_all

@timbaland = Producer.create!(name: "Timbaland", genre: "Hip hop and R&B",  lifetime:"March 10, 1972-", location: "Norfolk, Virginia")
@vanilla_ice = Producer.create!(name: "Vanilla Ice", genre: "Hip hop and nu metal",  lifetime:"October 31, 1967-", location: "Dallas,Texas")

@ice_ice_baby = Song.create!(
  name: "Ice Ice Baby", 
  artist: "Vanilla Ice",  
  genre: "Hip Hop", 
  record_label: "SBK", 
  year: "1990", 
  producer:@vanilla_ice, 
  sample_appears:"0:08 and onwards throughout the rest of the song")

@under_pressure = Sample.create!(
  name: "Under Pressure",
  artist: "Queen and David Bowie",
  genre: "rock",
  record_label: "EMI and Elektra",
  producer:@vanilla_ice,
  sampled_at: "0:00"
)

@ice_ice_baby_and_under_pressure = SongsSample.create!(song_id:14,sample_id:12)


puts "#{Producer.count} producers created!"
puts "#{Song.count} songs created!"
puts "#{Sample.count} samples created!"
puts "#{SongsSample.count} sample song pairs created!"

# Song: 3, Sample: 1