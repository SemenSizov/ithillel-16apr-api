test.each([
    [1, 2, 3],
    [4, 5, 9],
    [11, 15, 26],
])('Sum %d + %d = %d', (a, b, expected) => {
    expect(a + b).toBe(expected)
})
