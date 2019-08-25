describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('deberia retornar "fghijklmnopqrstuvwxyzabcde" para "abcdefghijklmnopqrstuvwxyz" con offset 5', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 5), "fghijklmnopqrstuvwxyzabcde");
    })
    it('deberia retornar "012345678" para "123456789" con offset 9' , () =>{
      assert.equal(cipher.encode("123456789", 9), "012345678");
    } )
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it ('deberia retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offset 27', () => {
     assert.equal(cipher.decode("bcdefghijklmnopqrstuvwxyza", 27),"abcdefghijklmnopqrstuvwxyz");
    });
    it ('deberia retornar "456789012" para "123456789" con offset 13', () => {
      assert.equal(cipher.decode("123456789", 13), "456789012");
    });
  
  });
})
