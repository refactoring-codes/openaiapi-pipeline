

@Test
public void testSA() {
    String s = "test";
    assertTrue(SomeClass.sA(s));
}

@Test
public void testFo() {
    String s = "test";
    assertEquals("tset", SomeClass.fo(s));
}