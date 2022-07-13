const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given 0", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0");
  });

  it("Returns a value of length 128 characters when given an empty strings of any length ", () => {
    const trivialKey = deterministicPartitionKey(' ');
    const trivialKey2 = deterministicPartitionKey('  ');

    expect(trivialKey.length).toEqual(128);
    expect(trivialKey2.length).toEqual(128);

    expect(trivialKey.length).toEqual(128);
    expect(trivialKey2.length).toEqual(trivialKey2.length);
  });


  it("Returns a value of length 128 characters when given a non empty or zero value ", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey.length).toEqual(128);
  });

  it("Returns a value of length 128 characters when given a non empty string value ", () => {
    const trivialKey = deterministicPartitionKey('some-random-key');
    expect(trivialKey.length).toEqual(128);
  });

  it("Returns a value of length 128 character when given an object with key partialKey", () => {
    const trivialKey = deterministicPartitionKey({ partialKey: 'abcdwxyz' });
    expect(trivialKey.length).toEqual(128);
  });
});
