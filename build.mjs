import { mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('./', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const template = await read('src/index.html');
const libraries = [
  ['DOMPurify', 'dompurify', 'dist/purify.min.js'],
  ['Marked', 'marked', 'marked.min.js'],
  ['Mermaid', 'mermaid', 'dist/mermaid.min.js']
];
const scripts = await Promise.all(libraries.map(async ([name, folder, path]) => {
  const code = (await read(`node_modules/${folder}/${path}`))
    .replace(/\n\/\/# sourceMappingURL=[^\n]*\s*$/, '');
  if (/<\/script\b/i.test(code)) {
    throw new Error(`${name} kan inte bäddas in direkt i HTML.`);
  }
  return `<script data-library="${name}">\n${code}\n</script>`;
}));
if (template.split('<!-- BUNDLED_LIBRARIES -->').length !== 2) {
  throw new Error('HTML-mallen måste innehålla exakt en plats för biblioteken.');
}
const notices = JSON.parse(await read('third-party-notices.json'));
const licenses = [
  '# Om och licenser',
  'Markdowneditor är utvecklad av [Sense-IT.se](https://sense-it.se). Editorns egen kod omfattas av MIT.',
  'ELK 0.12.0 i Mermaid-paketet distribueras under EPL-2.0. Motsvarande källkod är tillgänglig under samma licens i [elkjs 0.12.0](https://github.com/kieler/elkjs/tree/0.12.0).',
  'DOMPurify distribueras under Apache-2.0. Originalnotiserna nedan anger även de alternativa licenser som respektive projekt erbjuder.',
  '## Editorns licens',
  `\`\`\`\n${await read('LICENSE')}\n\`\`\``,
  ...notices.flatMap(({name, version, license, files}) => [
    `## ${name} ${version} – ${license}`,
    ...Object.entries(files).map(([file, body]) => `### ${file}\n\n\`\`\`\`text\n${body}\n\`\`\`\``)
  ])
].join('\n\n');
const escapedLicenses = licenses.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const html = template.replace('<!-- BUNDLED_LIBRARIES -->', () => scripts.join('\n'))
  .replace('<!-- RELEASE_LICENSES -->', () => `<div id="release-licenses" hidden>${escapedLicenses}</div>`);
await mkdir(new URL('dist/', root), {recursive:true});
await writeFile(new URL('dist/markdowneditor.html', root), html);
