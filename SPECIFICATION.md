# Popis Projektu

Táto webová aplikácia je určená pre členov Slovenského skautingu, ktorí chcú plánovať a sledovať svoj pokrok v ramci programovej ponuky organizacie (Oborky, Vyzvy, VPM, Stupne napredovania, Najvyssie programove ocenenia). V aplikacii sa budu nachádzať rozne pouzivatelske role, ktore budu mat pristup k roznym funkcionalitam. Kde napr ucastnik bude mat pristup len k prezeraniu a evidencii svojich aktivit, popripade svojej skupiny, ale veduca osoba bude mat pristup ku aktivitam vsetkych clenov skupin/podskupin.

## Hlavné funkcie

1. [ ] Registrácia a prihlásenie – Každý používateľ si vytvorí účet, aby mohol pristupovať k svojmu profilu a sledovať svoj pokrok.
2. [x] Prezeranie programovej ponuky – Používateľ si môže prezerať dostupný program a ich aktivity. Pri kliknutí na konkrétny program sa zobrazí jeho popis a podmienky splnenia.
3. [ ] Pridanie sa do družiny (skupiny) – Používateľ sa pripojí k svojej družine, aby mohol spolupracovať s ostatnými členmi.
4. [ ] Pridanie programu do wishlistu alebo jeho okamžité spustenie – Používateľ si môže vybrať programy, ktoré ho zaujímajú, a uložiť si ich na neskôr.
5. [ ] Začatie programu a sledovanie pokroku – Používateľ označí začiatok a koniec programu a sleduje svoj postup cez tri stavy: Nezačaté, Pracuje sa, Splnené.
6. [ ] Pridanie členov družiny do programu – Radca alebo používateľ môže vybrať členov, ktorí sa na programe zúčastnia.
7. [ ] Sledovanie progresu členov družiny – Používateľ vidí stav splnenia úloh ostatných členov. Radca má rozšírený pohľad na správu družiny.
8. [ ] Rozdielne rozhranie pre radcu a člena družiny – Radca spravuje členov a programy, zatiaľ čo člen družiny vidí svoj pokrok a postup ostatných.
9. [ ] Upozornenie pri výbere náročnejších úrovní – Pri výbere pokročilej verzie programu aplikácia upozorní používateľa, ak ešte nesplnil predchádzajúcu úroveň.
10. [ ] Tabuľkové zobrazenie niektorých aktivít – Programy môžu byť vizualizované v prehľadnej tabuľkovej forme pre lepšiu orientáciu.

## Vedľajšie funkcie

1. [ ] Možnosť pridat odborku pomocou formularu - najma pre vedenie organizacie

## Poradie vývoja

1. [ ] Vytvorenie základnej štruktúry projektu
2. [ ] Implementácia autentifikácie
3. [x] Vytvorenie databázy
4. [ ] Implementácia Odboriek
5. [ ] Implementácia Trackovania odboriek pre pouzivatela
6. [ ] Implementácia Spravovania pouzivatelov veducim, schvalovanie a prezeranie ich aktivit
7. [ ] Implementácia Výziev
8. [ ] Implementácia Trackovania Výziev
9. [ ] Implementácia Volnych Programovych Modulov (VPM)
10. [ ] Implementácia Trackovanie VPM
11. [ ] Implementácia stupnov napredovania
12. [ ] Implementácia Trackovanie stupnov napredovania
13. [ ] Implementácia najvyssich programovych oceneni
14. [ ] Implementácia Trackovanie najvyssich programovych oceneni

## Použité technológie

- **Frontend:** React, Next.js, Material-UI -> Hero UI, Styled Components -> Tailwind CSS, Tanstack/React Query
- **Backend:** Next.js Rest API, Prisma ORM
- **Databáza:** MySQL
- **Nasadenie:** dev -> local, Vercel; prod -> \*.skaut(ing).sk
- **Auth:** nie je -> NextAuth.js

## Dolezite linky

- ([Program](https://www.skauting.sk/skauti/program/))
