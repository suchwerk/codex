# Beispiel: WMS-Admin-Oberfläche (Quasar + Material Design, Mantis-Farbschema)

## Kurzbeschreibung
Dieses Beispiel beschreibt eine gelungene Desktop-Admin-Oberfläche für ein Warehouse-Management-System (WMS) auf Basis von **Quasar** (Material Design). Der Fokus liegt auf einer klaren Informationshierarchie, konfigurierbarem Schnellzugriff und statusbasierten Workflows (z. B. Outbounds mit festen Filtern wie *offen*, *in Kommissionierung*, *beim Verpacken*, *abgeschlossen*).

## Informationsarchitektur (Desktop)
- **Links (QDrawer):** Hauptnavigation
  - Dashboard
  - Outbounds
  - Inbounds
  - Inventur
  - Stammdaten
  - Reports
  - Einstellungen
- **Oben (QToolbar):** Kontextleiste
  - globaler Suchfokus
  - Benachrichtigungen
  - Nutzerprofil
- **Mitte (QPage):** Kontextbezogene Arbeitsfläche
  - Tab- oder Segmentsteuerung für Statusfilter
  - Datenlisten und Detailpanel

## Konfigurierbarer Schnellzugriff
Ein „Quick Access“-Bereich im oberen Bereich oder als zusammenklappbares Panel:
- **Favoriten** als Chips/Buttons (QChip/QBtn) mit Drag-&-Drop-Umordnung
- **Konfigurierbare Shortcuts** (z. B. *Neuer Outbound*, *Picking starten*, *Label drucken*)
- **Kontextabhängig:** Schnellzugriffe pro Modul speichern (Outbounds vs. Inbounds)

## Outbounds-Beispiel (Status-Filter)
**Outbounds** als Hauptbereich mit festen Statusfiltern (QTabs/QBtnToggle):
- **Offen**
- **In Kommissionierung**
- **Beim Verpacken**
- **Abgeschlossen**

Darunter:
- **Liste/Tabelle (QTable)** mit Spalten wie Auftrag, Kunde, Priorität, SLA, Status
- **Farbliche Kennzeichnung** je Status (Mantis-ähnliche Akzentfarben)
- **Rechte Seitenleiste** mit Detailansicht und Aktionen (z. B. *Pick-Listen*, *Packstation*, *Versandlabel*)

## Mantis-inspiriertes Farbschema
- **Neutraler Hintergrund** für große Tabellenflächen
- **Akzentfarben** für Statuschips und wichtige Aktionen
- **Hoher Kontrast** für kritische Hinweise (z. B. SLA-Überfälligkeit)

## Warum dieses Beispiel „gelungen“ ist
- **Material-Design-konform** durch Quasar-Komponenten und klare Raster
- **Hohe Bedienbarkeit** durch festen Schnellzugriff und klaren Statusfluss
- **WMS-typische Workflows** werden direkt in der Navigation abgebildet
- **Skalierbar**: neue Module lassen sich in Navigation & Quick-Access übernehmen

## Quasar-Komponenten-Mapping (Kurzüberblick)
- Layout: `QLayout`, `QDrawer`, `QPageContainer`
- Navigation: `QList`, `QItem`, `QTabs`, `QTab`
- Aktionen: `QBtn`, `QBtnGroup`, `QChip`, `QMenu`
- Daten: `QTable`, `QPagination`, `QBadge`

---

Wenn du möchtest, kann ich im nächsten Schritt eine konkrete Quasar-Seitenstruktur (Vue-Datei) skizzieren oder ein Wireframe-Layout als Screenshot erstellen.
