open Jest;

describe("Expect", () =>
  Expect.(test("Example test", () =>
            expect(1 + 2) |> toBe(3)
          ))
);

describe("Expect.Operators", () => {
  open Expect;
  open! Expect.Operators;

  test("Example test Two", () =>
    expect(1 + 2) === 3
  );
});
