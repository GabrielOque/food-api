const ModalCard = ({ setIsModal, imageModal, isModal }) => {
  return (
    <div
      className="fixed right-0 bg-white rounded-lg shadow-inner shadow-red-600 top-72 h-96"
      style={{ width: "600px", left: "600px" }}
    >
      <button
        className="absolute top-0 right-0 px-2 text-white bg-black rounded-full"
        onClick={() => setIsModal(!isModal)}
      >
        X
      </button>
      <div className="flex items-center justify-center w-full h-full">
        <div className="">
          <img src={imageModal.image} alt="Not render" />
          <p>ID: {imageModal.id}</p>
          <p>{imageModal.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
