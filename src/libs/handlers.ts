import { FormType } from "@/types/interface";


export async function PostFormData(values: FormType, url: string) {
  const req = await fetch(`${process.env.URL_FORM_DATA}${url}`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "content-type": "utf-8",
    },
  });
  if (!req.ok) {
    throw new Error("Error");
  }
  return console.log(req);
}
