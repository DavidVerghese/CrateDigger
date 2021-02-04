import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongsSamplesEditingRedo(props) {
  const [song_id2, setSong_id2] = useState('');
  const [sample_id2, setSample_id2] = useState('');
  const [songName2, setSongName2] = useState('');
  const [sampleName2, setSampleName2] = useState('');


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
    sample_id: sampleFormData
  });
  const { song_id, sample_id } = songsSampleFormData;
  const { name, artist, genre, record_label, year, sample_appears, song_pic_address, youtube_address } = songFormData;
  const { sampleName, sampleArtist, sampleGenre, sample_record_label, sampleYear, sampled_at, sample_pic_address, youtube_embed } = sampleFormData;

  const { updateSongssample, allSongssamples } = props;
  const { updateSong, allSongs } = props;
  const { updateSample, allSamples } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneSongsSample = allSongssamples.find(songssample => {
        return songssample.id === Number(id);
      });
      // console.log(oneSongsSample);
      const oneSong = allSongs.find(song => {
        return song.id === Number(id);
      });
      const oneSample = allSamples.find(sample => {
        return sample.id === Number(id);
      });
      const { song_id, sample_id } = oneSongsSample;
      setSong_id2(song_id); 
      setSample_id2(sample_id);
      // console.log(oneSong.name, oneSample);
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

      // setSongsSampleFormData({ song_id, sample_id });
    }
    if (allSongssamples.length) {
      prefillFormData()
    }
  }, [allSongssamples, id])
  
  const songHandleChange = (e) => {
    const { name, value } = e.target;
    setSongFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
    })
    console.log(songFormData);
    // console.log(songsSampleFormData);
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
    })
    console.log(sampleFormData);
    // console.log(songsSampleFormData);
  }

  const songsSampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSongsSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(songsSampleFormData);
  }

  return <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSongssample(id, songsSampleFormData);
        }}>
      <h3>Update SongsSamples</h3>
      <p>{song_id2}</p>
      <p>{songName2}</p>
      <p>{sample_id2}</p>
      <p>{sampleName2}</p>

          {/* <label>Song Id:
            <input
              type="text"
              name="song_id"
              onChange={songsSampleHandleChange}
            />
      </label> */}
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
      <label>Song Producer:
            <input
              type="text"
              name="producer_id"
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
          {/* <label>Sample Id:
            <input
              type="text"
              name="sample_id"
              onChange={songsSampleHandleChange}
            />
      </label> */}
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
      <label>Sample Producer:
            <input
              type="text"
              name="producer_id"
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
          <button>Submit</button>
        </form>
  </div>
}
export default SongsSamplesEditingRedo