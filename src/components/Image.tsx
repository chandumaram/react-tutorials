import tree from "../assets/tree.jpg";

const Image = () => {
  const laptop =
    "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

  return (
    <div>
      <img src={tree} height={150} alt="Image of tree" />
      <img src={laptop} height={150} alt="Image of laptop" />
    </div>
  );
};

export default Image;
