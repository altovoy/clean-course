export class HttpClient {
  async get(url: string) {
    const response = await fetch(url);
    const data = response.json();
    const status = response.status;
    console.log({ status });
    return { data, status };
  }
}

/*

Cómo detectar violaciones de OPC

+ Cambios normalmente afectan nuestra clase o módulo

+ Cuando una clase o módulo afecta muchas capas (Presentación, almacenamiento, etc)

*/
