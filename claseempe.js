class Emprendedor {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
      
    
        // Inicializar las propiedades del emprendedor con los valores recibidos como argumento
        // tu código aquí
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
        
        // Retorna un string conteniendo nombre y apellido del emprendedor
        // tu código aquí
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
        // Agrega una mascota al arreglo de mascotas
        // tu código aquí
    }

    countMascotas() {
        return this.mascotas.length;
        // Retorna la cantidad de mascotas del emprendedor
        // tu código aquí
    }

    addLibro(titulo, autor) {
        

        this.libros.push( {titulo, autor});
         
        
        
        // Agregar un objeto: { titulo: titulo, autor: autor }
        // al arreglo de libros.
        // tu código aquí
    }

    getLibros() {
        
        return this.libros.map((libros) => libros.titulo);
        
        
        // Retorna un arreglo con los títulos de todos los libros en el arreglo de libros
        // tu código aquí
    }
    
     
     
}