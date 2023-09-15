import { FormType } from "@/types/interface";

export async function HandlerFormData(
  url: string,
  method: string,
  values?: FormType
) {
  const requestOptions: RequestInit = {
    method: method.toUpperCase(), // Convert method to uppercase
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (values) {
    requestOptions.body = JSON.stringify(values);
  }

  const req = await fetch(
    `${process.env.NEXT_PUBLIC_URL_FORM_DATA}${url}`,
    requestOptions
  );
  if (!req.ok) {
    throw new Error("Error");
  }
  return req.json()
}
