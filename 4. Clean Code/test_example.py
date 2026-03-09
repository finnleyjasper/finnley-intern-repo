def add(a, b):
    return a + b

def test_add_five():
    result = add(3, 2)
    assert result == 5, "Result should be 5"

def test_add_negative():
    result = add(-1, 1)
    assert result == 0, "Result should be 0"

def test_add_strings():
    result = add("hello", "world")
    assert result == "helloworld", "Result should be 'helloworld'"

def test_bad_math(): # should fail
    result = add(1, 2)
    assert result == 4, "Result should be 4... if you're bad at math!"
