import Pagination from "react-bootstrap/Pagination";

export const Paginate = ({ limit, total, setPage, page }) => {
  //   let active = page;

  const totalNumberOfPages = Math.ceil(total / limit);
  let items = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === page}
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }
  console.log("length of the item", items.length);

  return (
    <div className=" w-100 d-flex justify-content-center align-items-center mt-4">
      <Pagination>
        <Pagination.First
          disabled={page === 1}
          onClick={() => {
            setPage(1);
          }}
        />
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => {
            setPage(page != 1 ? page - 1 : null);
          }}
        />
        {items.map((item) => {
          return <div key={item}>{item}</div>;
        })}
        {/* <Pagination.Item active>{1}</Pagination.Item> */}

        <Pagination.Next
          disabled={page === totalNumberOfPages}
          onClick={() => {
            setPage(page != totalNumberOfPages ? page + 1 : null);
          }}
        />
        <Pagination.Last
          disabled={page === totalNumberOfPages}
          onClick={() => {
            setPage(totalNumberOfPages);
          }}
        />
      </Pagination>
    </div>
  );
};
