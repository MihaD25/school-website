# Documentație Biblioteca Online

## Cuprins
1. [Introducere](#introducere)
2. [Accesarea Aplicației](#accesarea-aplicației)
3. [Interfața Publică](#interfața-publică)
4. [Interfața de Administrare](#interfața-de-administrare)
5. [Funcționalități](#funcționalități)
6. [Ghid de Utilizare](#ghid-de-utilizare)
7. [Instalare și Deployment](#instalare-și-deployment)

## Introducere
Biblioteca Online este o aplicație web pentru gestionarea unei biblioteci. Permite vizualizarea și căutarea cărților pentru utilizatori și administrarea completă a inventarului pentru administratori.

## Accesarea Aplicației

### Cerințe Sistem
- Browser web modern (Chrome, Firefox, Edge)
- Conexiune la internet
- Rezoluție minimă recomandată: 1024x768

### URL-uri Importante
- Pagina principală: `http://your-domain.com/biblioteca`
- Pagina de administrare: `http://your-domain.com/biblioteca/admin`
- Pagina de login: `http://your-domain.com/biblioteca/login`

### Credențiale Implicite
- Username: `admin`
- Password: `admin`

## Instalare și Deployment


### Structură pentru Upload
```
biblioteca/
├── biblioteca.jar
└── start.sh
```

### Deployment pe Hosting
1. Uploadează directorul `biblioteca` pe server
2. Folosește panoul de control pentru:
   - Secțiunea "Java Applications" sau similară
   - Adaugă o nouă aplicație
   - Selectează biblioteca.jar
   - Configurează portul conform hosting-ului

### Prima Rulare
- Se va crea automat directorul data/
- Se va initializa baza de date
- Folosește credențialele implicite (admin/admin)
- Schimbă parola după primul login

## Interfața Publică

### Pagina Principală
- **Bara de Căutare**: Permite căutarea după titlu, autor sau ISBN
- **Filtru Categorii**: Filtrează cărțile după categoria selectată
- **Lista Cărți**: Afișează toate cărțile disponibile
- **Export Excel**: Permite descărcarea listei de cărți în format Excel

### Informații Afișate pentru Fiecare Carte
- Titlu
- Autor
- Descriere
- ISBN
- Categorie
- Număr copii disponibile

## Interfața de Administrare

### Autentificare
1. Accesați `http://site-tau.com/biblioteca/login`
2. Introduceți credențialele de administrator
3. După autentificare veți fi redirecționat către panoul de administrare

### Panoul de Administrare
- Listă completă cărți
- Butoane pentru adăugare, editare și ștergere
- Informații detaliate despre fiecare carte

## Funcționalități

### Căutare și Filtrare
- **Căutare Globală**: Caută în titlu, autor și ISBN
- **Filtrare Categorii**: Filtrează după categoriile predefinite
- **Rezultate Live**: Actualizare instantanee a rezultatelor

### Administrare Cărți

#### Adăugare Carte Nouă
1. Click pe "Adaugă Carte"
2. Completați toate câmpurile obligatorii:
   - Titlu
   - Autor
   - Descriere
   - ISBN (13 cifre)
   - Categorie
   - Copii disponibile
3. Click pe "Salvează"

#### Editare Carte
1. Click pe butonul "Editează" lângă cartea dorită
2. Modificați câmpurile necesare
3. Click pe "Salvează"

#### Ștergere Carte
1. Click pe butonul "Șterge"
2. Confirmați ștergerea în fereastra de dialog

### Export Date
- Format: Excel (.xlsx)
- Conține toate informațiile despre cărți
- Păstrează formatarea și culorile

## Ghid de Utilizare

### Pentru Utilizatori
1. **Căutare Carte**
   - Introduceți termenul în bara de căutare
   - Apăsați Enter sau click pe "Caută"

2. **Filtrare după Categorie**
   - Selectați categoria din dropdown
   - Click pe "Filtrează"

3. **Export Liste**
   - Click pe "Exportă în Excel"
   - Alegeți locația de salvare

### Pentru Administratori
1. **Gestionare Inventar**
   - Adăugați cărți noi regulat
   - Actualizați numărul de copii disponibile
   - Verificați ISBN-urile să fie unice

2. **Mentenanță**
   - Verificați periodic acuratețea datelor
   - Actualizați descrierile când este necesar
   - Ștergeți cărțile care nu mai sunt relevante
