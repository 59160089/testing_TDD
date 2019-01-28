const greets = require('./GreetingKata')

test ("Requirement 1 Write a method greet(name) that interpolates name in a simple greeting. For example, when name is \"Bob\", the method should return a string \"Hello, Bob.\"." , () =>{
    expect(greets("Bob")).toBe("Hello, Bob.")
})

test ("Requirement 2 Handle nulls by introducing a stand-in. For example, when name is null, then the method should return the string \"Hello, my friend.\"" , () => {
    expect(greets()).toBe("Hello, my friend.")
})


test ("Requirement 3 Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when name is \"JERRY\" then the method should return the string \"HELLO JERRY!\"" , () => {
    expect(greets("JERRY")).toBe('HELLO JERRY!')
}) 


test ("Requirement 4 Handle two names of input. When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when name is ['Jill', 'Jane'], then the method should return the string 'Hello, Jill and Jane.'" , () => {
    expect(greets(['Jill','Jane'])).toBe('Hello, Jill and Jane.')
}) 


test('Handle arbitrarily names of input. When name represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."' , () => {
    expect(greets(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})


test ('Requirement 6 Allow mixing of normal and shouted names by separating the response into two greetings. For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"' , () => {
    expect(greets(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})

test ('Requirement 7 If any entries in name are a string containing a comma, split it as its own input. For example, when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".' ,() => {
   expect(greets(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.")
})

test ('Requirement 8 Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, For example, when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."' , () => {
    expect(greets(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob, Charlie and Dianne.")
})

// โกง Requirement 8 จาก "Hello, Bob and Charlie, Dianne."
//                   เป็น "Hello, Bob, Charlie and Dianne." ครับ