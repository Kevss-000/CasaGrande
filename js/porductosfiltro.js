// Selecciona los filtros y los productos
const filtroTipo = document.getElementById('filtro-tipo');
const filtroPrecio = document.getElementById('filtro-precio');
const filtroTalla = document.getElementById('filtro-talla');
const productos = document.querySelectorAll('.product-card');

// Función para aplicar los filtros
function aplicarFiltros() {
    const tipo = filtroTipo.value;
    const precio = filtroPrecio.value;
    const talla = filtroTalla.value;

    productos.forEach(producto => {
        const prodTipo = producto.dataset.tipo;
        const prodPrecio = parseInt(producto.dataset.precio);
        const prodTalla = producto.dataset.talla;

        let visible = true;

        // Filtrar por tipo
        if (tipo && prodTipo !== tipo) visible = false;

        // Filtrar por precio
        if (precio) {
            if (precio === "menos-100000" && prodPrecio >= 100000) visible = false;
            else if (precio === "100000-200000" && (prodPrecio < 100000 || prodPrecio > 200000)) visible = false;
            else if (precio === "mas-200000" && prodPrecio <= 200000) visible = false;
        }

        // Filtrar por talla
        if (talla && prodTalla !== talla) visible = false;

        // Mostrar u ocultar el producto
        producto.style.display = visible ? 'block' : 'none';
    });
}

// Añadir eventos a los filtros
filtroTipo.addEventListener('change', aplicarFiltros);
filtroPrecio.addEventListener('change', aplicarFiltros);
filtroTalla.addEventListener('change', aplicarFiltros);

// Aplicar los filtros cuando la página cargue por primera vez
document.addEventListener('DOMContentLoaded', aplicarFiltros);
