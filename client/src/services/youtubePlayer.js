export const youtubePlayer = (youtube_embed) => {
  return <iframe className="posts-iframe" src={youtube_embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}