# Licenser för beroenden

Källträdet hämtar externa bibliotek via npm. Bibliotekens kod följer sina respektive licenser.

| Paket | Version | Licens enligt paketet |
| --- | --- | --- |
| [DOMPurify](https://github.com/cure53/DOMPurify) | 3.4.17 | Apache-2.0 eller MPL-2.0 |
| [Marked](https://github.com/markedjs/marked) | 15.0.12 | MIT |
| [Mermaid](https://github.com/mermaid-js/mermaid) | 12.3.0 | MIT |
| [elkjs](https://github.com/kieler/elkjs) | 0.12.0 i den distribuerade Mermaid-filen | EPL-2.0 eller GPL-3.0-or-later |

Bygget bäddar in paketens licenstexter och upphovsrättsnotiser från `third-party-notices.json` i HTML-filen. Inventeringen utgår från Mermaids publicerade källkarta och de två direkt inbäddade biblioteken. DOMPurify distribueras enligt Apache-2.0. Inbyggd ELK distribueras enligt EPL-2.0, med [motsvarande källkod för elkjs 0.12.0](https://github.com/kieler/elkjs/tree/0.12.0).

- [Eclipse Public License 2.0](https://www.eclipse.org/legal/epl/epl-v20.html)
- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [Mozilla Public License 2.0](https://www.mozilla.org/MPL/2.0/)
