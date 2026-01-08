const fs = require('fs');
const path = require('path');

const directory = 'menus';
const basePath = path.join(__dirname, directory);

const replacements = [
    { old: 'href="assets/', new: 'href="../assets/' },
    { old: 'src="assets/', new: 'src="../assets/' },
    { old: "url('./assets/", new: "url('../assets/" },
    { old: "url('assets/", new: "url('../assets/" },
    { old: 'href="styles.css"', new: 'href="../styles.css"' },
    { old: 'src="loadComponents.js"', new: 'src="../loadComponents.js"' },
    { old: 'src="main.js"', new: 'src="../main.js"' },
    { old: 'href="index.html"', new: 'href="../index.html"' },
    { old: 'href="nosotros.html"', new: 'href="../nosotros.html"' },
    { old: 'href="restaurantes.html"', new: 'href="../restaurantes.html"' },
    { old: 'href="repartidores.html"', new: 'href="../repartidores.html"' },
    { old: 'href="contacto.html"', new: 'href="../contacto.html"' },
    { old: 'href="faq.html"', new: 'href="../faq.html"' },
    { old: 'href="terminos.html"', new: 'href="../terminos.html"' },
    { old: 'href="privacidad.html"', new: 'href="../privacidad.html"' },
    { old: 'href="promociones.html"', new: 'href="../promociones.html"' },
    { old: 'href="nuevos-comercios.html"', new: 'href="../nuevos-comercios.html"' },
    { old: 'href="blog.html"', new: 'href="../blog.html"' },
    { old: 'href="sobre-nosotros.html"', new: 'href="../sobre-nosotros.html"' }
];

if (!fs.existsSync(basePath)) {
    console.error(`Directory ${basePath} does not exist.`);
    process.exit(1);
}

const files = fs.readdirSync(basePath).filter(file => file.endsWith('.html'));
console.log(`Found ${files.length} HTML files.`);

files.forEach(file => {
    const filePath = path.join(basePath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(rep => {
        content = content.split(rep.old).join(rep.new);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes for ${file}`);
    }
});
