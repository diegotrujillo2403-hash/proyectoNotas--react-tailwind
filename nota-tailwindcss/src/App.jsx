import { useState } from "react";

//importamos los componentes
import NoteForm from "./components/NoteForm";
import NoteList from "./components/noteList";

export default function App() {
  //creamos un estado para guardar las notas en un array
  const [notas, setNotas] = useState([]);

  //funcion para agregar notas al estado
  const agregarNota = (texto) => {
    const nuevaNota = { id: Date.now(), texto };
    //creamos el arreglo con notas anteriores y la nueva
    setNotas([...notas, nuevaNota]);
  };

  // 🔹 NUEVO: función para eliminar por id
  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-amber-50 p-10 bg-blue-600 font-bold mb-5 text-center sm:text-left">
        📝Mis Notas
      </h1>

      {/* agrego el form para agregar notas */}
      <NoteForm agregarNota={agregarNota} />

      <NoteList notas={notas} eliminarNota={eliminarNota} />
    </div>
  );
}
