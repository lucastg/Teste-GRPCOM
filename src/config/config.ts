/**
 * Recupera uma variável de ambiente ou dispara um erro se ela não
 * está definida
 * @param name [string] nome da variável de ambiente
 * @returns [string] valor da variável de ambiente
 */
function getFromEnv(name: string): string {
  if (!process.env[name]) throw Error(`Required env ${name}`);
  return process.env[name] as string;
}

export default function config() {
  return {
    api_globo: getFromEnv("API_GLOBO")
  };
}
