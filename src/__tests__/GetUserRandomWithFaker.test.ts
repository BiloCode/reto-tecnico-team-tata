import GetUserRandomWithFaker from "utils/GetUserRandomWithFaker";

test("Obtener datos de respaldo", () => {
  const GetUser = new GetUserRandomWithFaker();
  const random_user = GetUser.__invoke();
  
  expect(random_user).not.toBeUndefined();
})