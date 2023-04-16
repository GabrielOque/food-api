const Card = ({ data, setIsModal, imageModal, setImageModal, isModal }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="w-40 h-48 p-2 m-2 bg-blue-500">
          <div className="flex flex-col justify-between">
            <img src={item.image} alt="Not render" />
            <p>{item.title.split(" ", 2).join(" ")}</p>
            <div className="flex justify-center">
              <button
                className="pb-2"
                onClick={() => {
                  setIsModal(!isModal);
                  setImageModal(item);
                }}
              >
                Ver
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
