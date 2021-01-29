# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


SongsSample.destroy_all

# PRODUCERS

timbaland = Producer.where( name: "Timbaland", genre: "Hip hop and R&B",  lifetime:"March 10, 1972-", location: "Norfolk, Virginia").first_or_create
vanilla_ice = Producer.where( name: "Vanilla Ice", genre: "Hip hop and nu metal",  lifetime:"October 31, 1967-", location: "Dallas,Texas").first_or_create
dr_dre = Producer.where( name: "Doctor Dre", genre: "Hip hop",  lifetime:"February 18, 1965-", location: "Compton,California").first_or_create


# SONGS

@ice_ice_baby = Song.where(
  name: "Ice Ice Baby", 
  artist: "Vanilla Ice",  
  genre: "Hip Hop", 
  record_label: "SBK", 
  year: "1990", 
  producer:vanilla_ice, 
  sample_appears:"0:08 and onwards throughout the rest of the song"
).first_or_create

@no_diggity = Song.where(
  name: "No Diggity", 
  artist: "Black Street",  
  genre: "Hip Hop", 
  record_label: "Interscope", 
  year: "1996", 
  producer:dr_dre, 
  sample_appears:"0:00 and onwards throughout the rest of the song"
).first_or_create

# SAMPLES

@under_pressure = Sample.where(
  name: "Under Pressure",
  artist: "Queen and David Bowie",
  genre: "rock",
  record_label: "EMI and Elektra",
  producer:vanilla_ice,
  sampled_at: "0:00"
).first_or_create

@grandmas_hands = Sample.where(
  name: "Grandma's Hands",
  artist: "Bill Withers",
  genre: "Soul",
  record_label: "Sussex",
  producer:vanilla_ice,
  sampled_at: "0:00"
).first_or_create

# SONG SAMPLE JOINS TABLE

@ice_ice_baby_and_under_pressure = SongsSample.where(
  song_id:31,
  sample_id:29
).first_or_create



puts "#{Producer.count} producers created!"
puts "#{Song.count} songs created!"
puts "#{Sample.count} samples created!"
puts "#{SongsSample.count} sample song pairs created!"


