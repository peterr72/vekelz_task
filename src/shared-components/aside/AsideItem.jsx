const AsideItem = ({ icon, name, onClick, index, active }) => {
  return (
    <div
      className={
        active
          ? "d-flex align-items-center my-2 p-2 rounded bg-aside cursor"
          : "d-flex align-items-center my-2 p-2 rounded cursor"
      }
      onClick={() => {
        onClick(index);
      }}
    >
      <img src={icon} alt="" width={"20px"} className="me-3 " />
      <span className="text-capitalize">{name}</span>
    </div>
  );
};

export default AsideItem;
