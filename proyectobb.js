
    const cancha = document.getElementById("cancha");
    const filas = document.querySelectorAll("table tbody tr");

    filas.forEach(fila => {
        fila.addEventListener("click", () => {
            cancha.style.display = "block"; // mostrar la cancha
            setTimeout(() => {
                cancha.style.display = "none"; // ocultarla después de 3 segundos
            }, 3000);
        });
    });

    document.querySelectorAll("td").forEach(celda => {
        const valorSpan = celda.querySelector(".valor");
        const btnMas = celda.querySelector(".btn-mas");
        const btnMenos = celda.querySelector(".btn-menos");
    
        if (valorSpan && btnMas && btnMenos) {
            btnMas.addEventListener("click", () => {
                let valor = parseInt(valorSpan.textContent);
                valorSpan.textContent = valor + 1;
            });
    
            btnMenos.addEventListener("click", () => {
                let valor = parseInt(valorSpan.textContent);
                if (valor > 0) {
                    valorSpan.textContent = valor - 1;
                }
            });
        }
    });