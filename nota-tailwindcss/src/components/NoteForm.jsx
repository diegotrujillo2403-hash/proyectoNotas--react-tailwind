import { useState } from "react";

export default function NoteForm({agregarNota}) {
  //creamos un estado para el texto de la nota
  const [texto, setTexto] = useState("");

  // crearemos una funcion para mandar el formulario
  const enviarForm = (e) => {
    e.preventDefault(); // evita que la pagina se recargue

    if (!texto.trim()) return; // si el texto esta vacio no retorna nada

    agregarNota(texto);
    setTexto(""); //limpiamos la caja de texto
  };

  return (
    //crear nuestro formulario

    <form onSubmit={enviarForm} className="flex flex-col lg:flex-row gap-2 mb-5 ">
      <input
        type="text"
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
        placeholder="Escribe una nota...."
        className="border rounded p-2 flex-1 m-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2 "
      >
        Agregar
      </button>
    </form>
  );
}
