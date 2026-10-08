function App() {

  return (
    <div>
      <h1 className="title">Il mio primo esercizio React</h1>

      <label htmlFor="userName" className="label">
        Nome utente
      </label>

      <input
        type="text"
        id="userName"
        className="input"
        placeholder="Inserisci il tuo nome"
      />
    </div>
  )
}

export default App