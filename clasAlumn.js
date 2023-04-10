class Alumno {
    constructor(nombre, apellido, cohorte, grupoDeAmigos, notasDeCheckpoints) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.cohorte = cohorte;
      this.grupoDeAmigos = grupoDeAmigos;
      this.notasDeCheckpoints = notasDeCheckpoints;
    }
  
    countAmigos() {
      return this.grupoDeAmigos.length;
    }
  
    addAmigo(nuevoAmigo) {
      this.grupoDeAmigos.push(nuevoAmigo);
    }
  
    getNotas() {
      return this.notasDeCheckpoints;
    }
  
    addNota(nuevaNota) {
      this.notasDeCheckpoints.push(nuevaNota);
    }
  
    presentacion() {
      return `Hola, ${this.nombre} ${this.apellido} del cohorte ${this.cohorte}.`;
    }
  }
  const alumno1 = new Alumno('Juan', 'Perez', 'Cohorte1', ['Pedro', 'Maria'], [8, 7, 9]);
console.log(alumno1.nombre); // 'Juan'
console.log(alumno1.countAmigos()); // 2
alumno1.addNota(10);
console.log(alumno1.getNotas()); // [8, 7, 9, 10]
console.log(alumno1.presentacion()); // 'Hola, soy  Juan Perez del  cohorte Cohorte.'


//deberas definir una clase en javascript llamada Alumno con sus propiedades 
//y metodos.las propiedades de la clase Alumno son: nombre, apellido,cohorte,
//grupoDeAmigos, notasDeCheckpoints,el constructor de la clase recibe esos
 //cinco datos por parametro.los metodos propios de la clase alumno son: 
 //countAigos que retorna la cantidad de amigos del alumno, addAmigo: 
 
 //permite agregar un  nuevo elemento al arreglo de amigos, getNotas: 
 //retorna el arreglo de notas de checkpoints del alumno, addNota:
  //agrega un nuevo elemnto al arreglo de notas de checkpoints y
   //presentacion que retorna un string conteniendo el nombre, 
   
   
   //apellido y cohorte del alumno.la nueva instancia creada, 
   //alumno1 debera tener