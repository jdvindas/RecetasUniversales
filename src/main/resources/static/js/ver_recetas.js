  document.addEventListener("DOMContentLoaded", (event) => {
    const numReceta = obtenerNumRecetaURL();
    verRecetaCompleta(numReceta)
  });

function obtenerNumRecetaURL(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const numReceta = urlParams.get('receta')
    return numReceta;
}


function verRecetaCompleta(numReceta = 1){
    const recipe = libro_de_recetas[numReceta];
    const recipeDetailsDiv = document.getElementById('recipeDetails');
    
    if (recipe) {
        recipeDetailsDiv.innerHTML = `
            <td width="60%">
                <h2>${recipe.name}</h2>
                <p><em>Ingredientes</em><span style="float:right;"><em>Duración: ${recipe.tiempo}</em></span></p>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </td>
            <td width="40%" align="center">
                <div class="imagen-fondo">
                    <img src="${recipe.image}" alt="${recipe.name}" width="200">
                </div>
            </td>
        `;
    } else {
        recipeDetailsDiv.innerHTML = '<td colspan="2"><<p>Receta no encontrada.</p></td>';
    }    
}
