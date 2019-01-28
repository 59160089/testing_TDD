function greets(name = "my friend") {

    if (typeof name == typeof []) {

        var printNormal = []
        var printAllUpperCase = []

        for (i = 0; i < name.length; i++) {
            if (name[i] == name[i].toUpperCase()) {
                printAllUpperCase.push(name[i])
            } else {
                //console.log(name[i])
                var split = name[i].split(", ")
                // console.log(split.length)

                for (j = 0; j < split.length; j++) {
                    printNormal.push(split[j])
                    //  console.log(split[j])
                }
            }
        }
        var finalPrint = ''
        if (printNormal.push.length > 0) {
            finalPrint += normal(printNormal)
        }
        if (printAllUpperCase.length > 0) {
            finalPrint += ` ${allUpperCase(printAllUpperCase)}`
        }
        return finalPrint

    } else {

        if (!(name === name.toUpperCase())) {
            return normal(name)
        }
        else {
            return allUpperCase(name)
        }
    }
}

function allUpperCase(data) {
    if (typeof data == typeof []) {
        print = 'AND HELLO'
        for (i = 0; i < data.length; i++) {
            print += ` ${data[i]}`
        }
        print += "!"
        return print
    } else {
        return `HELLO ${data}!`
    }


}

function normal(data) {
    if (typeof data == typeof []) {
        print = 'Hello,'
        if (data.length > 2) {
            for (i = 0; i < data.length - 1; i++) {
              const index = data[i].indexOf('"')

              if(index == -1)
                print += ` ${data[i]},`
                else
                if(index == 0){
                    print += ` ${data[i].substr(1)}`
                  
                }
                else{
                  
                    print += ` ${data[i].substr(0,data[i].length-1)}`
                }
              
            }
            if(data[data.length - 1].indexOf('"') != -1) {
                print += ` and ${data[data.length - 1].substr(0,data[data.length -1 ].length-1)}`
                print += "."
            }else{
                print += ` and ${data[data.length - 1]}`
                print += "."
            }
        }else{
            for (i = 0; i < data.length - 1; i++) {
                print += ` ${data[i]}`
            }
            print += ` and ${data[data.length - 1]}`
            print += "."
        }
        return print
    } else {
        return `Hello, ${data}.`
    }
}

//console.log(greets(["Bob", "\"Charlie, Dianne\""]))

//console.log(greets(["first", "bob"]))

//console.log(greets(["Amy", "Brian", "Charlotte"]))

//console.log(greets(["Amy", "BRIAN", "Charlotte"]) )

//console.log(greets(["Bob", "Charlie, Dianne"]) )

//console.log(greets("JERRY"))



module.exports = greets