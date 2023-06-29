async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    } catch {
      throw new error('API Not Found')
    }
  }
  