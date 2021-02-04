import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongsSamplesEditingRedo(props) {
  const [song_id2, setSong_id2] = useState('');
  const [sample_id2, setSample_id2] = useState('');
  const [songName2, setSongName2] = useState('');
  const [sampleName2, setSampleName2] = useState('');

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
      const genre = oneSong.genre;
      const recordLabel = oneSong.record_label;
      const year = oneSong.year;
      const sampleAppears = oneSong.sample_appears;
      const songPicAddress = oneSong.song_pic_address;
      const songYoutubeLink = oneSong.youtube_address;

      const sampleName = oneSample.name;
      setSampleName2(sampleName);
      const sampleArtist = oneSample.artist;
      const sampleGenre = oneSample.genre;
      const sampleRecordLabel = oneSample.sample_record_label;
      const sampleYear = oneSample.year;
      const sampledAt = oneSample.sampled_at;
      const samplePicAddress = oneSong.sample_pic_address;
      const sampleYoutubeLink = oneSong.youtube_embed;

      const songProducerName = oneSongProducer.name;
      const songProducerGenre = oneSongProducer.genre;
      const songProducerLifetime = oneSongProducer.lifetime;
      const songProducerLocation = oneSongProducer.location;

      const sampleProducerName = oneSampleProducer.name;
      const sampleProducerGenre = oneSampleProducer.genre;
      const sampleProducerLifetime = oneSampleProducer.lifetime;
      const sampleProducerLocation = oneSampleProducer.location;
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
    })
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
    })
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
    })
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
    })
  }

  const songsSampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSongsSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSongssample(id, songsSampleFormData);
        }}>
      <h2>Edit page: </h2>


      <h2>Song: </h2>
      <label>Song Name:
            <input
              type="text"
              name="name"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Artist:
            <input
              type="text"
              name="artist"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Genre:
            <input
              type="text"
              name="genre"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Record Label:
            <input
              type="text"
              name="record_label"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Year:
            <input
              type="year"
              name="name"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Sample Appears:
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Img url:
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
            />
      </label>
      <label>Song Youtube Address:
            <input
              type="text"
              name="youtube_address"
              onChange={songHandleChange}
            />
          </label>
      <h2>Song Producer: </h2>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
              name="location"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
              name="lifetime"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="producer_pic_address"
              onChange={songProducerHandleChange}
            />
      </label>
      <h2>Sample:</h2>
      <label>Sample Name:
            <input
              type="text"
              name="name"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Artist:
            <input
              type="text"
              name="artist"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Genre:
            <input
              type="text"
              name="genre"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Record Label:
            <input
              type="text"
              name="record_label"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Year:
            <input
              type="year"
              name="name"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Sampled At:
            <input
              type="text"
              name="sampled_at"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Img url:
            <input
              type="text"
              name="sample_pic_address"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample Youtube Address:
            <input
              type="text"
              name="youtube_embed"
              onChange={sampleHandleChange}
            />
      </label>
      <h2>Sample Producer:</h2>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
              name="location"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
              name="lifetime"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="producer_pic_address"
              onChange={sampleProducerHandleChange}
            />
      </label>
          <button>Submit</button>
        </form>
  </div>
}
export default SongsSamplesEditingRedo