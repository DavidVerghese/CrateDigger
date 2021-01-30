import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllSongssamples, deleteSongssample, postSongssample, putSongssample } from '../services/songssamples';
import { getAllSongs, deleteSong, postSong, putSong } from '../services/songs';
import { getAllSamples, deleteSample, postSample, putSample } from '../services/samples';
import { getAllProducers, deleteProducer, postProducer, putProducer } from '../services/producers';

export default function Container() {

  const [allSongssamples, setAllSongssamples] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allSamples, setAllSamples] = useState([]);
  const [allProducers, setAllProducers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetchSongssamples();
  }, [])

  const fetchSongssamples = async () => {
    const songssamples = await getAllSongssamples();
    setAllSongssamples(songssamples);
    console.log(songssamples);

    const songs = await getAllSongs();
    setAllSongs(songs);
    console.log(songs);

    const samples = await getAllSamples();
    setAllSamples(samples);
    console.log(samples);

    const producers = await getAllProducers();
    setAllProducers(producers);
    console.log(producers);
  }

  const createSongssample = async (songssampleData) => {
    const newSongssample = await postSongssample(songssampleData);
    setAllSongssamples(prevState => ([
      ...prevState,
      newSongssample
    ]));
    // history.push('/songssamples');
  }

  const updateSongssample = async (id, songssampleData) => {
    const updatedSongssample = await putSongssample(id, songssampleData);
    setAllSongssamples(prevState => prevState.map(songssample => {
        return songssample.id === Number(id) ? updatedSongssample : songssample
      })
    )
    // history.push('/dogs');
  }

  const removeSongssample = async (id) => {
    await deleteSongssample(id);
    setAllSongssamples(prevState => prevState.filter(songssample => songssample.id !== id));
    // history.push('/dogs');
  }

  return (<div>Hi
     {/* {allSongssamples.map((songssampleInfo) => {
        return (
          <p>Songssample: {songssampleInfo.sample_id}</p>
        )
      })}
      {allSongs.map((songInfo) => {
        return (
          <p>Song: {songInfo.name}</p>
        )
      })}
      {allSamples.map((sampleInfo) => {
        return (
          <p>Sample: {sampleInfo.name}</p>
        )
      })}
      {allProducers.map((producerInfo) => {
        console.log(producerInfo.name);
        return (
          <p>Producer: {producerInfo.name}</p>
        )
      })} */}
  </div>)
  

  

  // // 8. make a function to post a dog and set state
  // // this function should take in some dogData as a parameter
  // // this function should also push '/dogs' to the router history



  // // 11.  make a function to edit a dog and set state
  // // this function should take in an id and some dogData as a parameter
  // // this function should also push '/dogs' to the router history
  // const updateDog = async (id, dogData) => {
  //   const updatedDog = await putDog(id, dogData);
  //   setAllDogs(prevState => prevState.map(dog => {
  //       return dog.id === Number(id) ? updatedDog : dog
  //     })
  //   )
  //   history.push('/dogs');
  // }


  // // 14.make a function to delete a dog and set state
  // // this function should take in an id as a parameter
  // // this function should also push '/dogs' to the router history
  // const removeDog = async (id) => {
  //   await deleteDog(id);
  //   setAllDogs(prevState => prevState.filter(dog => dog.id !== id));
  //   history.push('/dogs');
  // }


  // return (
  //   <>
  //     <Switch>
  //       <Route path='/dogs/new'>
  //         <DogCreate
  //           // 9. pass the create dog function through props
  //           createDog={createDog}
  //           // 10. complete the DogCreate.js component
  //         />
  //       </Route>
  //       <Route path='/dogs/:id/edit'>
  //         <DogEdit
  //           // 12. pass all dogs and the update dog function through props
  //           // 13. complete the DogEdit.jsx component
  //           updateDog={updateDog}
  //           allDogs={allDogs}
            
  //         />
  //       </Route>
  //       <Route path='/dogs/:id'>
  //         <DogDetail
  //           // 6. pass all dogs through props
  //           allDogs={allDogs}
  //           // 7. complete the DogsDetail.jsx component except for the delete dog part
  //           // 15. complete the delete dog parts of DogsDetail.jsx 
  //           removeDog={removeDog}
  //         />
  //       </Route>
  //       <Route path='/dogs'>
  //         <Dogs
  //           // 4. pass all dogs through props
  //           // 5. complete the Dogs.jsx component
  //           allDogs={allDogs}
  //         />

  //       </Route>
  //     </Switch>
  //   </>
  // )
}