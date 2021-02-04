import GetUserRandom from "utils/GetUserRandom"

test("Obtener datos de la API random", async () => {
  const GetUser = new GetUserRandom();
  const data = await GetUser.__invoke();
  
  expect(data).not.toBeNull();
})