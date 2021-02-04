import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SongsSamplesEditingRedo.css'

function SongsSamplesEditingRedo(props) {
  const [song_id2, setSong_id2] = useState('');
  const [sample_id2, setSample_id2] = useState('');

  const [songName2, setSongName2] = useState('');
  const [songArtist2, setSongArtist2] = useState('');
  const [songGenre2, setSongGenre2] = useState('');
  const [songRecordLabel2, setSongRecordLabel2] = useState('');
  const [songYear2, setSongYear2] = useState('');
  const [songSampleAppears2, setSongSampleAppears2] = useState('');
  const [songPicAddress2, setSongPicAddress2] = useState('');
  const [songSongYoutubeAddress2, setSongYoutubeAddress2] = useState('');

  const [songProducerName2, setSongProducerName2] = useState('');
  const [songProducerGenre2, setSongProducerGenre2] = useState('');
  const [songProducerLifetime2, setSongProducerLifetime2] = useState('');
  const [songProducerLocation2, setSongProducerLocation2] = useState('');
  const [songProducerPicAddress2, setSongProducerPicAddress2] = useState('');

  const [sampleName2, setSampleName2] = useState('');
  const [sampleArtist2, setSampleArtist2] = useState('');
  const [sampleGenre2, setSampleGenre2] = useState('');
  const [sampleRecordLabel2, setSampleRecordLabel2] = useState('');
  const [sampleYear2, setSampleYear2] = useState('');
  const [sampledAt2, setSampledAt2] = useState('');
  const [samplePicAddress2, setSamplePicAddress2] = useState('');
  const [sampleYoutubeAddress2, setSampleYoutubeAddress2] = useState('');

  const [sampleProducerName2, setSampleProducerName2] = useState('');
  const [sampleProducerGenre2, setSampleProducerGenre2] = useState('');
  const [sampleProducerLifetime2, setSampleProducerLifetime2] = useState('');
  const [sampleProducerLocation2, setSampleProducerLocation2] = useState('');
  const [sampleProducerPicAddress2, setSampleProducerPicAddress2] = useState('');

  let count = 0;

  const [songProducerFormData, setSongProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: "",
    producer_pic_address: ""
  });
  const [sampleProducerFormData, setSampleProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: "",
    producer_pic_address: ""
  });

  const [songFormData, setSongFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    sample_appears: "",
    song_pic_address: "",
    youtube_address: ""
  });
  const [sampleFormData, setSampleFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    sampled_at: "",
    sample_pic_address: "",
    youtube_embed: ""
  });
  const [songsSampleFormData, setSongsSampleFormData] = useState({
    song_id: songFormData,
    sample_id: sampleFormData,
    song_producer: songProducerFormData,
    sample_producer: sampleProducerFormData
  });
  const { song_id, sample_id } = songsSampleFormData;
  const { name, artist, genre, record_label, year, sample_appears, song_pic_address, youtube_address } = songFormData;
  const { sampleName, sampleArtist, sampleGenre, sample_record_label, sampleYear, sampled_at, sample_pic_address, youtube_embed } = sampleFormData;
  const { songProducerName, songProducerGenre, songProducerLocation, songProducerLifetime } = songProducerFormData;
  const { sampleProducerName, sampleProducerGenre, sampleProducerLocation, sampleProducerLifetime } = sampleProducerFormData;

  const { updateSongssample, allSongssamples } = props;
  const { updateSong, allSongs } = props;
  const { updateSample, allSamples } = props;
  const { updateProducer, allProducers } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneSongsSample = allSongssamples.find(songssample => {
        return songssample.id === Number(id);
      });
      const oneSong = allSongs.find(song => {
        return song.id === Number(id);
      });
      const oneSongProducer = allProducers.find(producer => {
        return producer.id === oneSong.producer_id;
      });
      const oneSample = allSamples.find(sample => {
        return sample.id === Number(id);
      });
      const oneSampleProducer = allProducers.find(producer => {
        return producer.id === oneSample.producer_id;
      });
      const { song_id, sample_id } = oneSongsSample;
      setSong_id2(song_id); 
      setSample_id2(sample_id);
      const name = oneSong.name;
      setSongName2(name);
      const artist = oneSong.artist;
      setSongArtist2(artist);
      const genre = oneSong.genre;
      setSongGenre2(genre);
      const recordLabel = oneSong.record_label;
      setSongRecordLabel2(recordLabel);
      const year = oneSong.year;
      setSongYear2(year);
      const sampleAppears = oneSong.sample_appears;
      setSongSampleAppears2(sampleAppears);
      const songPicAddress = oneSong.song_pic_address;
      setSongPicAddress2(songPicAddress);
      const songYoutubeLink = oneSong.youtube_address;
      setSongYoutubeAddress2(songYoutubeLink);

      const sampleName = oneSample.name;
      setSampleName2(sampleName);
      const sampleArtist = oneSample.artist;
      setSampleArtist2(sampleArtist);
      const sampleGenre = oneSample.genre;
      setSampleGenre2(sampleGenre);
      const sampleRecordLabel = oneSample.record_label;
      setSampleRecordLabel2(sampleRecordLabel);
      const sampleYear = oneSample.year;
      setSampleYear2(sampleYear);
      const sampledAt = oneSample.sampled_at;
      setSampledAt2(sampledAt);
      const samplePicAddress = oneSample.sample_pic_address;
      setSamplePicAddress2(samplePicAddress);
      const sampleYoutubeLink = oneSample.youtube_embed;
      setSampleYoutubeAddress2(sampleYoutubeLink);

      const songProducerName = oneSongProducer.name;
      setSongProducerName2(songProducerName);
      const songProducerGenre = oneSongProducer.genre;
      setSongProducerGenre2(songProducerGenre);
      const songProducerLifetime = oneSongProducer.lifetime;
      setSongProducerLifetime2(songProducerLifetime);
      const songProducerLocation = oneSongProducer.location;
      setSongProducerLocation2(songProducerLocation);
      const songProducerPicAddress = oneSongProducer.producer_pic_address;
      setSongProducerPicAddress2(songProducerPicAddress);

      const sampleProducerName = oneSampleProducer.name;
      setSampleProducerName2(sampleProducerName);
      const sampleProducerGenre = oneSampleProducer.genre;
      setSampleProducerGenre2(sampleProducerGenre);
      const sampleProducerLifetime = oneSampleProducer.lifetime;
      setSampleProducerLifetime2(sampleProducerLifetime);
      const sampleProducerLocation = oneSampleProducer.location;
      setSampleProducerLocation2(sampleProducerLocation);
      const sampleProducerPicAddress = oneSampleProducer.producer_pic_address;
      setSampleProducerPicAddress2(sampleProducerPicAddress);

      // setSongsSampleFormData({ song_id, sample_id });
    }
    if (allSongssamples.length) {
      prefillFormData()
    }
  }, [allSongssamples, id])

  const songProducerHandleChange = (e) => {
    const { name, value } = e.target;
    setSongProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    });
    count += 1;
  }
  const sampleProducerHandleChange = (e) => {
    const { name, value } = e.target;
    setSampleProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    });
    count += 1;
  }
  
  const songHandleChange = (e) => {
    const { name, value } = e.target;
    setSongFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    });
    count += 1;
  }
  const sampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    });
    count += 1;
  }

  const songsSampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSongsSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    count += 1;
  }

  return <div className="songs-samples-editing-redo-form-container">
    <form onSubmit={(e) => {
      e.preventDefault();
        updateSongssample(id, songsSampleFormData);
        }}>
      <h2>Edit page </h2>

        <div className="song-sample-editing-redo-song-parent-div">
      <h2>Song: </h2>
      <label><p>Song Name:</p>
            <input
              type="text"
            name="name"
            placeholder={songName2}
              onChange={songHandleChange}
            />
      </label>
      <label><p>Song Artist:</p>
            <input
              type="text"
            name="artist"
            placeholder={songArtist2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Genre:</p>
            <input
              type="text"
            name="genre"
            placeholder={songGenre2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Record Label:</p>
            <input
              type="text"
            name="record_label"
            placeholder={songRecordLabel2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Year:</p>
            <input
              type="year"
            name="name"
            placeholder={songYear2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Sample Appears:</p>
            <input
              type="text"
            name="sample_appears"
            placeholder={songSampleAppears2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Img url:</p>
            <input
              type="text"
            name="sample_appears"
            placeholder={songPicAddress2}
              onChange={songHandleChange}
            />
      </label>
      <label> <p>Song Youtube Address:</p>
            <input
              type="text"
            name="youtube_address"
            placeholder={songSongYoutubeAddress2}
              onChange={songHandleChange}
            />
        </label>
      </div>
      <div className="song-sample-editing-redo-song-producer-parent-div">
      <h2> Song Producer: </h2>
      <label><p>Name:</p>
            <input
              type="text"
            name="name"
            placeholder={songProducerName2}
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
            name="genre"
            placeholder={songProducerGenre2}
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
            name="location"
            placeholder={songProducerLocation2}
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
            name="lifetime"
            placeholder={songProducerLifetime2}
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
            name="producer_pic_address"
            placeholder={songProducerPicAddress2}
              onChange={songProducerHandleChange}
            />
        </label>
      </div>
      <div className="song-sample-editing-redo-song-parent-div">
      <h2>Sample:</h2>
      <label><p>Sample Name:</p>
            <input
              type="text"
            name="name"
            placeholder={sampleName2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Artist:</p>
            <input
              type="text"
            name="artist"
            placeholder={sampleArtist2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Genre:</p>
            <input
              type="text"
            name="genre"
            placeholder={sampleGenre2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Record Label:</p>
            <input
              type="text"
            name="record_label"
            placeholder={sampleRecordLabel2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Year:</p>
            <input
              type="year"
            name="name"
            placeholder={sampleYear2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Sampled At:</p>
            <input
              type="text"
            name="sampled_at"
            placeholder={sampledAt2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Img url:</p>
            <input
              type="text"
            name="sample_pic_address"
            placeholder={samplePicAddress2}
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample Youtube Address:</p>
            <input
              type="text"
            name="youtube_embed"
            placeholder={sampleYoutubeAddress2}
              onChange={sampleHandleChange}
            />
        </label>
      </div>
      
      <div className="song-sample-editing-redo-song-producer-parent-div">
      <h2>Sample Producer:</h2>
      <label><p>Name:</p>
            <input
              type="text"
            name="name"
            placeholder={sampleProducerName2}
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
            name="genre"
            placeholder={sampleProducerGenre2}
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
            name="location"
            placeholder={sampleProducerLocation2}
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
            name="lifetime"
            placeholder={sampleProducerLifetime2}
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
            name="producer_pic_address"
            placeholder={sampleProducerPicAddress2}
              onChange={sampleProducerHandleChange}
            />
        </label>
        <br/>
          <button>Submit</button></div>
        </form>
  </div>
}
export default SongsSamplesEditingRedo