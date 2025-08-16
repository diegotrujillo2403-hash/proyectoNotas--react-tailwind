// src/components/NoteList.jsx
const NoteList = ({ notas, eliminarNota }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Mis Notas</h2>

      {notas.length === 0 ? (
        <p className="text-gray-500">No hay notas todavía...</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {notas.map((nota) => (
            <div
              key={nota.id}
              className="bg-white p-3 rounded shadow flex justify-between items-center"
            >
              <span>{nota.texto}</span>

              {/* 🔹 Botón eliminar */}
              <button
                onClick={() => eliminarNota(nota.id)}
                className="text-red-500 hover:text-red-700 font-bold ml-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
