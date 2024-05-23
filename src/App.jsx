import { Route, Routes } from "react-router-dom";
import Crud from "./Crud";
import Edit from "./Edit";
import Create from "./Create";
import { useState } from "react";

function App() {
  const [edit, setEdit] = useState();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud setEdit={setEdit} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit edit={edit} />} />
      </Routes>
    </div>
  );
}

export default App;
