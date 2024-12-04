import removeThaiDangling from ".";

test("Remove Thai dangling characters", () => {
  expect(removeThaiDangling("๊ก")).toBe("ก");
  expect(removeThaiDangling("๊กข")).toBe("กข");
  expect(removeThaiDangling("๊กขฃ")).toBe("กขฃ");
  expect(removeThaiDangling("๊กขฃค")).toBe("กขฃค");

  expect(removeThaiDangling("ิกขฃคฅฆ")).toBe("กขฃคฅฆ");
});

test("Remove zero width characters", () => {
  expect(removeThaiDangling("ฟหกด\u200b")).toBe("ฟหกด");
  expect(removeThaiDangling("\u200bฟหกด")).toBe("ฟหกด");
  expect(removeThaiDangling("ฟหกด\u200b\u200c\u200d")).toBe("ฟหกด");
  expect(removeThaiDangling("\u200bฟหกด\u200b\u200c\u200d")).toBe("ฟหกด");
});
