import { FormType } from "@/types/interface";


export async function PostFormData(values: FormType, url: string) {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL_FORM_DATA}${url}`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!req.ok) {
    throw new Error("Error");
  }
  return console.log(req);
}
