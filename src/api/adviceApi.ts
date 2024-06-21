export interface Slip {
  id: number;
  advice: string;
}

const URL = "https://api.adviceslip.com/advice";

export const fetchAdvice = async (): Promise<Slip> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      switch (response.status) {
        case 409:
          throw new Error(
            "Conflict: The request could not be completed due to a conflict."
          );
        case 500:
          throw new Error(
            "Internal Server Error: The server encountered an error and could not complete your request."
          );
        case 502:
          throw new Error(
            "Bad Gateway: The server received an invalid response from the upstream server."
          );
        case 505:
          throw new Error(
            "HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request."
          );
        default:
          throw new Error(`Unexpected error: ${response.statusText}`);
      }
    }
    const data = await response.json();
    return data.slip;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

/*Validar no fetch

200
409 
500
502
505
*/
