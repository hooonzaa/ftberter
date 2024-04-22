
        function prunik() {
            var mnozinaA = document.getElementById("mnozinaA").value.split(",");
            var mnozinaC = document.getElementById("mnozinaC").value.split(",");
 
   
            var setA = new Set(mnozinaA.map(item => parseInt(item)));
            var setC = new Set(mnozinaC.map(item => parseInt(item)));
 
            var vysledek = new Set([...setA].filter(x => setC.has(x)));
 
            var vysledekArray = Array.from(vysledek).sort((a, b) => a - b);
 
            alert("Průnik množiny A a C je: {" + vysledekArray.join(", ") + "}");
        }
 
 
        function sjednoceni() {
            var mnozinaA = document.getElementById("mnozinaA").value.split(",");
            var mnozinaB = document.getElementById("mnozinaB").value.split(",");
 
       
            var setA = new Set(mnozinaA.map(item => parseInt(item)));
            var setB = new Set(mnozinaB.map(item => parseInt(item)));
 
         
            var vysledek = new Set([...setA, ...setB]);
 
         
            var vysledekArray = Array.from(vysledek).sort((a, b) => a - b);
 
            alert("Sjednocení množiny A a B je: {" + vysledekArray.join(", ") + "}");
        }
 
        function doplnek() {
            var mnozinaA = document.getElementById("mnozinaA").value.split(",");
            var mnozinaB = document.getElementById("mnozinaB").value.split(",");
 
            var setA = new Set(mnozinaA.map(item => parseInt(item)));
            var setB = new Set(mnozinaB.map(item => parseInt(item)));
 
            var vysledek = new Set([...setB].filter(x => !setA.has(x)));
 
            var vysledekArray = Array.from(vysledek).sort((a, b) => a - b);
 
            alert("Doplněk množiny A vzhledem k B je: {" + vysledekArray.join(", ") + "}");
        }