import sampleJson from '../../public/json/sample.json';

export const jsonData = sampleJson;

function isValidJson(jsonString: string) {
  try {
    JSON.parse(jsonString);
    return true; // Parsing successful, string is valid JSON
  } catch {
    return false; // Parsing failed, string is not valid JSON
  }
}
export const handleErrorMessage = (error: Error) => JSON.parse(isValidJson(error?.message) ? error?.message : '{ "status": 500, "message": "Oops! Something went wrong on our end. We\'re unable to process your request right now.Please try again shortly.We apologize for the inconvenience.", "errors": {} }') as { status: number; message: string; errors: object };