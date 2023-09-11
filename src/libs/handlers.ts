import { FormType } from "@/types/interface";

export async function PostFormData(values: FormType, url: string) {
  const req = await fetch(url, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json",
    },
  }).catch((e) => console.log("error"));
}
