import { api } from "./api";

export async function getCellMethod() {
  const response = await api.get("http://localhost:3000/cell-methods");
  return response;
}
