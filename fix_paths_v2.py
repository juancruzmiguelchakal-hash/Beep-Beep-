import os

directory = r'c:\Users\Usuario\Desktop\peruano puto\menus'
# Using forward slashes for replacements to ensure matching against HTML content
replacements = [
    ('href="assets/', 'href="../assets/'),
    ('src="assets/', 'src="../assets/'),
    ("url('./assets/", "url('../assets/"),
    ("url('assets/", "url('../assets/"),
    ('href="styles.css"', 'href="../styles.css"'),
    ('src="loadComponents.js"', 'src="../loadComponents.js"'),
    ('src="main.js"', 'src="../main.js"'),
    ('href="index.html"', 'href="../index.html"'),
    ('href="nosotros.html"', 'href="../nosotros.html"'),
    ('href="restaurantes.html"', 'href="../restaurantes.html"'),
    ('href="repartidores.html"', 'href="../repartidores.html"'),
    ('href="contacto.html"', 'href="../contacto.html"'),
    ('href="faq.html"', 'href="../faq.html"'),
    ('href="terminos.html"', 'href="../terminos.html"'),
    ('href="privacidad.html"', 'href="../privacidad.html"'),
    ('href="promociones.html"', 'href="../promociones.html"'),
    ('href="nuevos-comercios.html"', 'href="../nuevos-comercios.html"'),
    ('href="blog.html"', 'href="../blog.html"'),
    ('href="sobre-nosotros.html"', 'href="../sobre-nosotros.html"')
]

print(f"Scanning directory: {directory}")
if not os.path.exists(directory):
    print("Directory does not exist!")
    exit(1)

files = [f for f in os.listdir(directory) if f.endswith(".html")]
print(f"Found {len(files)} HTML files.")

for filename in files:
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    modifications = 0
    for old, new in replacements:
        if old in new_content:
            new_content = new_content.replace(old, new)
            modifications += 1
            print(f"  Replaced '{old}' with '{new}' in {filename}")
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename} with {modifications} replacements.")
    else:
        print(f"No changes needed for {filename}")
