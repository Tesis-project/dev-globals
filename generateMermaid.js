const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const modulesDir = path.join(__dirname, 'src', 'modules');

function findInterfacesInFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);

    const interfaces = [];
    function visit(node) {
        if (ts.isInterfaceDeclaration(node) && node.name) {
            const interfaceName = node.name.text;
            const properties = node.members.map(member => {
                if (ts.isPropertySignature(member) && member.name) {
                    return member.name.getText(sourceFile);
                }
                return '';
            }).filter(Boolean);
            interfaces.push({ name: interfaceName, properties });
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return interfaces;
}

function findInterfacesInDir(dir) {
    const interfaces = [];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            interfaces.push(...findInterfacesInDir(filePath));
        } else if (filePath.endsWith('.ts')) {
            interfaces.push(...findInterfacesInFile(filePath));
        }
    });
    return interfaces;
}

const interfaces = findInterfacesInDir(modulesDir);

let mermaidDiagram = 'classDiagram\n';
interfaces.forEach(iface => {
    mermaidDiagram += `class ${iface.name} {\n`;
    iface.properties.forEach(prop => {
        mermaidDiagram += `  ${prop}\n`;
    });
    mermaidDiagram += '}\n';
});

console.log(mermaidDiagram);