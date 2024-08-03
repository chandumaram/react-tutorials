import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const videoUrl = "https://youtu.be/SQggRzkQ_TA?si=NwE0bXecbMKVXjIB";
  return (
    <div>
      <h1>React Video Player</h1>
      <ReactPlayer url={videoUrl} volume={0.2} />
    </div>
  );
};

export default VideoPlayer;
