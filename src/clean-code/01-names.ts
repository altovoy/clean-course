(() => {
  // EXAMPLE ONE
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map((f) => f.f);

  // EXAMPLE ONE - REFACTOR
  const filesToEvaluate = [
    { id: 1, erase: false },
    { id: 2, erase: false },
    { id: 3, erase: true },
    { id: 4, erase: false },
    { id: 5, erase: false },
    { id: 7, erase: true },
  ];

  const filesToDelete = filesToEvaluate.filter((file) => file.erase);

  // EXAMPLE TWO
  // Bad
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Good
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const ddmmyyyy = new Date();
  const currentDate = new Date();

  // días transcurridos - elapsed time in days
  const d: number = 23;
  const elapsedDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const dir = 33;
  const filesCounter: number = 33;

  // primer nombre - first name
  const nombre = "Fernando";
  const firstName: string = "Fernando";

  // primer apellido - last name
  const apellido = "Herrera";
  const lastName: string = "Herrera";

  // días desde la última modificación - days since modification
  const dsm = 12;
  const daysSinceLastModification: number = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassesPerStudent: number = 6;
})();
