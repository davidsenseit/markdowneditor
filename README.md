# Markdowneditor

En fristående Markdowneditor med svensk meny, förhandsgranskning, lokala filer och stöd för Mermaid. Mermaid använder ELK som standard och stöder ett diagramvis val av layout.

## Ladda ned

[Ladda ned markdowneditor.html](https://raw.githubusercontent.com/davidsenseit/markdowneditor/main/markdowneditor.html) och öppna filen lokalt i webbläsaren.

## Bygg och öppna

Kör `npm ci` och sedan `npm run build`. Öppna den genererade filen `dist/markdowneditor.html` i webbläsaren. Den färdiga HTML-filen fungerar lokalt utan server eller nätverksanslutning. Funktionerna för direkt filåtkomst beror på webbläsarens stöd.

## Hjälp

Hjälpfönstret innehåller en guide till editorfunktionerna, en Markdown-exempelfil och 21 Mermaid-exempel. Växla mellan formaterad visning och kod för att läsa och kopiera exemplen.

## Beroenden

Beroendena och deras versioner anges i `package.json` och `package-lock.json`. Se [Licenser för beroenden](THIRD-PARTY.md) för uppgifter om paketen och vad som behöver följa med vid distribution av en färdig HTML-fil.

Utvecklad av [Sense-IT.se](https://sense-it.se).

## Licens

Editorns egen kod är licensierad under [MIT](LICENSE). Den fristående HTML-filen innehåller tredjepartsvillkoren under **Hjälp → Om och licenser**.
