<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <main>
        
        <div id="todos">
            <div class="pokemon-todos" id="listaPokemon">
            </div>
        </div>
        
        <div class="pagination" id="pagination">
            <button id="prevPage"><i class="fa-solid fa-chevron-left"></i>  Anterior</button>
            <span id="currentPage">1</span>
            <button id="nextPage">Siguiente <i class="fa-solid fa-chevron-right"></i></button>
        </div>
        
    </main>

    <script src="./js/fetch.js"></script>
</body>
</html>