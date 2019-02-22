window.onload = function () {
    QUnit.test("UnitTest", function (assert) {
        let product = weightConverter(1);
        assert.equal(product, "0.453592", "1 pound is equal to 0.453592 so test is passed!!")
    })

}