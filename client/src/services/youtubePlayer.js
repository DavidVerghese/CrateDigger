function youtubePlayer(youtube_embed) {
  return <iframe className = "posts-iframe" src={youtube_embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}