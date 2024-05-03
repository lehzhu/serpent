function initializeWebGL(canvasId) {
    const canvas = document.getElementById(canvasId);
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        alert('Unable to initialize WebGL. Your browser may not support it.');
        return null;
    }

    return gl;
}

const gl = initializeWebGL('gameCanvas');

function main() {
    if (!gl) {
        console.log('Failed to initialize WebGL');
        return;
    }

    // Set clear color to dark grey, fully opaque
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

main();

