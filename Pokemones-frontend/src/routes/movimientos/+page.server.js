export async function load() {
    let url = new URL('http://localhost:8000/movimientos/');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    let movimientos = await response.json();

    return {
        movimientos: movimientos
    };
}
