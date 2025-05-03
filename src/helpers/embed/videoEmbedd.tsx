export const VideoEmbed = ({ url }: { url: string }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="Video Player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
