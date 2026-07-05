const Index = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Product List (Hardcoded)</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Test Product #1</h5>
              <p className="card-text">Price: $29.99</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Test Product #2</h5>
              <p className="card-text">Price: $49.99</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Test Product #3</h5>
              <p className="card-text">Price: $19.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
