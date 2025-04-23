import Forms from './Forms.jsx';



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h1 className="text-center mt-3 fw-bold">Namecard Maker</h1>
        <Forms className="flex-grow-1"/>
      <footer className="text-center mt-auto mb-3 fw-bold">
        Made by: CKC
      </footer>
    </div>
  );
}

export default App