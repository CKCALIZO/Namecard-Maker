import Forms from './Forms.jsx';



function App() {
  return (
    <div className="page-container d-flex flex-column min-vh-100 overflow-x-hidden">
      <div className="header-container my-3">
        <div className="row justify-content-center">
          <div className="col-sm-4 justify-content-start">
            <h1>
              <div className="fw-bold text-center">Namecard Maker</div>
            </h1>
          </div>
        </div>
      </div>

      <div className="body-container flex-grow-1 my-3">
        <Forms/>
      </div>

      <div className="footer-container">
        <div className="row">
          <div className="col text-center">
            <footer>Made by: <b>CKC</b></footer>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App