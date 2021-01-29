# Song.destroy_all
# Producer.destroy_all
# Sample.destroy_all
# SongsSample.destroy_all

# PRODUCERS

vanilla_ice = Producer.where( name: "Vanilla Ice", genre: "Hip hop and nu metal",  lifetime:"October 31, 1967-", location: "Dallas,Texas and Miami,Florida").first_or_create
dr_dre = Producer.where( name: "Dr. Dre", genre: "Hip hop",  lifetime:"February 18, 1965-", location: "Compton,California").first_or_create
young_kio = Producer.where( name: "YoungKio", genre: "Hip hop",  lifetime:"December 3, 1999-", location: "Purmerend, Netherlands").first_or_create
rza = Producer.where(name: "RZA", genre:"Hip Hop", lifetime: "July 5, 1969-", location: "Staten Island").first_or_create
metro_boomin_and_freyy = Producer.where(name: "Metro Boomin and Freyy", genre:"Hip Hop",lifetime:"Metro Boomin: September 16, 1993-,Freyy: unknown",location:"Metro Boomin: St.Louis, Missouri, Freyy: unknown").first_or_create
teddy_riley_and_william_skylz_stewart = Producer.where(name:"Teddy Riley and William 'Skylz' Stewart",genre:"Riley:R&B, hip hop, new jack swing/Stewart: Hip Hop",lifetime:"Riley: October 8, 1967-/Stewart:unknown",location:"Riley: New York City/Stewart:unknown").first_or_create
queen_and_david_bowie = Producer.where(name:"David Bowie, Queen(Freddie Mercury,Brian May,Roger Taylor,John Deacon)",genre:"rock",lifetime:"David Bowie: January 8, 1947 – January 10, 2016, Queen(Freddie Mercury(September 5, 1946 – November 24, 1991),Brian May(July 19, 1947),Roger Taylor(July 26, 1949),John Deacon(August 19, 1951))",location:"London,England").first_or_create
booker_t_jones = Producer.where(name: "Booker T. Jones", genre:"R&B, instrumental rock, soul, electric blues", lifetime: "November 12, 1944", location: "Memphis, Tennessee").first_or_create
alan_moulder_trent_reznor_atticus_ross = Producer.where(name: "Alan Moulder, Trent Reznor, Atticus Ross", genre:"Alan Moulder: alternative rock, Trent Reznor: 	
  Industrial rock, alternative rock, synth-pop, Atticus Ross: 	
  Post-industrial, alternative rock, dark ambient", lifetime: "Alan Moulder: June 11, 1959, Trent Reznor: May 17, 1965, Atticus Ross: January 16, 1968", location: "Alan Moulder: Boston, Lincolnshire, England, Trent Reznor: New Castle, Pennsylvania, Atticus Ross: Ladbroke Grove, London").first_or_create
isaac_hayes_and_david_porter= Producer.where(name: "Isaac Hayes and David Porter", genre:"Isaac Hayes: Progressive soul, funk, psychedelic soul, David Porter: R&B and soul", lifetime: "Isaac Hayes: August 20, 1942 – August 10, 2008, David Porter: November 21, 1941", location: "Isaac Hayes: Covington, Tennessee, David Porter: 	Memphis, Tennessee").first_or_create
tommy_butler = Producer.where(name: "Tommy Butler", genre:"soul", lifetime: "unknown", location: "unknown").first_or_create
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
  producer:teddy_riley_and_william_skylz_stewart, 
  sample_appears:"0:00 and onwards throughout the rest of the song"
).first_or_create

@old_town_road = Song.where(
  name: "Old Town Road", 
  artist: "Lil Nas X",  
  genre: "Hip Hop", 
  record_label: "Columbia", 
  year: "2018", 
  producer:young_kio, 
  sample_appears:"0:00 and onwards throughout the rest of the song"
).first_or_create

@c_r_e_a_m = Song.where(
  name: "C.R.E.A.M.", 
  artist: "Wu Tang Clan",  
  genre: "Hip Hop", 
  record_label: "Loud", 
  year: "1994", 
  producer: rza, 
  sample_appears:"0:06 and throughout"
).first_or_create

@mask_off = Song.where(
  name: "Mask Off", 
  artist: "Future",  
  genre: "Hip Hop", 
  record_label: "Freebands, Epic", 
  year: "2017", 
  producer: metro_boomin_and_freyy, 
  sample_appears:"1:36, 3:12"
).first_or_create

# SAMPLES

@under_pressure = Sample.where(
  name: "Under Pressure",
  artist: "Queen and David Bowie",
  genre: "rock,pop",
  record_label: "EMI and Elektra",
  year: "1981",
  producer:queen_and_david_bowie,
  sampled_at: "0:00"
).first_or_create

@grandmas_hands = Sample.where(
  name: "Grandma's Hands",
  artist: "Bill Withers",
  genre: "Soul",
  record_label: "Sussex",
  year: "1971",
  producer:booker_t_jones,
  sampled_at: "0:00"
).first_or_create

@thirty_four_ghosts_iv = Sample.where(
  name: "34 Ghosts IV",
  artist: "Nine Inch Nails",
  genre: "Dark Ambient",
  record_label: "The Null Corporation",
  year: "2008",
  producer:alan_moulder_trent_reznor_atticus_ross,
  sampled_at: "0:07"
).first_or_create

@as_long_as_ive_got_you = Sample.where(
  name: "As Long As I've Got You",
  artist: "The Charmels",
  genre: "R&B",
  record_label: "Volt",
  year: "1967",
  producer:isaac_hayes_and_david_porter, 
  sampled_at: "0:20"
).first_or_create

@prison_song = Sample.where(
  name: "Prison Song",
  artist: "Carlton Williams",
  genre: "Soul",
  record_label: "Cotillon",
  year: "1976",
  producer:tommy_butler, 
  sampled_at: "0:00 and 0:30"
).first_or_create

# SONG SAMPLE JOINS TABLE

@ice_ice_baby_and_under_pressure = SongsSample.where(
  song_id:1,
  sample_id:1
).first_or_create

@no_diggity_and_grandmas_hands = SongsSample.where(
  song_id:2,
  sample_id:2
).first_or_create

@old_town_road_and_thirty_four_ghosts_iv = SongsSample.where(
  song_id:3,
  sample_id:3
).first_or_create


@cream_and_as_long_as_ive_got_you = SongsSample.where(
  song_id:4,
  sample_id:4
).first_or_create


@mask_off_and_prison_song = SongsSample.where(
  song_id:5,
  sample_id:5
).first_or_create




puts "#{Producer.count} producers created!"
puts "#{Song.count} songs created!"
puts "#{Sample.count} samples created!"
puts "#{SongsSample.count} sample song pairs created!"


