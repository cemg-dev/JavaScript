// Existem diversas funcoes que permitem trabalhar com strings

var s = "hello, world" // Começa com um texto.
s.charAt(0)            // => "h": o primeiro caractere.
s.charAt(s.length - 1) // => "d": o último caractere.
s.substring(1, 4)      // => "ell": o 2º, 3º e 4º caracteres.
s.slice(1, 4)          // => "ell": a mesma coisa
s.slice(-3)            // => "rld": os últimos 3 caracteres
s.indexOf("l")         // => 2: posição da primeira letra l.
s.lastIndexOf("l")     // => 10: posição da última letra l.
s.indexOf("l", 3)      // => 3: posição do primeiro "l" em ou após 3
s.split(", ")          // => ["hello", "world"] divide em substrings
s.replace("h", "H")    // => "Hello, world": substitui todas as instâncias
s.toUpperCase()        // => "HELLO, WORLD"
