constructor() {
    super();
    this.state = { message: "" };
  }

  const fullMessage = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
    // Modificar contenido
    fullMessage.split("").map( (item, i) => {
      // Programar tiempo en rellenar
      setTimeout(() => {
        this.setState({ message : this.state.message + item });
      }, i*200);
    });
  }
